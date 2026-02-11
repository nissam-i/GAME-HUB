import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ShoppingBag } from 'lucide-react';
import { Button } from './Button';

export const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video/Image */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="absolute inset-0 z-10 opacity-20 pointer-events-none scanline" /> {/* Scanline Effect */}

                {/* GTA VI Art Background */}
                <div className="absolute inset-0 bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg')] bg-cover bg-center opacity-80 scale-105 animate-pulse-slow" />

                {/* Overlay Video (if available, otherwise fallback to image above) */}
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    poster="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-palm-trees-silhouettes-at-sunset-11496-large.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-pink-500 rounded-full opacity-30"
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                            opacity: 0
                        }}
                        animate={{
                            y: [Math.random() * 100 + "vh", -20],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex items-center space-x-4 mb-4"
                        >
                            <span className="inline-block px-3 py-1 text-xs font-bold tracking-[0.2em] text-white bg-pink-600 rounded-sm shadow-[0_0_20px_rgba(255,0,128,0.5)]">
                                COMING 2025
                            </span>
                            <div className="h-px bg-gradient-to-r from-pink-500/50 to-transparent w-24" />
                        </motion.div>

                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4 leading-[0.85] font-['Pricedown']">
                            GRAND<br />
                            THEFT<br />
                            <span className="relative inline-block">
                                <span className="absolute inset-0 text-pink-500 opacity-20 blur-sm animate-pulse">AUTO VI</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x text-glow">
                                    AUTO VI
                                </span>
                            </span>
                        </h1>

                        <p className="text-base md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed border-l-4 border-pink-500 pl-6">
                            Welcome to Leonida. Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City and beyond.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 border-0 shadow-lg relative overflow-hidden group"
                                icon={<Play size={24} />}
                                onClick={() => window.open('https://www.youtube.com/watch?v=QdBZY2fkU-0', '_blank')}
                            >
                                <span className="relative z-10 font-bold tracking-wide">WATCH TRAILER 1</span>
                            </Button>

                            <Button
                                size="lg"
                                variant="glass"
                                className="border-white/20 hover:border-pink-500/50 hover:bg-pink-500/10 text-white min-w-[180px]"
                                icon={<ShoppingBag size={24} className="fill-current" />}
                            >
                                PRE-ORDER NOW
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-widest text-white/40 uppercase rotate-90 origin-right translate-x-3 mb-8">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-30" />
            </motion.div>
        </div>
    );
};
