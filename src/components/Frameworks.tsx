import { OrbitingCircles } from './OrbitingCircles'

export function Frameworks() {
   const skills = [
      'typescript',
      'nodejs',
      // 'auth0',
      // 'blazor',
      // 'cplusplus',
      // 'csharp',
      'css3',
      // 'dotnet',
      // 'dotnetcore',
      'git',
      'html5',
      'javascript',
      // 'microsoft',
      'react',
      'sqlite',
      'tailwindcss',
      'vitejs',
      'nextjs',
      'astro',
      'express',
   ]
   return (
      <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
         <OrbitingCircles iconSize={40}>
            {skills.map((skill, index) => {
               if (skill === 'astro') {
                  return (
                     <Icon
                        key={index}
                        src={`assets/logos/${skill}.webp`}
                     />
                  )
               } else {
                  return (
                     <Icon
                        key={index}
                        src={`assets/logos/${skill}.svg`}
                     />
                  )
               }
            })}
         </OrbitingCircles>
         <OrbitingCircles
            iconSize={25}
            radius={100}
            reverse
            speed={2}
         >
            {skills.reverse().map((skill, index) => {
               if (skill === 'astro') {
                  return (
                     <Icon
                        key={index}
                        src={`assets/logos/${skill}.webp`}
                     />
                  )
               } else {
                  return (
                     <Icon
                        key={index}
                        src={`assets/logos/${skill}.svg`}
                     />
                  )
               }
            })}
         </OrbitingCircles>
      </div>
   )
}

interface IconProps {
   src: string
}

const Icon = ({ src }: IconProps) => (
   <img
      src={src}
      className="duration-200 rounded-sm hover:scale-110"
   />
)
