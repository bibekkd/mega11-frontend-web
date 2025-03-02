"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/sections/Navbar"
import { Hero } from "@/sections/Hero"
import { Features } from "@/sections/Features"
import { HowItWorks } from "@/sections/HowItWorks"
import { AppPreview } from "@/sections/AppPreview"
import { Footer } from "@/sections/Footer"
import { Testimonials } from "@/sections/Testimonials"
import { CTA } from "@/sections/CTA"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <AppPreview/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  )
}
