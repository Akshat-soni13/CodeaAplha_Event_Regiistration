import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">

          <h1 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent tracking-wide">

            Eventify

          </h1>

        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

          <Link
            to="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/my-registrations"
            className="hover:text-pink-400 transition duration-300"
          >
            My Registrations
          </Link>

          <Link
            to="/create-event"
            className="hover:text-purple-400 transition duration-300"
          >
            Create Event
          </Link>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link to="/login">

            <button
              className="border border-white/10 bg-white/5 px-5 py-2 rounded-xl text-white hover:bg-white/10 transition duration-300"
            >

              Login

            </button>

          </Link>

          <Link to="/register">

            <button
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 px-5 py-2 rounded-xl text-white font-semibold hover:scale-105 transition duration-300 shadow-xl"
            >

              Register

            </button>

          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;