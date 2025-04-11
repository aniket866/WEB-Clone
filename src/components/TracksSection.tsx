"use client";

import Image from "next/image";

const TracksSection = () => {
  const tracks = [
    {
      id: 1,
      name: "HealthTech",
      icon: "https://ext.same-assets.com/844291147/2750879449.png",
      alt: "Healthcare technology icon"
    },
    {
      id: 2,
      name: "EdTech",
      icon: "https://ext.same-assets.com/844291147/3625480128.png",
      alt: "Education technology icon"
    },
    {
      id: 3,
      name: "Sustainable Development (Open Innovation)",
      icon: "https://ext.same-assets.com/844291147/738489222.png",
      alt: "Sustainable development icon"
    },
    {
      id: 4,
      name: "FinTech",
      icon: "https://ext.same-assets.com/844291147/2317696455.png",
      alt: "Financial technology icon"
    }
  ];

  return (
    <section id="tracks" className="py-16 bg-[#06254b]">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Tracks</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {tracks.map((track) => (
            <div key={track.id} className="track-card">
              <div className="flex justify-center mb-4">
                <div className="relative w-20 h-20">
                  <Image
                    src={track.icon}
                    alt={track.alt}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-center text-xl text-white font-medium">
                {track.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
