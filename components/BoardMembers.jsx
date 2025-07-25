'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUserTie, FaGavel, FaPenFancy, FaMoneyCheckAlt, FaUsers } from 'react-icons/fa';

const boardMembers = [
  {
    name: 'Amin Yusuf',
    title: 'Executive Director',
    image: '/board/ph-1.jpg',
    description:
      'Amin brings over 10 years of experience in civic engagement and grassroots organizing across East Africa.',
    icon: <FaUserTie size={28} className="text-blue-600" />,
  },
  {
    name: 'Hussein Warsame',
    title: 'Chairperson',
    image: '/board/ph-3.jpg',
    description:
      'A respected civic leader with a strong background in governance, policy, and youth development.',
    icon: <FaGavel size={28} className="text-blue-600" />,
  },
  {
    name: 'Ifrah Ali',
    title: 'General Secretary',
    image: '/board/ph-5.jpg',
    description:
      'Ifrah coordinates all internal communications, governance protocols, and public reporting.',
    icon: <FaPenFancy size={28} className="text-blue-600" />,
  },
  {
    name: 'Abdi Shire',
    title: 'Head of Finance & Compliance',
    image: '/board/ph-4.jpg',
    description:
      'Abdi ensures transparency and financial accountability in all our operations and partnerships.',
    icon: <FaMoneyCheckAlt size={28} className="text-blue-600" />,
  },
  {
    name: 'Nimco Barre',
    title: 'Director of Programs & Partnerships',
    image: '/board/ph-7.jpg',
    description:
      'Nimco leads the planning, delivery, and evaluation of all Madasha Saab programs and collaborations.',
    icon: <FaUsers size={28} className="text-blue-600" />,
  },
];

const BoardMembers = () => {
  return (
    <section id="team" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4 tracking-tight">Our Leadership Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          Meet the passionate individuals guiding Madasha Saab's mission with integrity, vision, and dedication.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {boardMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image src={member.image} alt={member.name} width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <div className="mb-2">{member.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium mb-2">{member.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
