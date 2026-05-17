import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import api from "../service/api";

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

    <div className="min-h-screen bg-slate-950 px-6 py-14 text-white flex items-center justify-center">

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl">

        {/* Heading */}
        <div className="mb-10 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Create Event
          </h1>

          <p className="text-gray-400 text-lg">
            Host your next amazing event.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Title */}
          <div>

            <label className="block mb-2 text-gray-300">
              Event Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter event title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 outline-none focus:border-cyan-400"
            />

          </div>

          {/* Description */}
          <div>

            <label className="block mb-2 text-gray-300">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Describe your event"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 outline-none focus:border-cyan-400 resize-none"
            />

          </div>

          {/* Date */}
          <div>

            <label className="block mb-2 text-gray-300">
              Event Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 outline-none focus:border-cyan-400"
            />

          </div>

          {/* Location */}
          <div>

            <label className="block mb-2 text-gray-300">
              Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="Enter event location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 outline-none focus:border-cyan-400"
            />

          </div>

          {/* Image */}
          <div>

            <label className="block mb-2 text-gray-300">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              placeholder="Paste image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 outline-none focus:border-cyan-400"
            />

          </div>

          {/* Button */}
          <button
            className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition duration-300 shadow-2xl"
          >
            Create Event
          </button>

        </form>

      </div>

    </div>
  );
};

export default CreateEvent;