'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Forum: What Went Wrong with Somalia’s Unity?',
    caption: 'Youth-led discussions on Somali unity, history, and reconciliation.',
    image: '/forum1.jpg',
  },
  {
    title: 'Youth & Politics Forum',
    caption: '150+ youth gather to discuss civic roles and national transformation.',
    image: '/forum2.jpg',
  },
  {
    title: 'Youth Challenges & Guidance',
    caption: 'Mentorship and empowerment for youth navigating modern struggles.',
    image: '/forum3.jpg',
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="hero"
      className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={slides[index].image}
        alt={slides[index].title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 text-white max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">{slides[index].title}</h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-sm">{slides[index].caption}</p>
      </div>
    </div>
  );
};

export default HeroSlider;
