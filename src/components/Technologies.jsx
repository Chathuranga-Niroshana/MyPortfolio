import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiFigma, SiMongodb, SiSpringboot } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaCss3Alt, FaHtml5, FaJava, FaPython } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { motion } from "motion/react";
import { useState } from "react";

// Define technology names and glow colors
const techData = [
  { icon: RiReactjsLine, name: "React", color: "#61DAFB", glowColor: "cyan" },
  { icon: FaNodeJs, name: "Node.js", color: "#539E43", glowColor: "green" },
  { icon: SiMongodb, name: "MongoDB", color: "#4DB33D", glowColor: "green" },
  { icon: TbBrandNextjs, name: "Next.js", color: "#000000", glowColor: "white" },
  { icon: FaVuejs, name: "Vue.js", color: "#44b683", glowColor: "emerald" },
  { icon: SiVite, name: "Vite", color: "#ffab03", glowColor: "amber" },
  { icon: SiExpo, name: "Expo", color: "#ffffff", glowColor: "white" },
  { icon: FaPython, name: "Python", color: "#FFD43B", glowColor: "yellow" },
  { icon: SiExpress, name: "Express.js", color: "#A0A0A0", glowColor: "gray" },
  { icon: RiTailwindCssLine, name: "Tailwind CSS", color: "#38BDF8", glowColor: "blue" },
  { icon: SiMysql, name: "MySQL", color: "#3E6E93", glowColor: "blue" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", glowColor: "yellow" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6", glowColor: "blue" },
  { icon: FaPhp, name: "PHP", color: "#777BB4", glowColor: "indigo" },
  { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3", glowColor: "purple" },
  { icon: SiThreedotjs, name: "Three.js", color: "#ffffff", glowColor: "white" },
  { icon: TbBrandRedux, name: "Redux", color: "#764ABC", glowColor: "violet" },
  { icon: FaJava, name: "Java", color: "#E76F00", glowColor: "red" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E", glowColor: "pink" },
  { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F", glowColor: "green" },
  { icon: FaHtml5, name: "HTML", color: "#E34F26", glowColor: "orange" },
  { icon: FaCss3Alt, name: "CSS", color: "#1572B6", glowColor: "blue" },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: "linear",
      repeatType: 'reverse',
    }
  },
});

// Animated neon border effect
const neonBorderVariants = {
  initial: { 
    boxShadow: "0 0 0px rgba(255, 255, 255, 0)" 
  },
  hover: (glowColor) => ({ 
    boxShadow: `0 0 10px ${getGlowColor(glowColor)}`,
    borderColor: getGlowColor(glowColor),
    transition: { 
      boxShadow: { 
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      },
      borderColor: {
        duration: 0.3
      }
    }
  })
};

// Function to get appropriate CSS color values
function getGlowColor(color) {
  const colorMap = {
    cyan: "rgba(34, 211, 238, 0.8)",
    green: "rgba(34, 197, 94, 0.8)",
    white: "rgba(255, 255, 255, 0.8)",
    emerald: "rgba(16, 185, 129, 0.8)",
    amber: "rgba(245, 158, 11, 0.8)",
    yellow: "rgba(250, 204, 21, 0.8)",
    gray: "rgba(156, 163, 175, 0.8)",
    blue: "rgba(59, 130, 246, 0.8)",
    indigo: "rgba(99, 102, 241, 0.8)",
    purple: "rgba(147, 51, 234, 0.8)",
    violet: "rgba(139, 92, 246, 0.8)",
    red: "rgba(239, 68, 68, 0.8)",
    pink: "rgba(236, 72, 153, 0.8)",
    orange: "rgba(249, 115, 22, 0.8)"
  };
  
  return colorMap[color] || "rgba(255, 255, 255, 0.8)";
}

const TechIcon = ({ Icon, name, color, glowColor, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative">
      <motion.div
        variants={iconVariants(delay)}
        initial="initial"
        animate="animate"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        custom={glowColor}
        className="relative"
      >
        <motion.div
          variants={neonBorderVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          custom={glowColor}
          className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 backdrop-blur-sm bg-neutral-900/70"
        >
          <Icon className="text-7xl" style={{ color: color }} />
        </motion.div>
        
        {/* Technology name tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={isHovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          style={{ color: color }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-neutral-800 rounded-lg font-bold text-lg whitespace-nowrap z-9999 before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:w-4 before:h-4 before:bg-neutral-800"
        >
          {name}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-32 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>
      
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      >
        Technologies
      </motion.h1>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto relative z-10"
      >
        {techData.map((tech, index) => (
          <TechIcon
            key={index}
            Icon={tech.icon}
            name={tech.name}
            color={tech.color}
            glowColor={tech.glowColor}
            delay={0.5 + (index * 0.05)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
