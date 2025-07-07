'use client';

import { FaEye, FaBullseye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function VisionMissionSection() {
  return (
    <section id="vision" className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-16 tracking-tight">
          Our Vision & Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <motion.div
            className="bg-white shadow-md rounded-2xl p-8 text-left"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <div className="flex items-center justify-center gap-4 mb-4 text-blue-600">
              <FaEye className="text-3xl" />
              <h3 className="text-2xl font-semibold">Vision</h3>
            </div>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              A connected, informed, and empowered East African society where all citizens —
              regardless of gender, age, or background — can actively shape their communities,
              hold leaders accountable, and work collectively toward a just, peaceful, and
              inclusive future.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {[
                'Public discourse is guided by facts, not fear.',
                'Young people are recognized as leaders, not followers.',
                'Women and marginalized groups are central to nation-building.',
                'Dialogue drives decision-making at all levels of society.',
              ].map((point, i) => (
                <motion.li
                  key={i}
                  custom={i + 2}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-white shadow-md rounded-2xl p-8 text-left"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <div className="flex items-center justify-center gap-4 mb-4 text-blue-600">
              <FaBullseye className="text-3xl" />
              <h3 className="text-2xl font-semibold">Mission</h3>
            </div>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              To empower youth, women, and grassroots communities by promoting inclusive
              dialogue, civic participation, and solution-driven engagement on social, political,
              and environmental issues.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {[
                'Elevate youth as agents of positive change.',
                'Facilitate safe, inclusive platforms for open, respectful dialogue.',
                'Promote civic responsibility and democratic values.',
                'Develop leadership capacity through mentorship and education.',
                'Use research, data, and public forums to inform policy and challenge narratives.',
                'Ensure the full participation of marginalized voices in national conversations.',
              ].map((point, i) => (
                <motion.li
                  key={i}
                  custom={i + 2}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
