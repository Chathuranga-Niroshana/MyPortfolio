import logo from '../assets/logo.webp'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import cv from '../assets/constants/ChathurangaNiroshana.pdf'

const Navbar = () => {
    return (
        <nav className="mb-2  flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img onClick={() => window.open(cv, "_blank")} src={logo} alt="logo" className=' mx-2 w-10 cursor-pointer rounded-full h-full' />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/chathuranga-niroshana-651122252/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Chathuranga-Niroshana" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100075466110656&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            </div>
        </nav>
    )
}

export default Navbar