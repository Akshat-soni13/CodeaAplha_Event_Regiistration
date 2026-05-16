import { useEffect, useState } from "react";

import {
  Music2,
  Mic2,
  Trophy,
  Briefcase,
  Gamepad2,
  Cpu,
  PartyPopper,
} from "lucide-react";

const items = [
  {
    icon: Music2,
    label: "Music",
    color: "from-pink-500 to-purple-500",
  },

  {
    icon: Mic2,
    label: "Live Shows",
    color: "from-cyan-500 to-blue-500",
  },

  {
    icon: Trophy,
    label: "Sports",
    color: "from-yellow-500 to-orange-500",
  },

  {
    icon: Briefcase,
    label: "Startup",
    color: "from-green-500 to-emerald-500",
  },

  {
    icon: Gamepad2,
    label: "Gaming",
    color: "from-violet-500 to-fuchsia-500",
  },

  {
    icon: Cpu,
    label: "Tech",
    color: "from-sky-500 to-cyan-400",
  },

  {
    icon: PartyPopper,
    label: "Festival",
    color: "from-rose-500 to-pink-500",
  },
];

const Loader = () => {

  const [visibleCount, setVisibleCount] =
    useState(1);

 useEffect(() => {

  if (visibleCount === items.length) {
    return;
  }

  const timeout = setTimeout(() => {

    setVisibleCount((prev) => prev + 1);

  }, 70);

  return () => clearTimeout(timeout);

}, [visibleCount]);

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden relative px-6">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 flex flex-col items-center">

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl">

          {items.slice(0, visibleCount).map(
            (item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="flex flex-col items-center gap-3 animate-bounce"
                >

                  <div
                    className={`p-6 rounded-3xl bg-gradient-to-r ${item.color} shadow-2xl`}
                  >

                    <Icon
                      size={42}
                      className="text-white"
                    />

                  </div>

                  <p className="text-white text-sm md:text-base font-medium">
                    {item.label}
                  </p>

                </div>
              );
            }
          )}

        </div>

        {/* Brand */}
        <div className="mt-16 text-center animate-pulse">

          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent tracking-wider">

            Eventify

          </h1>

          <p className="text-gray-400 uppercase tracking-[6px] mt-4 text-sm md:text-base">

            Discover • Experience • Celebrate

          </p>

        </div>

      </div>

    </div>
  );
};

export default Loader;