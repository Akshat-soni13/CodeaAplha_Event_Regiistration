const Footer=()=>{
    return(
         <footer className="border-t border-white/10 mt-24">

        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div>

            <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">

              Eventify

            </h1>

            <p className="text-gray-400 mt-2">

              Discover • Experience • Celebrate

            </p>

          </div>

          {/* Links */}
          <div className="flex gap-8 text-gray-300">

            <a href="#">
              Home
            </a>

            <a href="#">
              Events
            </a>

            <a href="#">
              Registrations
            </a>

            <a href="#">
              Contact
            </a>

          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">

            © 2026 Eventify. All rights reserved.

          </p>

        </div>

      </footer>
    )
}

export default Footer