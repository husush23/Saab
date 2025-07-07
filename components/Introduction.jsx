'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function IntroductionSection() {
  return (
    <section id="about" className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="w-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/forum3.jpg" // Make sure you add this image to your public folder
            alt="Community Forum"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-left"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-6 tracking-tight">
            Introduction
          </h2>
          <p className="text-lg leading-relaxed mb-5">
            In a region often defined by its complexity and resilience, <strong>Madasha Saab</strong> rises as a
            bold civic platform committed to bridging divides, elevating voices, and igniting transformative
            change across Somalia and Kenya.
          </p>
          <p className="text-lg leading-relaxed mb-5">
            We serve as a sanctuary for open dialogue, where youth, women, and students are not only seen
            — but heard, empowered, and engaged.
          </p>
          <p className="text-lg leading-relaxed mb-5">
            Born from a radical belief that change begins with inclusion, we build bridges between people
            and power — offering safe spaces where marginalized voices shape the future they deserve.
          </p>
          <p className="text-lg leading-relaxed">
            Through civic education, grassroots advocacy, and youth empowerment, we don't just facilitate
            conversations — <span className="text-blue-600 font-semibold">we inspire movements.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
