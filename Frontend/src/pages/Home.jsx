import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../service/api";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {

      try {

        const response = await api.get(
          "/api/event"
        );

        setEvents(response.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchEvents();

  }, []);

  return (

    <div className="relative overflow-hidden min-h-screen bg-slate-950">

      {/* Navbar */}
      <Navbar />

      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full -z-10" />

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full -z-10" />

      {/* Main Container */}
      <div className="px-6 py-10 max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-24 pt-10">

          <p className="text-cyan-400 uppercase tracking-[8px] mb-6 text-sm">

            Discover The Best Events

          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">

            <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">

              Experience

            </span>

            <br />

            <span className="text-white">
              The Future Of Events
            </span>

          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-8">

            Explore concerts, tech conferences,
            gaming tournaments, startup meetups
            and unforgettable live experiences.

          </p>

        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {events.map((event) => (

            <Link
              to={`/event/${event._id}`}
              key={event._id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl hover:-translate-y-3 hover:border-cyan-400/40 transition duration-500"
            >

              {/* Image Wrapper */}
              <div className="relative overflow-hidden">

                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              </div>

              {/* Content */}
              <div className="p-7">

                <h2 className="text-3xl font-bold text-white mb-3">

                  {event.title}

                </h2>

                <p className="text-gray-400 mb-5 line-clamp-2 leading-7">

                  {event.description}

                </p>

                {/* Info */}
                <div className="space-y-3 text-gray-300">

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
                  className="mt-7 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 py-3 rounded-2xl text-white font-semibold hover:scale-[1.03] transition duration-300 shadow-2xl"
                >

                  Explore Event

                </button>

              </div>

            </Link>

          ))}

        </div>

      </div>

          <Footer></Footer>

    </div>
  );
};

export default Home;