"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-accent">
          SKYBLAZER
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-foreground hover:text-accent transition">
            Services
          </Link>
          <Link href="#portfolio" className="text-foreground hover:text-accent transition">
            Portfolio
          </Link>
          <Link href="#about" className="text-foreground hover:text-accent transition">
            About
          </Link>
          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-medium">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#services" className="text-foreground hover:text-accent transition">
                Services
              </Link>
              <Link href="#portfolio" className="text-foreground hover:text-accent transition">
                Portfolio
              </Link>
              <Link href="#about" className="text-foreground hover:text-accent transition">
                About
              </Link>
              <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-medium w-full">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
