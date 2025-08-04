import emailjs from '@emailjs/browser'
import { type ChangeEvent, type FormEvent, useState } from 'react'
import { Alert } from '../components/Alert'
import { Particles } from '../components/Particles'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState('success')
    const [alertMessage, setAlertMessage] = useState('')
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        // ChangeEvent<>
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const showAlertMessage = (type: string, message: string) => {
        setAlertType(type)
        setAlertMessage(message)
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            console.log('From submitted:', formData)
            await emailjs.send(
                'service_0blh5ke',
                'template_9cqngfk',
                {
                    from_name: formData.name,
                    to_name: 'César',
                    from_email: formData.email,
                    to_email: 'cesar99dev@gmail.com',
                    message: formData.message
                },
                'yAUXayl0dobW_vl-F'
            )
            setIsLoading(false)
            setFormData({ name: '', email: '', message: '' })
            showAlertMessage('success', 'You message has been sent!')
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            showAlertMessage('danger', 'Somthing went wrong!')
        }
    }
    return (
        <section
            id="contacto"
            className="relative flex items-center c-space section-spacing"
        >
            <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={'#ffffff'}
                refresh
            />
            {showAlert && <Alert type={alertType} text={alertMessage} />}
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Hablemos</h2>
                    <p className="font-normal text-neutral-400">
                        Ya sea que esté buscando crear un nuevo sitio web,
                        mejore su plataforma existente, o traer un proyecto
                        único a vida, estoy aquí para ayudar.
                    </p>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="feild-label">
                            Nombre Completo
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="John Doe"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="feild-label">
                            Correo
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="field-input field-input-focus"
                            placeholder="JohnDoe@email.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="feild-label">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="field-input field-input-focus"
                            placeholder="Comparte tus pensamientos..."
                            autoComplete="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
                    >
                        {!isLoading ? 'Enviar' : 'Enviando...'}
                    </button>
                </form>
            </div>
        </section>
    )
}
