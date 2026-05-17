import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../service/api"
import Navbar from "../components/Navbar";

const Home = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {

      try {

        const response = await api.get(
          "/api/event/"
        );

        setEvents(response.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchEvents();

  }, []);

  return (
    
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen px-6 py-10 max-w-7xl mx-auto">

      {/* Hero */}
      <div className="text-center mb-14">

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Discover Amazing Events
        </h1>

        <p className="text-gray-400 text-lg">
          Join tech, music, startup and
          community events near you.
        </p>

      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {events.map((event) => (

          <div
            key={event._id}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300"
          >

            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-6">

              <h2 className="text-2xl font-bold text-white mb-2">
                {event.title}
              </h2>

              <p className="text-gray-400 mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-2 text-gray-300 text-sm">

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
                  <Link to={`/event/${event._id}`}>
                  
              <button
                className="mt-6 w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-3 rounded-xl text-white font-semibold hover:scale-[1.02] transition duration-300"
                
              >
                View Details
              </button></Link>

            </div>

          </div>

        ))}

      </div>

    </div>
    </div>
    
  );
};

export default Home;