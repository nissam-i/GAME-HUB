import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter text-white">
                            GAME<span className="text-brand-purple">HUB</span>
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Your premier destination for the latest and greatest in gaming. Experience the future of play.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-brand-neon transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-neon transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-neon transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-neon transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Store</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/browse" className="hover:text-white transition-colors">Browse Games</Link></li>
                            <li><Link to="/new" className="hover:text-white transition-colors">New Releases</Link></li>
                            <li><Link to="/sale" className="hover:text-white transition-colors">On Sale</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link to="/status" className="hover:text-white transition-colors">Server Status</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
                        <form className="flex space-x-2">
                            <div className="relative flex-1">
                                <Mail className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple transition-colors"
                                />
                            </div>
                            <button className="bg-brand-purple hover:bg-brand-purple/80 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2024 GAMEHUB. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
