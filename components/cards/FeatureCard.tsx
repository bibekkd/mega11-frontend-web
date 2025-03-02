import { motion } from "framer-motion";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { FeatureProps } from "@/lib/types";
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react";

export default function FeatureCard({ feature, index }: FeatureProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card className="border-purple-800/30 bg-purple-950/10 h-full">
                <CardHeader>
                    <div className="bg-purple-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button variant="link" className="text-purple-600 p-0 hover:text-purple-300">
                    Learn more<ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}