import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white pt-10 pb-6" id="contact">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* 1. Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Bhakthi<span className="text-red-500">Mart</span>
          </h2>
          <p className="text-sm text-gray-400">
            Bringing purity and divine fragrance into your home with premium
            agarbatti products crafted with tradition and care.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/product" className="hover:text-white">Products</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* 3. Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-500">Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Agarbatti Sticks</li>
            <li>Dhoop Sticks</li>
            <li>Incense Cones</li>
            <li>Pooja Kits</li>
          </ul>
        </div>

        {/* 4. Contact + Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-500">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">
            📍 Chennai, Tamil Nadu, India
          </p>
          <p className="text-gray-400 text-sm mb-2">
            📞 +91 98844 85312
          </p>
          <p className="text-gray-400 text-sm mb-4">
            ✉️ manij472@gmail.com
          </p>

          {/* Small Form */}
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded bg-gray-800 text-white text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-red-600 py-2 rounded text-sm hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © 2026 BhakthiMart. All rights reserved.
      </div>

    </div>
  );
};

export default Footer;