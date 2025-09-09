'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const boardMembers = [
  {
    name: 'Fartuun Mohamed Osman',
    image: '/board/fartun.jpeg',
    description:
      'Fartuun Mohamed Osman is a scholar in Social Sciences and advanced Islamic Studies. She is committed to community development in Kenya, focusing on social awareness, youth empowerment, and connecting knowledge with meaningful change.',
  },
  {
    name: 'Abdullahi Abdikarim',
    image: '/board/abdullahi.jpeg',
    description:
      'Abdullahi Abdikarim Ismail is an experienced youth leader engaged in community growth and sustainable programs. His work emphasizes leadership, empowerment, and opportunities for young people to thrive.',
  },
  {
    name: 'Anas Hassan Abdulle',
    image: '/board/anas.jpeg',
    description:
      'Anas Hassan Abdulle supports governance initiatives and effective communication. His role centers on strengthening organizational structures and ensuring transparency in community-driven efforts.',
  },
  {
    name: 'Hafiifa Mohamed Ahmed',
    image: '/board/hanifa.jpeg',
    description:
      'Hafiifa Mohamed Ahmed is a policy researcher pursuing postgraduate studies at Vienna University. Her interests include governance, institutional development, and strategies for long-term social transformation.',
  },
  {
    name: 'Mohamed Ahmed Caris',
    image: '/board/ahmed.jpeg',
    description:
      'Mohamed Ahmed Caris is a scholar of public policy with expertise in governance and institutional development. His vision emphasizes innovation and sustainable progress for inclusive communities.',
  },
];

const Board = () => {
  return (
    <section id="team" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4 tracking-tight">
          Our Board Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          Meet the dedicated individuals helping Madasha Saab&apos;s mission with vision, integrity, and purpose.
        </p>

        {/* Grid Wrapper */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {boardMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-blue-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full object-top object-center"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;
