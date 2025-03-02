"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { BirdIcon as CricketBall } from "lucide-react"
import { appFeatures } from "@/data/features"

export default function AppPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
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
      </section>
  )
}