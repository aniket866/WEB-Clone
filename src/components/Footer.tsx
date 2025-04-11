"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log("Form submitted:", formData);
    alert("Thanks for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-[#06254b] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact us</h3>
            <p className="text-gray-300 mb-4">
              <a
                href="mailto:dscigdtuw@gmail.com"
                className="hover:text-[#57bfcc] transition-colors"
              >
                dscigdtuw@gmail.com
              </a>
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/gdsc_igdtuw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#1DA1F2] transition-colors"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/GDSCIGDTUW/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#4267B2] transition-colors"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/dscigdtuw/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#0077B5] transition-colors"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/gdsc_igdtuw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E1306C] transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://www.youtube.com/@DSCIGDTUW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF0000] transition-colors"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          <div className="md:w-2/3 lg:w-1/2">
            <h3 className="text-xl font-bold mb-4">Send us a message</h3>
            <p className="text-gray-300 mb-4">
              Send your message here and we will try to get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 bg-white text-gray-800 rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 bg-white text-gray-800 rounded-md"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-3 bg-white text-gray-800 rounded-md"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#2f64c8] text-white px-6 py-3 rounded-md hover:bg-[#1e4ea0] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="https://discord.gg/eG4YP3gA48"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#57bfcc] transition-colors"
            >
              Join Discord
            </Link>
            <Link
              href="https://chat.whatsapp.com/KIlPsKeZZdo7KhKtilL8AT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#57bfcc] transition-colors"
            >
              Join Whatsapp
            </Link>
            <Link
              href="https://gdsc.community.dev/indira-gandhi-delhi-technical-university-for-women-delhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#57bfcc] transition-colors"
            >
              Join Our Chapter
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GDG IGDTUW. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
