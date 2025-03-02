"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import StepCard from "@/components/cards/StepCard"
import { steps } from "@/data/steps"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-black">
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
    </section>
  )
}