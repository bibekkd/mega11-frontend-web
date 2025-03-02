import Image from "next/image";
import { BirdIcon as CricketBall } from "lucide-react";
import { socialLinks, quickLinks, legalLinks } from "@/data/links";
import Link from "next/link";
import Polygon from "@/assets/polygon.png"

export default function Footer() {
    return (
        <footer className="py-12 bg-black border-t border-purple-900/30">
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
                            src={Polygon}
                            alt="Polygon"
                            width={24}
                            height={24}
                            className="rounded-full"
                        />
                    <span className="text-sm text-gray-500">Powered by Polygon</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}