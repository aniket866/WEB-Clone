"use client";

const TimelineSection = () => {
  const timelineEvents = [
    {
      id: 1,
      title: "Opening Ceremony & Registration",
      description: "Submission for all Mini Events and the Registration for the Hackathon Starts",
      date: "April 4th, 2025"
    },
    {
      id: 2,
      title: "Hacking Period Starts!",
      description: "Get ready to code, create, and innovate!",
      date: "April 8th, 2025"
    },
    {
      id: 3,
      title: "Hacking Period Ends",
      description: "Make sure to wrap up your projects and prepare for submission.",
      date: "April 12th, 2025"
    },
    {
      id: 4,
      title: "Mentorship Round Starts",
      description: "Providing mentorship and feedback for every submitted project.",
      date: "April 13th, 2025"
    },
    {
      id: 5,
      title: "Final pitching and closing ceremony",
      description: "Don`t miss out on this memorable event!",
      date: "April 15th, 2025"
    }
  ];

  return (
    <section id="features" className="py-16 bg-[#06254b]">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Timeline</h2>

        <div className="timeline-container mt-20 max-w-5xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="timeline-item">
              <div className={`timeline-content ${index % 2 === 0 ? "ml-auto mr-16" : "mr-auto ml-16"}`}>
                <h3 className="text-[#57bfcc] text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-white mb-4">{event.description}</p>
                <div className="bg-[#0a3469] p-2 rounded-md inline-block">
                  <p className="text-white text-sm font-semibold">{event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
