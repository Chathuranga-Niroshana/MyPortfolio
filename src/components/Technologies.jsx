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
import { motion } from "motion/react";

const iconVarients = (duration) => ({
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
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className=" my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVarients(0.5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <RiReactjsLine className="text-7xl text-cyan-400" /> {/* React - Cyan */}
                </motion.div>
                <motion.div
                    variants={iconVarients(0.75)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <FaNodeJs className="text-7xl text-green-500" /> {/* Node.js - Green */}
                </motion.div>
                <motion.div
                    variants={iconVarients(1)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <SiMongodb className="text-7xl text-green-600" /> {/* MongoDB - Dark Green */}
                </motion.div>
                <motion.div
                    variants={iconVarients(1.25)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <TbBrandNextjs className="text-7xl text-neutral-900" /> {/* Next.js - Neutral Black */}
                </motion.div>
                 <motion.div
                    variants={iconVarients(1.05)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <FaVuejs className="text-7xl text-[#44b683]" /> {/* Vue.js - green */}
                </motion.div>
                <motion.div
                    variants={iconVarients(1.5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <FaPython className="text-7xl text-yellow-400" /> {/* Python - Yellow */}
                </motion.div>
                <motion.div
                    variants={iconVarients(0.85)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <SiExpress className="text-7xl text-gray-400" /> {/* Express.js - Gray */}
                </motion.div>
                <motion.div
                    variants={iconVarients(0.45)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <RiTailwindCssLine className="text-7xl text-blue-400" /> {/* Tailwind CSS - Blue */}
                </motion.div>
                <motion.div
                    variants={iconVarients(1)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <SiMysql className="text-7xl text-blue-500" /> {/* MySQL - Blue */}
                </motion.div>
                <motion.div
                    variants={iconVarients(0.5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <SiJavascript className="text-7xl text-yellow-500" /> {/* JavaScript - Yellow */}
                </motion.div>
                <motion.div
                    variants={iconVarients(1.25)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <SiTypescript className="text-7xl text-blue-600" /> {/* TypeScript - Blue */}
                </motion.div>
                <motion.div
                    variants={iconVarients(1.15)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <FaPhp className="text-7xl text-indigo-600" /> {/* PHP - Indigo */}
                </motion.div>
                <motion.div
                    variants={iconVarients(0.5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <FaBootstrap className="text-7xl text-purple-600" /> {/* Bootstrap - Purple */}
                </motion.div>
                <motion.div
                    variants={iconVarients(0.75)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4 ">
                    <TbBrandRedux className="text-7xl text-violet-600" /> {/* Redux - Violet */}
                </motion.div>
                <motion.div
                    variants={iconVarients(0.95)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-600" /> {/* Java - Red */}
                </motion.div>
                <motion.div
                    variants={iconVarients(1.35)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4">
                    <SiFigma className="text-7xl text-pink-600" /> {/* Figma - Pink */}
                </motion.div>
                <motion.div
                    variants={iconVarients(1.5)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-7xl text-green-500" /> {/* Spring Boot - Green */}
                </motion.div>
                <motion.div
                    variants={iconVarients(1.15)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-orange-500" /> {/* HTML - Orange */}
                </motion.div>
                <motion.div
                    variants={iconVarients(0.35)}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl text-blue-500" /> {/* CSS - Blue */}
                </motion.div>

            </motion.div>

        </div >
    )
}

export default Technologies
