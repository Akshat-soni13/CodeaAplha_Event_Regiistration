import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import api from "../service/api";

const EventDetails = () => {

  const { id } = useParams();

  const [event, setEvent] = useState(null);
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

  useEffect(() => {

    const fetchEvent = async () => {

      try {
        const response = await api.get(
          `/api/event/${id}`
        );

         setTimeout(() => {

      setEvent(response.data);

           }, 4000);
        

        console.log(response.data )
       

      } catch (error) {

        console.log(error);

      }
    };


    fetchEvent();

  }, [id]);

  if (!event) {
    return (
      <Loader></Loader>
    );
  }

  // console.log(event)

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO BANNER */}
      <div className="relative h-[55vh] w-full overflow-hidden">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 -mt-28 relative z-10 pb-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE CARD */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-4 shadow-2xl">

            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[500px] object-cover rounded-2xl"
            />

          </div>

          {/* RIGHT DETAILS */}
          <div>

            <p className="text-cyan-400 text-lg mb-4 tracking-wide uppercase">
              Live Experience
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              {event.title}
            </h1>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              {event.description}
            </p>

            {/* INFO BOXES */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">

                <p className="text-gray-400 text-sm mb-1">
                  Location
                </p>

                <p className="font-semibold">
                  {event.location}
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">

                <p className="text-gray-400 text-sm mb-1">
                  Date
                </p>

                <p className="font-semibold">
                  {new Date(
                    event.date
                  ).toLocaleDateString()}
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">

                <p className="text-gray-400 text-sm mb-1">
                  Organizer
                </p>

                <pre className="font-semibold">
                  {event.createdBy?.name}
                  
                  <p className="text-[12px]">{event.createdBy?.email}</p>
                </pre>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button
                className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-xl"
                  onClick={() => handleRegister(event._id)}
              >
                Register Now
              </button>

              <button
                className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition duration-300"
              >
                Share Event
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EventDetails;