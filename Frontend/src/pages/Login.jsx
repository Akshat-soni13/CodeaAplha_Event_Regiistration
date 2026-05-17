import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import api from "../service/api";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "/api/auth/login",
        formData
      );

      console.log(response.data);

      navigate("/");

    } catch (error) {

      console.log(error.response?.data);

    }
  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full -z-10" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full -z-10" />

      {/* Main Card */}
      <div className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center p-16 relative overflow-hidden">

          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20" />

          <div className="relative z-10">

            <p className="uppercase tracking-[8px] text-cyan-400 text-sm mb-6">

              Welcome To Eventify

            </p>

            <h1 className="text-6xl font-black leading-tight mb-8">

              Discover
              <br />

              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">

                Premium Events

              </span>

            </h1>

            <p className="text-gray-300 text-lg leading-8 max-w-lg">

              Join concerts, tech conferences,
              gaming tournaments, startup meetups
              and unforgettable live experiences.

            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-14">

          {/* Heading */}
          <div className="mb-10 text-center">

            <h1 className="text-5xl font-black text-white mb-4">

              Welcome Back

            </h1>

            <p className="text-gray-400 text-lg">

              Login to continue your journey

            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Email */}
            <div>

              <label className="text-gray-300 block mb-3">

                Email Address

              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-cyan-400 transition duration-300"
              />

            </div>

            {/* Password */}
            <div>

              <label className="text-gray-300 block mb-3">

                Password

              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-purple-400 transition duration-300"
              />

            </div>

            {/* Button */}
            <button
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 py-4 rounded-2xl text-white font-semibold text-lg hover:scale-[1.02] transition duration-300 shadow-2xl"
            >

              Login

            </button>

            {/* Register Link */}
            <p className="text-center text-gray-400 pt-4">

              Don’t have an account?

              <Link
                to="/register"
                className="text-cyan-400 ml-2 hover:text-pink-400 transition duration-300"
              >

                Register

              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;