import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
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
      </section>
    );
}