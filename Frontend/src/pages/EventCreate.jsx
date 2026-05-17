import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import api from "../service/api";

import Footer from "../components/Footer";

const CreateEvent = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/api/event/create",
        formData
      );

      toast.success(
        response.data.message
      );

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }
  };

  return (

    <div className="bg-slate-950 min-h-screen overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full -z-10" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full -z-10" />

      {/* Main Section */}
      <div className="min-h-screen px-6 py-16 flex items-center justify-center">

        <div className="w-full max-w-7xl grid lg:grid-cols-2 overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

          {/* LEFT SIDE */}
          <div className="hidden lg:flex flex-col justify-center p-16 relative overflow-hidden">

            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20" />

            <div className="relative z-10">

              <p className="uppercase tracking-[8px] text-cyan-400 text-sm mb-6">

                Host Experiences

              </p>

              <h1 className="text-6xl font-black leading-tight mb-8">

                Create
                <br />

                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">

                  Amazing Events

                </span>

              </h1>

              <p className="text-gray-300 text-lg leading-8 max-w-lg">

                Bring people together through
                unforgettable concerts,
                conferences, gaming tournaments,
                meetups and premium live experiences.

              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-14 text-white">

            {/* Heading */}
            <div className="mb-10 text-center">

              <h1 className="text-5xl font-black mb-4">

                Create Event

              </h1>

              <p className="text-gray-400 text-lg">

                Launch your next unforgettable experience

              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Title */}
              <div>

                <label className="block mb-3 text-gray-300">

                  Event Title

                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter event title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-cyan-400 transition duration-300"
                />

              </div>

              {/* Description */}
              <div>

                <label className="block mb-3 text-gray-300">

                  Description

                </label>

                <textarea
                  name="description"
                  placeholder="Describe your event"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-purple-400 transition duration-300 resize-none"
                />

              </div>

              {/* Date */}
              <div>

                <label className="block mb-3 text-gray-300">

                  Event Date

                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-cyan-400 transition duration-300"
                />

              </div>

              {/* Location */}
              <div>

                <label className="block mb-3 text-gray-300">

                  Location

                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Enter event location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-pink-400 transition duration-300"
                />

              </div>

              {/* Image */}
              <div>

                <label className="block mb-3 text-gray-300">

                  Image URL

                </label>

                <input
                  type="text"
                  name="image"
                  placeholder="Paste image URL"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-cyan-400 transition duration-300"
                />

              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition duration-300 shadow-2xl"
              >

                Create Event

              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default CreateEvent;