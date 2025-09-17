export const myProjects = [
   {
      id: 1,
      title: 'Plataforma E-commerce',
      description:
         'Carrito de compras funcional con validación de datos y estructura preparada para escalar; actualmente en mejora visual.',
      subDescription: [
         'Desarrollé una interfaz moderna y responsiva utilizando React, TypeScript y TailwindCSS.',
         'Consumí una API pública y validé los datos con Zod, asegurando consistencia y fiabilidad.',
         'Organicé el estado global con Zustand, aplicando patrones escalables para una arquitectura limpia y mantenible.',
         'Apliqué animaciones fluidas con Framer Motion, mejorando la experiencia del usuario.',
         'Utilicé buenas prácticas y técnicas modernas para garantizar la escalabilidad y legibilidad del código.',
      ],
      href: 'https://tienda-ts-pi.vercel.app/',
      logo: '',
      image: '/assets/projects/e-comerce.png',
      tags: [
         {
            id: 1,
            name: 'React',
            path: '/assets/logos/react.svg',
         },
         {
            id: 2,
            name: 'Tailwindcss',
            path: '/assets/logos/tailwindcss.svg',
         },
         {
            id: 3,
            name: 'Typescript',
            path: '/assets/logos/typescript.svg',
         },
         {
            id: 4,
            name: 'Zustand',
            path: '/assets/logos/zustand.svg',
         },
      ],
   },
   {
      id: 2,
      title: 'Pokedex',
      description:
         'Aplicación que permite buscar cualquier Pokémon y visualizar sus estadísticas completas de forma detallada mediante consumo de API.',
      subDescription: [
         'Desarrollé una interfaz responsiva y atractiva utilizando React, JavaScript y TailwindCSS.',
         'Implementé búsqueda dinámica y visualización detallada de estadísticas a partir de datos obtenidos vía API pública.',
         'Utilicé TanStack Query para gestionar eficientemente las peticiones y el almacenamiento en caché de los datos.',
         'Priorizé la experiencia de usuario mediante una navegación fluida y diseño enfocado en la claridad visual.',
      ],
      href: 'https://pokedex-seven-ecru.vercel.app/',
      logo: '',
      image: '/assets/projects/pokedex.png',
      tags: [
         {
            id: 1,
            name: 'JavaScript',
            path: '/assets/logos/javascript.svg',
         },
         {
            id: 2,
            name: 'React',
            path: '/assets/logos/react.svg',
         },
         {
            id: 3,
            name: 'Tailwindcss',
            path: '/assets/logos/tailwindcss.svg',
         },
         {
            id: 4,
            name: 'TankStackQuery',
            path: '/assets/logos/tankstackquery.svg',
         },
      ],
   },
   {
      id: 3,
      title: 'Recetario de Cocteles',
      description:
         'Aplicación diseñada para explorar una variedad de recetas de cócteles y guardarlas como favoritas, con información detallada obtenida desde una API pública.',
      subDescription: [
         'Desarrollé una interfaz intuitiva y adaptable usando React, TypeScript y TailwindCSS.',
         'Implementé consumo de API para mostrar datos actualizados sobre cada cóctel, incluyendo ingredientes y preparación.Implemented API interactions using .NET Core for a robust backend.',
         'Gestioné el estado global y la lista de favoritos con Zustand, manteniendo una estructura organizada y escalable.',
         'Validé los datos obtenidos mediante Zod, garantizando fiabilidad en la información presentada.',
      ],
      href: 'https://buscador-bebidas-dun.vercel.app/',
      logo: '',
      image: '/assets/projects/cocteles.png',
      tags: [
         {
            id: 1,
            name: 'React',
            path: '/assets/logos/react.svg',
         },
         {
            id: 2,
            name: 'Tailwindcss',
            path: '/assets/logos/tailwindcss.svg',
         },
         {
            id: 3,
            name: 'Typescript',
            path: '/assets/logos/typescript.svg',
         },
         {
            id: 4,
            name: 'Zustand',
            path: '/assets/logos/zustand.svg',
         },
      ],
   },
   {
      id: 4,
      title: 'Landing Page',
      description:
         'Landing page desarrollada como prueba técnica en un plazo de 1 día, utilizando Astro con React y TypeScript para construir una experiencia visual atractiva y dinámica.',
      subDescription: [
         'Implementé la estructura del proyecto con Astro y React, aprovechando la flexibilidad de ambos frameworks.',
         'Desarrollé la interfaz en TypeScript, asegurando tipado estricto y mayor mantenibilidad del código.',
         'Apliqué diversas librerías de animaciones (incluyendo microinteracciones y transiciones fluidas) para mejorar la experiencia de usuario.',
         'Optimizé la landing page para que fuera totalmente responsiva y funcional en distintos dispositivos.',
         'Demostré capacidad de resolución bajo presión al completar la prueba técnica en el plazo establecido de 24 horas.',
      ],
      href: 'https://landing-page-prueba-tecnica-lovat.vercel.app/',
      logo: '',
      image: '/assets/projects/prueba-tecnica.png',
      tags: [
         {
            id: 1,
            name: 'Astro',
            path: '/assets/logos/astro.webp',
         },
         {
            id: 2,
            name: 'React',
            path: '/assets/logos/react.svg',
         },
         {
            id: 3,
            name: 'Typescript',
            path: '/assets/logos/typescript.svg',
         },
      ],
   },
   {
      id: 5,
      title: 'Tema personalizado de WordPress',
      description:
         'Un tema de WordPress totalmente personalizable, optimizado para rendimiento y SEO.',
      subDescription: [
         'Desarrollé un tema responsivo para WordPress utilizando HTML5, CSS3 y JavaScript.',
         'Integré Tailwind CSS para un estilo moderno y mejoras en la interfaz de usuario.',
         'Optimicé el SEO y la velocidad de carga usando Vite.js para compilaciones rápidas.',
         'Implementé widgets personalizados y compatibilidad con plugins para ampliar la funcionalidad.',
      ],
      href: '',
      logo: '',
      image: '/assets/projects/wordpress-theme.jpg',
      tags: [
         {
            id: 1,
            name: 'WordPress',
            path: '/assets/logos/wordpress.svg',
         },
         {
            id: 2,
            name: 'HTML5',
            path: '/assets/logos/html5.svg',
         },
         {
            id: 3,
            name: 'CSS3',
            path: '/assets/logos/css3.svg',
         },
         {
            id: 4,
            name: 'React',
            path: '/assets/logos/react.svg',
         },
      ],
   },
   // {
   //     id: 6,
   //     title: 'Online Learning Platform',
   //     description:
   //         'A web application that allows users to enroll in courses, watch video lectures, and take quizzes.',
   //     subDescription: [
   //         'Built using Blazor WebAssembly for a seamless SPA experience.',
   //         'Implemented video streaming with Azure Media Services.',
   //         'Added a quiz system with dynamic question generation and real-time grading.',
   //         'Integrated Stripe API for secure payment processing.'
   //     ],
   //     href: '',
   //     logo: '',
   //     image: '/assets/projects/elearning.jpg',
   //     tags: [
   //         {
   //             id: 1,
   //             name: 'Blazor',
   //             path: '/assets/logos/blazor.svg'
   //         },
   //         {
   //             id: 2,
   //             name: 'Azure',
   //             path: '/assets/logos/azure.svg'
   //         },
   //         {
   //             id: 3,
   //             name: 'Stripe',
   //             path: '/assets/logos/stripe.svg'
   //         },
   //         {
   //             id: 4,
   //             name: 'TailwindCSS',
   //             path: '/assets/logos/tailwindcss.svg'
   //         }
   //     ]
   // }
]

