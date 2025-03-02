import { motion } from 'framer-motion';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { TestimonialProps } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial, index }:TestimonialProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card className="border-purple-800/30 bg-purple-950/10 h-full">
                <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                        <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback className="bg-purple-800">{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    <div>
                        <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                            <CardDescription className="text-gray-400">{testimonial.title}</CardDescription>
                    </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-600"}`} />
                    ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.comment}"</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}