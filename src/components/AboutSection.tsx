"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="py-16 bg-[#06254b]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">About GDG IGDTUW</h2>

          <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-10">
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
              <div className="relative h-64 w-64 md:h-80 md:w-80">
                <Image
                  src="https://ext.same-assets.com/844291147/2398135625.jpeg"
                  alt="GDG IGDTUW Team"
                  fill
                  sizes="(max-width: 768px) 64vw, 33vw"
                  className="rounded-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-16 h-16">
                    <Image
                      src="https://ext.same-assets.com/844291147/2116589346.svg"
                      alt="GDG Logo"
                      fill
                      sizes="60px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <p className="text-white text-lg mb-6">
                Here at GDG IGDTUW, we explore technology and use it to build products that brings about positive change in society. We conduct mentorship sessions, workshops, knowledge transfer sessions, hackathons, coding contests, open source programs, etc. where students from across the globe get to showcase their knowledge and develop their skillset.
              </p>

              <div className="bg-blue-800 p-6 rounded-lg shadow-lg mt-8">
                <p className="text-white text-lg">
                  We have helped more than 7000+ university students to expand their technical knowledge and skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aboutdev" className="py-16 bg-[#06254b]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">About Devcation`25</h2>

          <div className="bg-blue-800 p-8 rounded-lg shadow-lg mt-10 max-w-4xl mx-auto">
            <p className="text-white text-lg text-center leading-relaxed">
              Devcation is a week-long technical festival organized by Google Developer Groups - Indira Gandhi Delhi Technical University for Women that celebrates diversity in the TechForGood Domain. During the week, we have the Devcation`25 hackathon. These events are designed to spark your creativity, encourage innovative thinking, and help you craft tech solutions that stand out.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
