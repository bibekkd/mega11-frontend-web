"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BirdIcon as CricketBall } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
            <CricketBall className="h-8 w-8 text-purple-500" />
          </motion.div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Mega11
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm hover:text-purple-400 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm hover:text-purple-400 transition-colors">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-sm hover:text-purple-400 transition-colors">
            Community
          </Link>
        </nav>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Connect Wallet</Button>
        </motion.div>
      </div>
    </header>
  )
}