"use client"

import { motion } from "framer-motion"
import { BirdIcon as CricketBall, BoltIcon as Bat, StickerIcon as Stadium } from "lucide-react"

export function FloatingIcons() {
    return (
        <>
        {[...Array(15)].map((_, index) => {
            const icons = [CricketBall, Bat, Stadium]
            const Icon = icons[index % icons.length]
            const size = Math.random() * 20 + 10
            const left = Math.random() * 100
            const top = Math.random() * 100
            const duration = Math.random() * 20 + 10
            const delay = Math.random() * 5

            return (
            <motion.div
                key={index}
                className="absolute text-purple-500/20"
                style={{ left: `${left}%`, top: `${top}%` }}
                animate={{
                y: [0, -30, 0],
                x: [0, Math.random() > 0.5 ? 30 : -30, 0],
                rotate: [0, 360, 0],
                }}
                transition={{
                duration,
                repeat: Number.POSITIVE_INFINITY,
                delay,
                ease: "linear",
                }}
            >
                <Icon style={{ width: size, height: size }} />
            </motion.div>
            )
        })}
        </>
    )
}