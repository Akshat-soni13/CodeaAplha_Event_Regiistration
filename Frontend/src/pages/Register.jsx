import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../service/api";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
        "/api/auth/register",
        formData
      );

      console.log(response.data);

      navigate("/login");

    } catch (error) {

      console.log(error.response?.data);

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Join and discover amazing events
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}
          <div>

            <label className="text-gray-300 block mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-gray-700 text-white outline-none focus:border-cyan-400"
            />

          </div>

          {/* Email */}
          <div>

            <label className="text-gray-300 block mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-gray-700 text-white outline-none focus:border-cyan-400"
            />

          </div>

          {/* Password */}
          <div>

            <label className="text-gray-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-gray-700 text-white outline-none focus:border-cyan-400"
            />

          </div>

          {/* Button */}
          <button
            className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-3 rounded-xl text-white font-semibold hover:scale-[1.02] transition duration-300"
          >
            Register
          </button>
      <pre className="text-white text-center">Already Have Account 
          <Link to="/login" className="text-purple-500"> Login </Link> </pre>
        </form>

      </div>

    </div>
  );
};

export default Register;