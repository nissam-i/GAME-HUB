import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Search, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cart, wishlist } = useStore();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                isScrolled ? 'bg-brand-dark/80 backdrop-blur-md border-white/10' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <h1 className="text-2xl font-bold tracking-tighter text-white">
                            GAME<span className="text-brand-purple">HUB</span>
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-300 hover:text-white transition-colors">Store</Link>
                        <Link to="/browse" className="text-gray-300 hover:text-white transition-colors">Browse</Link>
                        <Link to="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="relative group">
                            <Search className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors cursor-pointer" />
                        </div>

                        <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
                            <Link to="/wishlist" className="relative group">
                                <Heart className="w-5 h-5 text-gray-400 group-hover:text-brand-pink transition-colors" />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-pink rounded-full" />
                                )}
                            </Link>

                            <Link to="/cart" className="relative group">
                                <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-brand-neon transition-colors" />
                                {cart.length > 0 && (
                                    <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-brand-neon text-black text-[10px] font-bold rounded-full">
                                        {cart.length}
                                    </span>
                                )}
                            </Link>

                            <button className="flex items-center space-x-2 text-sm font-medium hover:text-brand-purple transition-colors">
                                <User className="w-5 h-5" />
                                <span>Sign In</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4">
                            <Link to="/" className="block px-3 py-2 text-base font-medium text-white bg-white/5 rounded-md">Store</Link>
                            <Link to="/browse" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Browse</Link>
                            <Link to="/support" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Support</Link>

                            <div className="border-t border-white/10 pt-4 mt-4 flex justify-between px-3">
                                <Link to="/wishlist" className="flex items-center space-x-2 text-gray-300">
                                    <Heart className="w-5 h-5" />
                                    <span>Wishlist ({wishlist.length})</span>
                                </Link>
                                <Link to="/cart" className="flex items-center space-x-2 text-gray-300">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span>Cart ({cart.length})</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
