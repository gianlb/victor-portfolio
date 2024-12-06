import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import AnimatedText from '../components/AnimatedText'

export default function Home() {
  const skills = [
    { name: 'Kotlin', percentage: 80 },
    { name: 'Android Studio', percentage: 75 },
    { name: 'Html/Javascript', percentage: 50 },
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow p-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-8 lg:w-1/2 mb-8 lg:mb-0"> 
          <AnimatedText />
          
          <Button asChild>
            <Link href="/contato" className="bg-red-600 hover:bg-red-700 text-white rounded-full w-fit px-8 py-4 text-lg">
              Entre em contato
            </Link>
          </Button>
        </div>

        <div className="lg:w-1/2 flex flex-col items-end gap-8">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-4 border-red-600 overflow-hidden">
              <Image
                src="/fotovictor.jpg"
                alt="Victor Zampella"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full max-w-sm">
            <h2 className="text-red-600 text-xl font-bold mb-4">Habilidades</h2>
            <div className="space-y-2">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center">
                  <span className="text-white text-sm w-32">{skill.name}</span>
                  <div className="flex-grow bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-red-600 h-full"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                  <span className="text-white text-sm w-10 text-right ml-2">{skill.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

