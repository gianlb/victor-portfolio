import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Github } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'App de Formas Geométricas',
      description: 'All the Forms é um aplicativo educacional e funcional que permite calcular as áreas de diversas formas geométricas.',
      image: '/placeholder.svg?height=200&width=400',
      github: 'https://github.com/yourusername/geometric-forms'
    },
    {
      title: 'App Filmes Aleatórios',
      description: 'Este projeto é um aplicativo simples desenvolvido em Kotlin para Android, com o objetivo de sortear filmes aleatórios e exibir o gênero correspondente abaixo da imagem do filme sorteado',
      image: '/placeholder.svg?height=200&width=400',
      github: 'https://github.com/yourusername/random-movies'
    }
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden"
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>
                <Button
                  asChild
                  className="bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-4 rounded-full flex items-center gap-2"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    Ver no GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

