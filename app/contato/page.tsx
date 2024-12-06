import Navbar from '@/components/Navbar'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Contato() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-8 w-8" />,
      href: 'https://linkedin.com/in/yourusername',
      bgColor: 'bg-[#0A66C2]'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-8 w-8" />,
      href: 'https://github.com/yourusername',
      bgColor: 'bg-[#24292F]'
    },
    {
      name: 'Email',
      icon: <Mail className="h-8 w-8" />,
      href: 'mailto:your.email@example.com',
      bgColor: 'bg-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-16">
          Conecte-se Comigo
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.bgColor} rounded-xl p-8 flex flex-col items-center gap-4 transition-transform hover:scale-105`}
            >
              {link.icon}
              <span className="text-white font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

