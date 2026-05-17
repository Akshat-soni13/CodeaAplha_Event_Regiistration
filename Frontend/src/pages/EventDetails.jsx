import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

import toast from "react-hot-toast";

import api from "../service/api";
import Footer from "../components/Footer";

const EventDetails = () => {

  const { id } = useParams();

  const [event, setEvent] = useState(null);

  const [shareCount, setShareCount] =
    useState(128);

  // Register Event
  const handleRegister = async (id) => {

    try {

      const response = await api.post(
        `/api/register/${id}`
      );

      toast.success(
        response.data.message
      );

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }
  };

  // Copy Link
  const copyLink = async () => {

    try {

      await navigator.clipboard.writeText(
        window.location.href
      );

      toast.success(
        "Event link copied!"
      );

      setShareCount((prev) => prev + 1);

    } catch (error) {

      console.log(error);

    }
  };

  // QR Placeholder
  const showQR = () => {

    toast.success(
      "QR feature coming soon 😄"
    );
  };

  useEffect(() => {

    const fetchEvent = async () => {

      try {

        const response = await api.get(
          `/api/event/${id}`
        );

        setEvent(response.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchEvent();

  }, [id]);

  if (!event) {
    return <Loader />;
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full -z-10" />

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full -z-10" />

      {/* HERO SECTION */}
      <div className="relative h-[70vh] w-full overflow-hidden">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover scale-110"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-transparent" />

        {/* Hero Content */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center px-6 w-full max-w-5xl">

          <p className="text-cyan-400 uppercase tracking-[8px] mb-6 text-sm">

            Live Experience

          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6">

            {event.title}

          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-8">

            {event.description}

          </p>

        </div>

      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative group">

            {/* Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

            {/* Card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 shadow-2xl">

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[550px] object-cover rounded-[1.5rem]"
              />

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-5 mb-10">

              {/* Location */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 hover:border-cyan-400/40 transition duration-300">

                <p className="text-gray-400 text-sm mb-2">
                  Location
                </p>

                <p className="font-semibold text-lg">
                  {event.location}
                </p>

              </div>

              {/* Date */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 hover:border-pink-400/40 transition duration-300">

                <p className="text-gray-400 text-sm mb-2">
                  Date
                </p>

                <p className="font-semibold text-lg">

                  {new Date(
                    event.date
                  ).toLocaleDateString()}

                </p>

              </div>

              {/* Organizer */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 hover:border-purple-400/40 transition duration-300">

                <p className="text-gray-400 text-sm mb-2">
                  Organizer
                </p>

                <p className="font-semibold text-lg">

                  {event.createdBy?.name}

                </p>

                <p className="text-xs text-gray-400 mt-1 break-all">

                  {event.createdBy?.email}

                </p>

              </div>

            </div>

            {/* Description */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 mb-10 shadow-2xl">

              <h2 className="text-3xl font-bold mb-6">

                About This Event

              </h2>

              <p className="text-gray-300 leading-9 text-lg">

                {event.description}

              </p>

            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-5 items-center">

              {/* Register */}
              <button
                onClick={() => handleRegister(event._id)}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 px-10 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-2xl"
              >

                Register Now

              </button>

              {/* Copy Link */}
              <button
                onClick={copyLink}
                className="border border-white/20 bg-white/5 backdrop-blur-xl p-4 rounded-2xl hover:bg-white/10 transition duration-300"
              >

                🔗

              </button>

              {/* QR */}
              <button
                onClick={showQR}
                className="border border-white/20 bg-white/5 backdrop-blur-xl p-4 rounded-2xl hover:bg-white/10 transition duration-300"
              >

                📱

              </button>

              {/* Twitter */}
              <a
                href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                target="_blank"
                className="border border-white/20 bg-white/5 backdrop-blur-xl p-4 rounded-2xl hover:bg-white/10 transition duration-300"
              >

                🐦

              </a>

              {/* Globe */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                className="border border-white/20 bg-white/5 backdrop-blur-xl p-4 rounded-2xl hover:bg-white/10 transition duration-300"
              >

                🌍

              </a>

            </div>

            {/* Share Count */}
            <p className="text-gray-400 mt-6 text-sm">

              🔥 {shareCount}+ people shared this event

            </p>

          </div>

        </div>

        {/* MAP SECTION */}
        <div className="mt-28">

          <h2 className="text-4xl font-bold mb-8">

            Event Location

          </h2>

          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">

            <iframe
              title="map"
              src={`https://www.google.com/maps?q=${event.location}&output=embed`}
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            />

          </div>

        </div>

      </div>

      {/* FOOTER */}
     <Footer></Footer>

    </div>
  );
};

export default EventDetails;