export const mySocials = [
   {
      name: 'WhatsApp',
      href: 'https://api.whatsapp.com/send/?phone=51910379359&text=Hola,%20vengo%20de%20tu%20portafolio&type=phone_number&app_absent=0',
      icon: '/assets/socials/whatsApp.svg',
   },
   {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/c%C3%A9sar-mej%C3%ADa-c%C3%A1rdenas-990613270/',
      icon: '/assets/socials/linkedIn.svg',
   },
   {
      name: 'Instagram',
      href: 'https://www.instagram.com/cesar_mc_24/',
      icon: '/assets/socials/instagram.svg',
   },
]

export const experiences = [
   {
      title: 'Estudiante de Ingenieria de Sistemas',
      job: 'Universidad Tecnologica del Perú',
      date: '2020 - 2025',
      contents: [
         'Estudiante de Ingeniería de Sistemas en el penúltimo ciclo. He desarrollado proyectos personales aplicando diversas tecnologías, y he participado en proyectos grupales colaborando con comunidades de programadores.',
         'He fortalecido habilidades de trabajo en equipo, resolución de problemas y aprendizaje autónomo mediante participación activa en comunidades de desarrollo.',
         'Desarrollo autodidacta constante, explorando librerías como Zod, React Hook Form, Shadcn UI, entre otras y patrones de arquitectura frontend.',
      ],
   },
   {
      title: 'Desarrollador Frontend',
      job: 'Devdatep Consulting',
      date: '2025 MARZO - JULIO',
      contents: [
         'Desarrollé interfaces modernas y responsivas siguiendo prototipos creados en Figma, asegurando coherencia visual y buena experiencia de usuario.',
         'Utilicé React, TypeScript, React Router y TailwindCSS como base del stack de desarrollo frontend.',
         'Gestioné el estado global de la aplicación y realicé integraciones con el backend en Laravel utilizando Redux Toolkit.',
         'Implementé formularios dinámicos y validaciones robustas con React Hook Form y Zod.',
         'Integré librerías de componentes como Shadcn UI, Motion y React Icons para mantener una interfaz atractiva y reutilizable.',
         'Participé en revisiones de código y mantenimientos enfocados en la escalabilidad y legibilidad del código.',
      ],
   },
   {
      title: 'Desarrollador Frontend',
      job: 'Aptura Labs',
      date: '2025 AGOSTO - SEPTIEMBRE',
      contents: [
         'Desarrollé interfaces web utilizando Next.js y Astro, asegurando un rendimiento óptimo y una arquitectura escalable.',
         'Implementé Apollo Client para integrar el frontend con un backend en GraphQL, optimizando las consultas y el manejo del estado global.',
         'Apliqué pixel-perfect siguiendo los diseños en Figma, garantizando fidelidad visual y experiencia de usuario consistente.',
         'Incorporé animaciones fluidas y microinteracciones con Framer Motion y otras librerías de frontend.',
         'Colaboré con el equipo en entornos Git/GitHub, gestionando ramas, revisiones de código y despliegues continuos.',
         'Conseguí reducir los tiempos de carga de la web en un 35% gracias a la optimización de componentes en Next.js y el uso de SSR/ISR.',
      ],
   },
]
export const reviews = [
   {
      name: 'Jack',
      username: '@jack',
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: 'https://robohash.org/jack',
   },
   {
      name: 'Jill',
      username: '@jill',
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: 'https://robohash.org/jill',
   },
   {
      name: 'John',
      username: '@john',
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: 'https://robohash.org/john',
   },
   {
      name: 'Alice',
      username: '@alice',
      body: "This is hands down the best thing I've experienced. Highly recommend!",
      img: 'https://robohash.org/alice',
   },
   {
      name: 'Bob',
      username: '@bob',
      body: 'Incredible work! The attention to detail is phenomenal.',
      img: 'https://robohash.org/bob',
   },
   {
      name: 'Charlie',
      username: '@charlie',
      body: 'This exceeded all my expectations. Absolutely stunning!',
      img: 'https://robohash.org/charlie',
   },
   {
      name: 'Dave',
      username: '@dave',
      body: "Simply breathtaking. The best decision I've made in a while.",
      img: 'https://robohash.org/dave',
   },
   {
      name: 'Eve',
      username: '@eve',
      body: 'So glad I found this. It has changed the game for me.',
      img: 'https://robohash.org/eve',
   },
]
