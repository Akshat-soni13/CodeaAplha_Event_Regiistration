import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Eventify
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <Link
            to="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/create-event"
            className="hover:text-cyan-400 transition duration-300"
          >
            Create Event
          </Link>

          <Link
            to="/my-registrations"
            className="hover:text-cyan-400 transition duration-300"
          >
            Registrations
          </Link>

          <Link
            to="/login"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-2 rounded-full hover:scale-105 transition duration-300 shadow-lg"
          >
            Login
          </Link>

        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white text-3xl">
          ☰
        </button>

      </div>

    </nav>
  );
};

export default Navbar;