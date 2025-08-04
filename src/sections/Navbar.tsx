import { motion } from 'motion/react'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const Navigation = () => {
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <HashLink smooth to="/#inicio" className="nav-link">
                    Inicio
                </HashLink>
            </li>
            <li className="nav-li">
                <HashLink
                    smooth
                    to="/#sobremi"
                    className="nav-link"
                    scroll={(el) => {
                        const yOffset = -80 // ajusta este valor según la altura de tu header
                        const y =
                            el.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset
                        window.scrollTo({ top: y, behavior: 'smooth' })
                    }}
                >
                    Sobre mi
                </HashLink>
            </li>
            <li className="nav-li">
                <HashLink
                    smooth
                    to="/#proyectos"
                    className="nav-link"
                    scroll={(el) => {
                        const yOffset = -80 // ajusta este valor según la altura de tu header
                        const y =
                            el.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset
                        window.scrollTo({ top: y, behavior: 'smooth' })
                    }}
                >
                    Proyectos
                </HashLink>
            </li>
            <li className="nav-li">
                <HashLink
                    smooth
                    to="/#experiencia"
                    className="nav-link"
                    scroll={(el) => {
                        const yOffset = -80 // ajusta este valor según la altura de tu header
                        const y =
                            el.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset
                        window.scrollTo({ top: y, behavior: 'smooth' })
                    }}
                >
                    Experiencia
                </HashLink>
            </li>
            <li className="nav-li">
                <HashLink smooth to="/#contacto" className="nav-link">
                    Contacto
                </HashLink>
            </li>
        </ul>
    )
}

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div
            className={`fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 ${isOpen ? 'h-screen' : 'h-auto'}`}
        >
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a
                        href="#"
                        className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
                    >
                        CésarMC
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    >
                        <img
                            src={
                                isOpen ? 'assets/close.svg' : `assets/menu.svg`
                            }
                            alt="toogle"
                            className="w-6 h-6"
                        />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="block overflow-hidden text-center sm:hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxHeight: '100vh' }}
                    transition={{ duration: 1 }}
                >
                    <nav className="pb-5">
                        <Navigation />
                    </nav>
                </motion.div>
            )}
        </div>
    )
}
