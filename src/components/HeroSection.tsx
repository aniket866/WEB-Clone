"use client";

import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative pt-28 pb-16 overflow-hidden bg-[#06254b] min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="text-center lg:text-left">
              <h2 className="hero-heading mb-4">Welcome to</h2>
              <h1 className="hero-subheading mb-6">Devcation`25</h1>
              <Link
                href="#aboutdev"
                className="inline-block bg-[#57bfcc] text-[#06254b] font-semibold py-3 px-6 rounded-full hover:bg-[#4aa8b5] transition-colors duration-300 mb-8"
              >
                Discover More
              </Link>

              <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                <Link
                  href="https://twitter.com/gdsc_igdtuw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#57bfcc] transition-colors"
                >
                  <FaTwitter size={22} />
                </Link>
                <Link
                  href="https://www.facebook.com/GDSCIGDTUW/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#57bfcc] transition-colors"
                >
                  <FaFacebookF size={22} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/dscigdtuw/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#57bfcc] transition-colors"
                >
                  <FaLinkedinIn size={22} />
                </Link>
                <Link
                  href="https://www.instagram.com/gdsc_igdtuw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#57bfcc] transition-colors"
                >
                  <FaInstagram size={22} />
                </Link>
                <Link
                  href="https://www.youtube.com/@DSCIGDTUW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#57bfcc] transition-colors"
                >
                  <FaYoutube size={22} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-12 text-center">
              <div>
                <p className="stat-number">4.6/5+</p>
                <p className="stat-label">Hacker rating</p>
              </div>
              <div>
                <p className="stat-number">300+</p>
                <p className="stat-label">Hacks</p>
              </div>
              <div>
                <p className="stat-number">25+</p>
                <p className="stat-label">Speakers and mentors</p>
              </div>
              <div>
                <p className="stat-number">500+</p>
                <p className="stat-label">Hackers</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src="https://ext.same-assets.com/844291147/1901213000.jpeg"
                alt="Devcation Logo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
