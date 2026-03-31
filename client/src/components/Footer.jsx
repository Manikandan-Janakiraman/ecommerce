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
            BhakthiMart is a trusted name in agarbatti manufacturing, committed to delivering excellence through quality and tradition. <br /><br />
            Our incense products are made from carefully selected natural ingredients, ensuring a soothing and long-lasting aroma.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500">About Us</Link></li>
            <li><Link to="/product" className="hover:text-red-500">Products</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* 3. Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-500">Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-red-500">Agarbatti Sticks</Link></li>
            <li><Link to="/" className="hover:text-red-500">Dhoop Sticks</Link></li>
            <li><Link to="/" className="hover:text-red-500">Incense Cones</Link></li>
            <li><Link to="/" className="hover:text-red-500">Pooja Kits</Link></li>
          </ul>
        </div>

        {/* 4. Contact + Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-500">Contact Us</h3>

          <p className="text-gray-400 text-sm mb-2">
            📞 +91 99100 99100
          </p>
          <p className="text-gray-400 text-sm mb-2">
            ✉️ bhakthimart@gmail.com
          </p>
          <p className="text-gray-400 text-sm mb-4">
            📍 Chennai, Tamil Nadu, India
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