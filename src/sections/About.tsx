// import { type RefObject, useRef } from 'react'
import { useRef } from 'react'
import { Card } from '../components/Card'
import { CopyEmailButton } from '../components/CopyEmailButton'
import { Frameworks } from '../components/Frameworks'
import { Globe } from '../components/Globe'

export const About = () => {
    const grid2Container = useRef<HTMLDivElement | null>(null)
    return (
        <section className="c-space section-spacing" id="sobremi">
            <h2 className="text-heading">Sobre mi</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className="z-10">
                        <p className="headtext">Hola, soy César Mejia</p>
                        <p className="subtext">
                            En los ultimos años he fortalecido mis habilidades
                            en desarrollo frontend y backend para ofrecer
                            aplicaciones web dinámicas y funcionales.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div
                        ref={grid2Container}
                        className="flex items-center justify-center w-full h-full"
                    >
                        <p className="flex items-end text-5xl text-gray-500 text-center select-none">
                            EL CODIGO ES UN ARTE
                        </p>
                        <Card
                            style={{ rotate: '75deg', top: '30%', left: '20%' }}
                            text="GRASP"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{
                                rotate: '-30deg',
                                top: '60%',
                                left: '45%'
                            }}
                            text="SOLID"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{
                                rotate: '90deg',
                                bottom: '30%',
                                left: '70%'
                            }}
                            text="Patrones"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '-45deg', top: '55%', left: '0%' }}
                            text="Diseño"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '20deg', top: '10%', left: '38%' }}
                            text="SRP"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '30deg', top: '70%', left: '70%' }}
                            image="assets/logos/tailwind-css.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{
                                rotate: '-45deg',
                                top: '70%',
                                left: '25%'
                            }}
                            image="assets/logos/node-js.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '-45deg', top: '5%', left: '10%' }}
                            image="assets/logos/js.png"
                            containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Zona</p>
                        <p className="subtext">
                            Vivo en Perú, y estoy abierto al trabajo remoto en
                            cualquier parte del mundo. 🌍
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Quieres empezar un proyecto juntos?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headText">Mi Stack de Tecnologias</p>
                        <p className="subtext">
                            Me especializo en una variedad de lenguajes,
                            frameworks, y herramientas que me permiten construir
                            sistemas robustos y escalables aplicaciones.
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    )
}
