import { motion } from 'motion/react'

interface ProjectDetailsProps {
    title: string
    description: string
    subDescription: string[]
    href: string
    repos?: { label: string; href: string }[]
    image: string
    tags: {
        id: number
        name: string
        path: string
    }[]
    closeModal: () => void
}

export const ProjectDetails = ({
    title,
    description,
    subDescription,
    image,
    tags,
    href,
    repos,
    closeModal
}: ProjectDetailsProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
            <motion.div
                className="relative max-w-2xl max-h-[90vh] overflow-y-auto mx-4 border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <button
                    onClick={closeModal}
                    className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
                >
                    <img src="assets/close.svg" className="w-6 h-6" />
                </button>
                <img src={image} alt={title} className="w-full rounded-t-2xl" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold text-white">
                        {title}
                    </h5>
                    <p className="mb-3 font-normal text-neutral-400">
                        {description}
                    </p>
                    {subDescription.map((subDesc, index) => (
                        <p
                            key={subDesc + index}
                            className="mb-3 font-normal text-neutral-400"
                        >
                            {subDesc}
                        </p>
                    ))}
                    {repos && repos.length > 0 && (
                        <div className="flex flex-wrap gap-4 mb-3">
                            {repos.map((repo) => (
                                <a
                                    key={repo.href}
                                    href={repo.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-neutral-300 underline underline-offset-4 hover:text-white"
                                >
                                    <img
                                        src="assets/logos/github.svg"
                                        alt=""
                                        // invert: el logo es negro y el fondo del modal oscuro
                                        className="size-4 invert"
                                    />
                                    {repo.label}
                                </a>
                            ))}
                        </div>
                    )}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-3">
                            {tags.map((tag) => (
                                <img
                                    key={tag.id}
                                    src={tag.path}
                                    alt={tag.name}
                                    className="rounded-lg size-10 hover-animation"
                                />
                            ))}
                        </div>
                        <a
                            className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                            href={href}
                            target="_blank"
                        >
                            Ver Proyecto{' '}
                            <img src="assets/arrow-up.svg" className="size-4" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
