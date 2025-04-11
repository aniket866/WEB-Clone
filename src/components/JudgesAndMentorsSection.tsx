"use client";

import Image from "next/image";
import Link from "next/link";

const JudgesAndMentorsSection = () => {
  const judges = [
    {
      id: 1,
      name: "Kartik Mathur",
      image: "https://ext.same-assets.com/844291147/1437394304.jpeg",
      linkedin: "https://www.linkedin.com/in/kartik-mathur/"
    },
    {
      id: 2,
      name: "Vani Chitkara",
      image: "https://ext.same-assets.com/844291147/2116536155.jpeg",
      linkedin: "https://www.linkedin.com/in/vani-chitkara/"
    },
    {
      id: 3,
      name: "Aarnav Jindal",
      image: "https://ext.same-assets.com/844291147/264581515.jpeg",
      linkedin: "https://www.linkedin.com/in/aarnavjindal/"
    }
  ];

  const mentors = [
    {
      id: 1,
      name: "Radhika Bansal",
      image: "https://ext.same-assets.com/844291147/3383682840.jpeg",
      linkedin: "https://www.linkedin.com/in/radhika403/"
    },
    {
      id: 2,
      name: "Sanidhya Goel",
      image: "https://ext.same-assets.com/844291147/1654619510.jpeg",
      linkedin: "https://www.linkedin.com/in/sanidhyagoel18/"
    },
    {
      id: 3,
      name: "Tejaswi Tyagi",
      image: "https://ext.same-assets.com/844291147/4161236347.jpeg",
      linkedin: "https://www.linkedin.com/in/tejaswi-tyagi/"
    },
    {
      id: 4,
      name: "Akanksha Jha",
      image: "https://ext.same-assets.com/844291147/2781346206.svg",
      linkedin: "https://www.linkedin.com/in/akanksha-jha-8609a422a"
    },
    {
      id: 5,
      name: "Vikranth Udandarao",
      image: "https://ext.same-assets.com/844291147/1781543147.jpeg",
      linkedin: "https://www.linkedin.com/in/vikranth-udandarao/"
    },
    {
      id: 6,
      name: "Rudra Pratap Dash",
      image: "https://ext.same-assets.com/844291147/2825720357.jpeg",
      linkedin: "https://www.linkedin.com/in/rudra-pratap-dash-b2ab16267/"
    },
    {
      id: 7,
      name: "Aishvi Guleria",
      image: "https://ext.same-assets.com/844291147/518744092.png",
      linkedin: "https://www.linkedin.com/in/aishvi-guleria-09a04222b"
    },
    {
      id: 8,
      name: "Pratham Batra",
      image: "https://ext.same-assets.com/844291147/1303750506.jpeg",
      linkedin: "https://www.linkedin.com/in/pratham1908/"
    }
  ];

  return (
    <>
      <section className="py-16 bg-[#06254b]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Judges</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {judges.map((judge) => (
              <Link
                key={judge.id}
                href={judge.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={judge.image}
                    alt={judge.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-blue-800">
                  <h3 className="text-center text-xl text-white font-medium">{judge.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#06254b]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Mentors</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {mentors.map((mentor) => (
              <Link
                key={mentor.id}
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 bg-blue-800">
                  <h3 className="text-center text-lg text-white font-medium">{mentor.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JudgesAndMentorsSection;
