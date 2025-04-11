"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Friends Cafe Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-red-600">Friends Cafe</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#home" className="text-amber-900 hover:text-red-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="#menu" className="text-amber-900 hover:text-red-600 font-medium transition-colors">
            Menu
          </Link>
          <Link href="#about" className="text-amber-900 hover:text-red-600 font-medium transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-amber-900 hover:text-red-600 font-medium transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-amber-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="#home"
              className="text-amber-900 hover:text-red-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#menu"
              className="text-amber-900 hover:text-red-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="#about"
              className="text-amber-900 hover:text-red-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-amber-900 hover:text-red-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
