"use client";

import Image from "next/image";

const PrizesAndSponsorsSection = () => {
  const prizes = [
    {
      id: 1,
      title: "Hack & Solve Winners",
      description: "Cash Prize with swag kits, medals, certificates, social media shoutouts, Interview Buddy Mock Interviews, Codecrafter Membership, Unstop Coupons."
    },
    {
      id: 2,
      title: "Mini Event Winners",
      description: "Goodies, certificates, social media shoutouts, unstop coupons."
    },
    {
      id: 3,
      title: "All Finalists",
      description: "Exciting goodies, certificates, unstop coupons"
    },
    {
      id: 4,
      title: "All Participants",
      description: "Certificates and 50% unstop coupons and exclusive discount vouchers from IB for all."
    }
  ];

  const sponsors = [
    {
      id: 1,
      name: "Robotics Club IGDTUW",
      image: "https://ext.same-assets.com/844291147/1743763944.svg",
      link: "https://sites.google.com/view/rcigdtuw/home"
    },
    {
      id: 2,
      name: "Unstop",
      image: "https://ext.same-assets.com/844291147/1354271685.svg",
      link: "https://unstop.com/"
    },
    {
      id: 3,
      name: "GeekRoom",
      image: "https://ext.same-assets.com/844291147/395157150.svg",
      link: "https://www.geekroom.in/"
    },
    {
      id: 4,
      name: "Sprint India",
      image: "https://ext.same-assets.com/844291147/1443725800.svg",
      link: "https://www.sprintindia.work/about-us/"
    },
    {
      id: 5,
      name: "Interview Buddy",
      image: "https://ext.same-assets.com/844291147/3114313562.svg",
      link: "https://dev.interviewbuddy.in/"
    },
    {
      id: 6,
      name: "CodeCrafters",
      image: "https://ext.same-assets.com/844291147/409235749.svg",
      link: "https://codecrafters.io/"
    }
  ];

  return (
    <>
      <section id="prizes" className="py-16 bg-[#06254b]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Prizes</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {prizes.map((prize) => (
              <div key={prize.id} className="bg-blue-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-center text-[#57bfcc] text-xl font-bold mb-4">{prize.title}</h3>
                <p className="text-white text-center">{prize.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="py-16 bg-[#06254b]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Sponsors</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center h-32 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    sizes="100px"
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrizesAndSponsorsSection;
