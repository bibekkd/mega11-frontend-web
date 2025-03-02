import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"
import { StepCardProps } from "@/lib/types"


export default function StepCard({ step, index }: StepCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
        >
            {index < 2 && (
            <div className="hidden md:block absolute mt-3 top-1/4 right-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent z-0"></div>
            )}

        <Card className="border-purple-800/30 bg-purple-950/10 relative z-10">
            <CardHeader className="pb-2">
                <div className="flex items-center gap-4 mb-2">
                    <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                    </div>
                        <CardTitle className="text-white">{step.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-gray-400">{step.description}</CardDescription>
            </CardContent>
            <CardFooter className="pt-0">
                <div className="bg-purple-900/30 p-4 rounded-lg w-full">
                    <div className="flex items-center gap-3">
                        <step.icon className="h-5 w-5 text-purple-400" />
                            <span className="text-sm text-purple-300">{step.highlight}</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
      </motion.div>
    )
  }