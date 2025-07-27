// components/Navbar.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed w-full bg-deepblue/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center text-white font-bold text-2xl">
          <Image src="/logo.png" alt="CuSoR Logo" width={40} height={40} className="mr-2" />
          CuSoR
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-orange transition">About Us</a>
          <a href="#research-fields" className="text-white hover:text-orange transition">Fields</a>
          <a href="#survey-insights" className="text-white hover:text-orange transition">Insights</a>
          <a href="#opportunities" className="text-white hover:text-orange transition">Opportunities</a>
          <a href="#faqs" className="text-white hover:text-orange transition">FAQs</a>
          <a href="#council" className="text-white hover:text-orange transition">Council</a>
          <a href="#contact" className="text-white hover:text-orange transition">Contact</a>
        </div>
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-deepblue">
          <a href="#about" className="block px-4 py-2 text-white hover:bg-gray-700">About Us</a>
          <a href="#research-fields" className="block px-4 py-2 text-white hover:bg-gray-700">Fields</a>
          <a href="#survey-insights" className="block px-4 py-2 text-white hover:bg-gray-700">Insights</a>
          <a href="#opportunities" className="block px-4 py-2 text-white hover:bg-gray-700">Opportunities</a>
          <a href="#faqs" className="block px-4 py-2 text-white hover:bg-gray-700">FAQs</a>
          <a href="#council" className="block px-4 py-2 text-white hover:bg-gray-700">Council</a>
          <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-700">Contact</a>
        </div>
      )}
    </header>
  )
}
