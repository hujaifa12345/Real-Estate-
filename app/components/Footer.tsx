"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#00032E]/90 text-gray-300 pt-12 pb-6 border-t border-gray-500">
      <div className="max-w-[85%] mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">YourCompany</h2>
          <p className="text-sm mb-4">
            Trusted real estate platform for buying, selling & renting properties.
          </p>
          <p className="text-sm">Dhaka, Bangladesh</p>
          <p className="text-sm">Phone: +880123456789</p>
          <p className="text-sm">Email: info@yourcompany.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/properties">Properties</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Apartments</li>
            <li>Villas</li>
            <li>Commercial</li>
            <li>Land / Plots</li>
            <li>Rent / Sale</li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-white font-semibold mb-4">Locations</h3>
          <ul className="space-y-2 text-sm">
            <li>Dhaka</li>
            <li>Chattogram</li>
            <li>Sylhet</li>
            <li>Rajshahi</li>
            <li>Barishal</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-3">Get latest property updates</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social + Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 max-w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 text-lg">
          <FaFacebookF className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaLinkedinIn className="cursor-pointer hover:text-white" />
          <FaYoutube className="cursor-pointer hover:text-white" />
        </div>

        <p className="text-sm text-center md:text-right">
          © 2026 YourCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
