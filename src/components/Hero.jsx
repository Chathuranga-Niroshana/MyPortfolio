import { HERO_CONTENT } from "../assets/constants"
import HeroImg from '../assets/profile.jpg'
import { motion } from "motion/react"
import cv from '../assets/constants/ChathurangaNiroshana.pdf'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: delay, duration: 0.5 },
    },
})

const Hero = () => {

    const downloadCv = () => {
        const link = document.createElement("a");
        link.href = cv;
        link.download = "ChathurangaNiroshana_CV.pdf";
        link.click();
    };

    return (
        <div className=" border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col lg:px-10 items-center lg:items-start">
                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            className=" cursor-grabbing pb-16 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl">Chathuranga Niroshana</motion.h1>
                        <motion.span
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            className=" cursor-pointer bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>

                        <motion.button
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            onClick={downloadCv}
                            className="px-2 py-1 w-fit border text-pink-900 mt-10 border-purple-900 rounded">
                            Download CV
                        </motion.button>
                        <motion.p
                            variants={container(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center ">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.4, duration: 1 }}
                            className="w-80 rounded-md  " src={HeroImg} alt="Chathuranga" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero