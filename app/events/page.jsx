// app/events/page.tsx

const events = [
    {
      title: 'Forum: What Went Wrong with Somalia’s Unity?',
      date: '21 June 2025',
      venue: 'Nomad Hotel',
      speakers: ['Mr. Sadik Hirsi Warfaa (Former Minister, FGS)'],
      description: `This forum provided a reflective and research-driven platform to analyze the rise and fall of Somali unity. Participants engaged deeply with the historical roots and the breakdown of unity — from colonial transition to today’s divisions.`,
      impact: `Youth debated federalism, proposed strategies for national healing, and emphasized their role in rebuilding trust and unity in Somalia.`,
    },
    {
      title: 'Forum: The Role of Youth and Participation in Politics',
      date: '15 May 2025',
      venue: 'Nomad Hotel Hall',
      speakers: ['Mr. Sadik Hirsi Warfaa (Former Minister, FGS)'],
      description: `Gathering 150+ youth, this forum explored how young people can become effective actors in governance. Discussion included real barriers and actionable ideas.`,
      impact: `Inspired civic agency in youth, challenged exclusion, and called for reclaiming leadership through innovation and activism.`,
    },
    {
      title: 'Youth Challenges & Guidance Forum',
      date: '27 April 2025',
      venue: 'Agents of Peace, Tansim Mall',
      speakers: ['Hussein Hashi', 'Mohamed Abdiaziz'],
      description: `Explored financial struggles, career confusion, and lack of institutional mentorship. Provided practical tips and real talk from young leaders.`,
      impact: `Equipped youth with motivation and actionable guidance to grow personally and professionally.`,
    },
    {
      title: 'Continuation Forum: Youth, Marriage & Family Development',
      date: '12 April 2025',
      venue: 'Agents of Peace, Tansim Mall',
      speakers: ['Dr. Ahmed Dheeli', 'Fartun Osman'],
      description: `Focused on unresolved questions from the previous event — maturity, financial readiness, and navigating modern marriage challenges.`,
      impact: `Encouraged more youth to speak up, gain clarity, and build informed life foundations.`,
    },
    {
      title: 'Book Review: Hilinka Guurdoonka iyo Hagaha Qoyska',
      date: '16 March 2025',
      venue: 'Agents of Peace, Tansim Mall',
      speakers: ['Dr. Ahmed Dheeli'],
      description: `An intimate book discussion addressing ethical and social aspects of marriage and family life, led by a veteran educator.`,
      impact: `Sparked deep conversation, personal reflection, and critical understanding of marriage values in today’s society.`,
    },
  ];
  
  export default function EventsPage() {
    return (
      <main className="bg-white text-gray-800 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Event Highlights</h1>
  
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl shadow hover:shadow-md transition">
                <h2 className="text-2xl font-semibold text-blue-700">{event.title}</h2>
                <p className="mt-2 text-sm text-gray-500">{event.date} | {event.venue}</p>
  
                <div className="mt-4">
                  <p className="text-gray-700 text-md leading-relaxed">{event.description}</p>
                </div>
  
                <div className="mt-3">
                  <h3 className="font-semibold text-gray-800 text-sm">Speakers:</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {event.speakers.map((speaker, i) => (
                      <li key={i}>{speaker}</li>
                    ))}
                  </ul>
                </div>
  
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <h4 className="font-semibold text-blue-700">Impact:</h4>
                  <p className="text-sm text-blue-800 mt-1">{event.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
  