import { useEffect, useState } from "react";

import api from "../service/api";

import Loader from "../components/Loader";

import toast from "react-hot-toast";

const MyRegistrations = () => {

  const [registrations, setRegistrations] =
    useState(null);

  useEffect(() => {

    const fetchRegistrations = async () => {

      try {

        const response = await api.get(
          "/api/register/my-registration"
        );

        setRegistrations(response.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchRegistrations();

  }, []);

  // Cancel Registration
  const cancelRegistration = async (
    registrationId
  ) => {

    try {

      const response = await api.delete(
        `/api/register/${registrationId}`
      );

      toast.success(
        response.data.message
      );

      setRegistrations((prev) =>
        prev.filter(
          (item) =>
            item._id !== registrationId
        )
      );

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }
  };

  // Loader
  if (!registrations) {
    return <Loader />;
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative px-6 py-14">

      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full -z-10" />

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-cyan-400 text-sm mb-6">

            Your Journey

          </p>

          <h1 className="text-6xl md:text-7xl font-black mb-6">

            My Registrations

          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">

            Manage all the amazing events
            you’ve joined and keep track of
            your experiences.

          </p>

        </div>

        {/* Empty State */}
        {registrations.length === 0 && (

          <div className="flex flex-col items-center justify-center text-center mt-24">

            <div className="text-8xl mb-8">

              🎟️

            </div>

            <h2 className="text-5xl font-black mb-6">

              No Registrations Yet

            </h2>

            <p className="text-gray-400 text-lg max-w-xl leading-8">

              Start exploring premium events,
              concerts, conferences and unforgettable
              live experiences.

            </p>

          </div>

        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {registrations.map((item) => {

            const event = item.event;

            return (

              <div
                key={item._id}
                className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl hover:-translate-y-3 hover:border-cyan-400/40 transition duration-500"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-5 right-5 bg-cyan-500/20 backdrop-blur-xl border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm">

                    Registered

                  </div>

                </div>

                {/* Content */}
                <div className="p-7">

                  <h2 className="text-3xl font-black mb-4">

                    {event.title}

                  </h2>

                  <p className="text-gray-400 leading-7 mb-6 line-clamp-2">

                    {event.description}

                  </p>

                  {/* Info */}
                  <div className="space-y-3 text-gray-300 mb-8">

                    <p className="flex items-center gap-2">

                      <span className="text-cyan-400">
                        📍
                      </span>

                      {event.location}

                    </p>

                    <p className="flex items-center gap-2">

                      <span className="text-pink-400">
                        📅
                      </span>

                      {new Date(
                        event.date
                      ).toLocaleDateString()}

                    </p>

                  </div>

                  {/* Button */}
                  <button
                    onClick={() =>
                      cancelRegistration(
                        item._id
                      )
                    }
                    className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 py-4 rounded-2xl font-semibold hover:scale-[1.03] transition duration-300 shadow-2xl"
                  >

                    Cancel Registration

                  </button>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </div>
  );
};

export default MyRegistrations;