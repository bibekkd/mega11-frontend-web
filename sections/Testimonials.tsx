import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialCard from "@/components/cards/TestimonialCard"
import { testimonials, communityLinks } from "@/data/links"
import Link from "next/link";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-black">
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
        </section>
    );
}