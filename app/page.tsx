"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Wallet,
  Users,
  Trophy,
  ArrowRight,
  BirdIcon as CricketBall,
  BoltIcon as Bat,
  StickerIcon as Stadium,
  Star,
  Coins,
  ShoppingBag,
  ImageIcon,
  ChevronRight,
  Github,
  Twitter,
  TextIcon as Telegram,
  DiscIcon as Discord,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/sections/Navbar"
import TestimonialCard from "@/components/cards/TestimonialCard"
import { features, appFeatures } from "@/data/features";
import { steps } from "@/data/steps";
import { quickLinks, socialLinks, testimonials, communityLinks, legalLinks } from "@/data/links"
import FeatureCard from "@/components/cards/FeatureCard"
import StepCard from "@/components/cards/StepCard"
import Hero from "@/sections/Hero"
import Features from "@/sections/Features"
import HowItWorks from "@/sections/HowItWorks"
import AppPreview from "@/sections/AppPreview"
import Testimonials from "@/sections/Testimonials"
import CTA from "@/sections/CTA"
import Footer from "@/sections/Footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
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
      </header> */}
      <Navbar/>

      {/* Hero Section */}
      {/*
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black/60 to-black"></div>

          {/* Animated Cricket Icons 
          <FloatingIcons />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                The Future of Fantasy Cricket on Blockchain
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                {`Join IPL 2025's most transparent and exciting fantasy league powered by Polygon.`}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                  Join Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-purple-700 text-purple-600  hover:bg-purple-900/30 hover:text-white px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      */}

      <Hero/>

      {/* Feature Highlights Section */}

      {/* <section id="features" className="py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-purple-900/50 text-purple-300 mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionizing Fantasy Cricket</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the next generation of fantasy sports with blockchain technology, ensuring transparency,
              ownership, and exciting rewards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section> */}
      <Features/>

      {/* How It Works Section */}
      {/* <section id="how-it-works" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-purple-900/50 text-purple-300 mb-4">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get started with Mega11 in just three simple steps and dive into the exciting world of blockchain-powered
              fantasy cricket.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section> */}
      <HowItWorks/>

      {/* App Preview Section */}
      {/* <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <Badge className="bg-purple-900/50 text-purple-300 mb-4">App Preview</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Future of Fantasy Sports</h2>
              <p className="text-gray-400 mb-8">
                Mega11 combines the thrill of fantasy cricket with the security and transparency of blockchain
                technology. Create your dream team, compete with friends, and earn rewards in a completely decentralized
                ecosystem.
              </p>

              <div className="space-y-4">
                {appFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 bg-purple-600/20 p-1.5 rounded-full">
                      <feature.icon className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-3xl blur-xl opacity-75"></div>
                <div className="relative bg-black rounded-3xl overflow-hidden border border-purple-500/30">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    alt="Mega11 App Preview"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full h-24 w-24 flex items-center justify-center shadow-xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <CricketBall className="h-10 w-10 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      <AppPreview/>

      {/* Testimonials & Community Section */}
      {/* <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-purple-900/50 text-purple-300 mb-4">Community</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Community</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our early adopters have to say about Mega11 and become part of our thriving community.
            </p>
          </motion.div>

          <Tabs defaultValue="testimonials" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-purple-950/30">
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="community">Join Community</TabsTrigger>
            </TabsList>

            <TabsContent value="testimonials">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community">
              <Card className="border-purple-800/30 bg-purple-950/10">
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                  <CardDescription className="text-gray-400">
                    Join our community channels to stay updated and connect with other fantasy cricket enthusiasts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {communityLinks.map((link, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Link href={link.url} target="_blank" rel="noopener noreferrer">
                          <div className="flex items-center gap-3 p-4 rounded-lg bg-purple-950/30 border border-purple-800/30 hover:bg-purple-900/30 transition-colors">
                            <div className="bg-purple-800/50 p-2 rounded-lg">
                              <link.icon className="h-5 w-5 text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">{link.name}</h4>
                              <p className="text-xs text-gray-400">{link.members}</p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}
      <Testimonials/>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 to-purple-700 p-8 md:p-12">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 mix-blend-overlay"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Ready to Transform Your Fantasy Cricket Experience?
                </h2>
                <p className="text-purple-100 mb-6">
                  Get early access to Mega11 and be among the first to experience the future of fantasy sports on
                  blockchain.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                      Get Early Access
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="hidden md:block"
              >
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-6">
                    <Trophy className="h-28 w-28 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}
      <CTA/>

      {/* Footer */}
      {/* <footer className="py-12 bg-black border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <CricketBall className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Mega11
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The future of fantasy cricket on blockchain. Transparent, secure, and exciting fantasy sports experience
                powered by Polygon.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="bg-purple-900/30 p-2 rounded-full hover:bg-purple-800/50 transition-colors"
                  >
                    <link.icon className="h-5 w-5 text-purple-300" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-400 hover:text-purple-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-400 hover:text-purple-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-900/30 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Mega11. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Polygon"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-gray-500">Powered by Polygon</span>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer/>
    </div>
  )
}










