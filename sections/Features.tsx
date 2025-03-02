"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import FeatureCard from "@/components/cards/FeatureCard"
import { features } from "@/data/features"

export default function Features() {
    return (
        <section id="features" className="py-20 bg-gradient-to-b from-black to-purple-950/30">
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
        </section>
    )
}