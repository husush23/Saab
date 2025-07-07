import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';

export default function HomePage() {
  return (
    <>
      <main className="pt-16 bg-white text-gray-800 scroll-smooth">
        <HeroSlider />

        {/* Introduction */}
        <section id="about" className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed">
            In a region often defined by its complexity and resilience, Madasha Saab rises as a bold civic
            platform committed to bridging divides, elevating voices, and igniting transformative change.
            Operating across Somalia and Kenya, Madasha Saab serves as a sanctuary for open dialogue,
            where youth, women, and students are not only seen but heard, empowered, and engaged.
          </p>
          <p className="text-lg mt-6">
            We were born from a simple yet radical belief: that real change begins when conversations are inclusive,
            when marginalized voices are centered, and when dialogue becomes a tool for progress, not
            polarization. At Madasha Saab, we build bridges between people and power. We create safe spaces
            where underrepresented voices can challenge the status quo, offer solutions, and shape the future
            they want to live in.
          </p>
          <p className="text-lg mt-6">
            Through public forums, civic education, youth empowerment, and grassroots
            advocacy, we are not just facilitating conversations — we are inspiring movements.
          </p>
        </section>

        {/* Who We Are */}
<section className="py-20 px-6 bg-white text-center text-gray-800">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-blue-600 mb-6 tracking-tight">Who We Are</h2>
    <p className="text-lg leading-relaxed">
      <span className="font-medium text-gray-900">Madasha Saab</span> (Saab Forums) is a community-driven, non-partisan initiative designed to spark civic awareness, democratic engagement, and leadership development. With active operations in <span className="font-semibold text-blue-700">Mogadishu, Garowe, Hargeisa, Nairobi, Garissa</span>, and beyond, we engage with people at all levels—from rural villages to national stakeholders.
    </p>
    <p className="text-lg leading-relaxed mt-6">
      We stand at the intersection of dialogue and development, using public forums, grassroots research, and media advocacy to influence public thinking, empower communities, and drive sustainable policy change.
    </p>
  </div>
</section>

{/* Vision & Mission */}
<section id="vision" className="py-20 px-6 bg-gray-50 text-gray-800">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-600 mb-10 tracking-tight">Our Vision & Mission</h2>

    {/* Vision */}
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-3">Vision</h3>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto">
        A connected, informed, and empowered East African society where all citizens — regardless of gender, age, or background — can actively shape their communities, hold leaders accountable, and work collectively toward a just, peaceful, and inclusive future.
      </p>
      <ul className="mt-6 text-left max-w-2xl mx-auto text-gray-700 text-base list-disc pl-6">
        <li>Public discourse is guided by facts, not fear.</li>
        <li>Young people are recognized as leaders, not followers.</li>
        <li>Women and marginalized groups are central to nation-building.</li>
        <li>Dialogue drives decision-making at all levels of society.</li>
      </ul>
    </div>

    {/* Mission */}
    <div>
      <h3 className="text-2xl font-semibold mb-3">Mission</h3>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto">
        To empower youth, women, and grassroots communities by promoting inclusive dialogue, civic participation, and solution-driven engagement on social, political, and environmental issues.
      </p>
      <ul className="mt-6 text-left max-w-2xl mx-auto text-gray-700 text-base list-disc pl-6">
        <li>Elevate youth as agents of positive change.</li>
        <li>Facilitate safe, inclusive platforms for open, respectful dialogue.</li>
        <li>Promote civic responsibility and democratic values.</li>
        <li>Develop leadership capacity through mentorship and education.</li>
        <li>Use research, data, and public forums to inform policy and challenge narratives.</li>
        <li>Ensure the full participation of marginalized voices in national conversations.</li>
      </ul>
    </div>
  </div>
</section>

{/* What We Do */}
<section id="work" className="bg-white py-20 px-6 text-gray-800 text-center">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-blue-600 mb-12 tracking-tight">What We Do</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      {[
        {
          title: 'Public Forums & Civic Dialogues',
          desc: 'We organize town halls, debates, and forums where citizens meet decision-makers to discuss elections, education, climate, and more.'
        },
        {
          title: 'Youth Leadership & Mentorship',
          desc: 'Workshops and training programs to strengthen intellectual, ethical, and leadership capacity of youth.'
        },
        {
          title: 'Research & Policy Influence',
          desc: 'We gather grassroots insight to propose people-centered policy solutions grounded in community realities.'
        },
        {
          title: 'Media & Awareness Campaigns',
          desc: 'We use media to challenge harmful narratives, promote civic values, and amplify grassroots voices.'
        },
        {
          title: 'Women’s Civic Inclusion Initiatives',
          desc: 'We engage women in civic education and leadership training — where their voices are most needed.'
        }
      ].map((item, i) => (
        <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">{i + 1}. {item.title}</h3>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Partnerships */}
<section className="py-20 px-6 bg-gray-50 text-center text-gray-800">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-blue-600 mb-8 tracking-tight">Partnerships & Collaboration</h2>
    <p className="text-lg mb-6">
      We believe real change is collaborative. That’s why we work with:
    </p>
    <ul className="text-left max-w-xl mx-auto text-gray-700 text-base list-disc pl-6 mb-6">
      <li>Civil society organizations</li>
      <li>Academic institutions</li>
      <li>Local and federal governments</li>
      <li>Media houses</li>
      <li>Youth and women’s networks</li>
      <li>Development partners</li>
    </ul>
    <p className="text-lg">
      Our partnerships are rooted in shared values of <span className="font-medium text-blue-600">inclusion</span>, <span className="font-medium text-blue-600">accountability</span>, and <span className="font-medium text-blue-600">long-term impact</span>.
    </p>
  </div>
</section>


        {/* Core Values */}
        <section id="impact" className="bg-blue-600 text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Inclusivity: Every voice has value.',
              'Transparency: Trust is built through honesty.',
              'Accountability: We practice what we preach.',
              'Empowerment: Change comes from within.',
              'Dialogue: Conversation is the first step to transformation.',
              'Equity: No one is left behind.',
            ].map((value, idx) => (
              <div key={idx} className="bg-white text-blue-800 p-4 rounded-lg shadow">
                {value}
              </div>
            ))}
          </div>
        </section>

        {/* Get Involved */}
<section id="contact" className="py-20 px-6 bg-white text-center text-gray-800">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-blue-600 mb-6 tracking-tight font-heading">
      Get Involved
    </h2>
    <p className="text-lg font-body mb-6">
      Join us in amplifying civic voices and shaping a more inclusive East Africa. Whether you're an individual, organization, or donor, your support helps us host forums, empower youth, and drive policy change where it matters most.
    </p>

    <div className="bg-blue-50 rounded-xl p-6 shadow-sm mb-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Interested in Donating or Partnering?</h3>
      <p className="text-gray-700 mb-4 font-body">
        If you're ready to contribute financially, support our events, or collaborate on a project, we’d love to connect with you.
      </p>
      <p className="text-lg font-medium text-gray-900">
        📧 Email us: <a href="mailto:madashasaab@gmail.com" className="text-blue-600 hover:underline">madashasaab@gmail.com</a>
      </p>
    </div>

    <p className="text-md text-gray-600 font-body">
      You can also reach us on social platforms or through our local teams in Somalia and Kenya.
    </p>
  </div>
</section>

      </main>
    </>
  );
}
