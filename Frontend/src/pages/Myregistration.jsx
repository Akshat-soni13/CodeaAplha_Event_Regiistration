import { useEffect, useState } from "react";

import api from "../service/api";

import Loader from "../components/Loader";

import toast from "react-hot-toast";
import Register from './Register';

const MyRegistrations = () => {

  const [registrations, setRegistrations] =
    useState(null);
    console.log(registrations)


    const handleRegister = async () => {

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

    const fetchRegistrations = async () => {

      try {

        const response = await api.get(
          "/api/register/My-registration"
        );

        setRegistrations(response.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchRegistrations();

  }, []);

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

  if (!registrations) {
    return <Loader />;
  }

  return (

    <div className="min-h-screen bg-slate-950 px-6 py-14 text-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">

          <h1 className="text-5xl font-bold mb-4">
            My Registrations
          </h1>

          <p className="text-gray-400 text-lg">
            Events you have joined.
          </p>

        </div>

        {/* Empty State */}
        {registrations.length === 0 && (

          <div className="text-center mt-20">

            <h2 className="text-3xl font-bold mb-4">
              No Registrations Yet
            </h2>

            <p className="text-gray-400">
              Start exploring amazing events.
            </p>

          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {registrations.map((item) => {

            const event = item.event;

            return (

              <div
                key={item._id}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-300"
              >

                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />

                {/* Content */}
                <div className="p-6">

                  <h2 className="text-2xl font-bold mb-3">
                    {event.title}
                  </h2>

                  <p className="text-gray-400 mb-5 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-gray-300 mb-6">

                    <p>
                      📍 {event.location}
                    </p>

                    <p>
                      📅{" "}
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
                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 py-3 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300"
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