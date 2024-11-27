import { CONTACT } from "../assets/constants"
import { motion } from "motion/react"


const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 ">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className=" my-10 text-center text-4xl">Get in Touch </motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4">
                    {CONTACT.address}
                </motion.p>
                <motion.a
                    whileInView={{ opacity: 1, x: -100 }}
                    initial={{ opacity: 0, x: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-4"
                >
                    <a href="tel:+94757684501">

                        {CONTACT.phoneNo}
                    </a>
                </motion.a>
                <br />
                <motion.a
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    href="mailto:niroshana.c.n.j@gmail.com" className="border-b">
                    {CONTACT.email}
                </motion.a>
            </div>
        </div>
    )
}

export default Contact