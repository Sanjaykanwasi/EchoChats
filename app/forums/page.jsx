import React from "react";
import Image from "next/image";
import Link from "next/link";

const topics = [
  {
    text: "Java",
    slug: "java-chat",
    img: "/java.svg",
    desc: "Discuss Java programming, share tips, and ask questions about Java development.",
  },
  {
    text: "JavaScript",
    slug: "javascript-chat",
    img: "/javascript.svg",
    desc: "Explore JavaScript fundamentals, frameworks, and best practices for modern web development.",
  },
  {
    text: "React",
    slug: "react-chat",
    img: "/react.svg",
    desc: "Dive into React.js, components, hooks, and building dynamic user interfaces.",
  },
  {
    text: "Python",
    slug: "python-chat",
    img: "/python-5.svg",
    desc: "Talk about Python programming, libraries, and use cases in data science, AI, and more.",
  },
  {
    text: "Next.js",
    slug: "nextjs-chat",
    img: "/nextjs.svg",
    desc: "Discuss SSR, routing, and full-stack capabilities with the Next.js React framework.",
  },
  {
    text: "Tailwind CSS",
    slug: "tailwind-chat",
    img: "/tailwind.png",
    desc: "Share custom UI designs, utility-first styling techniques, and Tailwind best practices.",
  },
  {
    text: "HTML",
    slug: "html-chat",
    img: "/html.svg",
    desc: "Learn and teach semantic HTML, structure of web pages, and accessibility fundamentals.",
  },
];

const Forums = () => {
  return (
    <div className="container mx-auto my-28">
      <h1 className="text-4xl font-bold text-center">Discussion Forums</h1>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="group w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 p-6 flex flex-col items-center text-center transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm -z-10"></div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Icon container with gradient background */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-4 mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <Image
                  width={60}
                  height={60}
                  src={topic.img}
                  alt={topic.text}
                  className="filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>

              <h2 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {topic.text}
              </h2>

              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {topic.desc}
              </p>

              {/* Read More Button */}
              <Link href={`/forum/${topic.slug}`}>
                <button className="mt-4 px-4 cursor-pointer py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Discuss Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;
