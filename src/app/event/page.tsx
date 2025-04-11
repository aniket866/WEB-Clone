import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const events = [
  {
    id: 1,
    title: "PIXEL HAVEN: Cozy Scenery Challenge",
    category: "UI/UX",
    description: "Design cozy, game-inspired pixel art scenes using tools like Pixilart or Aseprite. Think Stardew Valley vibes, perfect for Chrome wallpapers!",
    image: "https://ext.same-assets.com/1693691047/4161866156.jpeg"
  },
  {
    id: 2,
    title: "FUTURESCAPE: Visionary Tech Forecast",
    category: "Blog Writing",
    description: "Predict the future of a tech stack in a creative blog format—news, fiction, or research-based. Explore what tech might look like in 2040 and beyond.",
    image: "https://ext.same-assets.com/1693691047/3030356103.jpeg"
  },
  {
    id: 3,
    title: "GEMINI REVAMP: Code & Create",
    category: "Web Development",
    description: "Use Gemini AI to generate and refine UI components, redesign the Devcation interface with Tailwind/Bootstrap, and deploy on Replit.",
    image: "https://ext.same-assets.com/1693691047/82366000.png"
  },
  {
    id: 4,
    title: "NEON MIRAGE: Cyberpunk AR Filter",
    category: "AR/VR",
    description: "Create a cyberpunk-themed AR filter with interactive elements using Lens Studio. Bring your imagination to life in augmented reality!",
    image: "https://ext.same-assets.com/1693691047/3237797813.jpeg"
  }
];

export default function EventPage() {
  return (
    <main className="min-h-screen bg-[#06254b]">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-[#57bfcc] mb-12">
            Events DEVCATION 24
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {events.map((event) => (
              <div key={event.id} className="event-card flex flex-col-reverse">
                <div className="event-card-layer flex-grow">
                  <div>
                    <div className="text-[#d37352] font-semibold mb-2">EVENT DAY</div>
                    <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
                    <p className="text-[#696a6a] font-medium mb-6">{event.category}</p>
                    <p className="text-[#404040] mb-8">{event.description}</p>
                  </div>

                  <button
                    className="primary-btn w-70 flex items-center justify-center mx-auto"
                  >
                    <span className="mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </span>
                    Save the date
                  </button>
                </div>

                <div className="relative h-64 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
