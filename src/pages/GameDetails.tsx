import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, Heart, Play, X } from 'lucide-react';
import { Button } from '../components/Button';
import { useStore } from '../store/useStore';

// Mock data extension
const GAMES_DATA: Record<string, any> = {
    'cp2077': {
        id: 'cp2077',
        title: 'Cyberpunk 2077',
        price: 59.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900_2x.jpg',
        description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.',
        genre: 'RPG',
        rating: 4.8,
        developer: 'CD PROJEKT RED',
        releaseDate: '2020-12-10',
        trailerId: '8X2kIfS6fb8' // Official Launch Trailer
    },
    'starfield': {
        id: 'starfield',
        title: 'Starfield',
        price: 69.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/library_600x900_2x.jpg',
        description: 'Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.',
        genre: 'RPG',
        rating: 4.5,
        developer: 'Bethesda Game Studios',
        releaseDate: '2023-09-06',
        trailerId: 'kfYEiTdsyas' // Official Gameplay Trailer
    },
    'gta5': {
        id: 'gta5',
        title: 'Grand Theft Auto V',
        price: 29.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900_2x.jpg',
        description: 'Grand Theft Auto V offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.',
        genre: 'Action',
        rating: 4.9,
        developer: 'Rockstar Games',
        releaseDate: '2013-09-17',
        trailerId: 'QkkoHAzjnUs' // GTA V Trailer
    },
    'cod': {
        id: 'cod',
        title: 'Call of Duty: Modern Warfare III',
        price: 69.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/library_600x900_2x.jpg',
        description: 'In the direct sequel to the record-breaking Call of Duty: Modern Warfare II, Captain Price and Task Force 141 face off against the ultimate threat.',
        genre: 'FPS',
        rating: 4.2,
        developer: 'Sledgehammer Games',
        releaseDate: '2023-11-10',
        trailerId: 'mHDEDDrGYvo' // MW3 Trailer
    },
    'rdr2': {
        id: 'rdr2',
        title: 'Red Dead Redemption 2',
        price: 59.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900_2x.jpg',
        description: 'Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.',
        genre: 'Action-Adventure',
        rating: 5.0,
        developer: 'Rockstar Games',
        releaseDate: '2018-10-26',
        trailerId: 'eaW0tYpxyp0' // RDR2 Trailer
    },
    'wayout': {
        id: 'wayout',
        title: 'A Way Out',
        price: 29.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/library_600x900_2x.jpg',
        description: 'A Way Out is an exclusively co-op adventure where you play the role of one of two prisoners making their daring escape from prison.',
        genre: 'Co-op',
        rating: 4.6,
        developer: 'Hazelight',
        releaseDate: '2018-03-23',
        trailerId: 'yGksjw3Vzpk' // A Way Out Trailer
    },
    'forza5': {
        id: 'forza5',
        title: 'Forza Horizon 5',
        price: 59.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900_2x.jpg',
        description: 'Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.',
        genre: 'Racing',
        rating: 4.9,
        developer: 'Playground Games',
        releaseDate: '2021-11-05',
        trailerId: 'FYH9n37B7Yw' // Forza Horizon 5 Trailer
    },
    'destiny2': {
        id: 'destiny2',
        title: 'Destiny 2',
        price: 0.00,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/library_600x900_2x.jpg',
        description: 'Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.',
        genre: 'Action',
        rating: 4.7,
        developer: 'Bungie',
        releaseDate: '2017-09-06',
        trailerId: 'hdWkpbPTpmE' // Destiny 2 Trailer
    },
    // Fallback for demo
    'default': {
        id: '0',
        title: 'Unknown Game',
        price: 0.00,
        image: '',
        description: 'Game not found.',
        genre: 'N/A',
        rating: 0,
        developer: 'N/A',
        releaseDate: 'N/A',
        trailerId: ''
    }
};

export const GameDetails = () => {
    const { id } = useParams();
    const game = GAMES_DATA[id || ''] || GAMES_DATA['default'];
    const { addToCart, addToWishlist } = useStore();
    const [showTrailer, setShowTrailer] = useState(false);

    if (game.id === '0' && id !== '0') {
        // Basic fallback for IDs not in map but in mock list
        game.title = `Game ${id}`;
        game.price = 59.99;
        game.image = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=900&auto=format&fit=crop';
    }

    return (
        <div className="bg-brand-dark min-h-screen pt-20">
            {/* Hero Backdrop */}
            <div className="relative h-[60vh] overflow-hidden group">
                <div className="absolute inset-0">
                    <img src={game.image} alt={game.title} className="w-full h-full object-cover opacity-50 blur-sm scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-8">
                        <motion.div
                            className="relative group cursor-pointer"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            onClick={() => setShowTrailer(true)}
                        >
                            <img
                                src={game.image}
                                alt="Cover"
                                className="w-48 h-64 object-cover rounded-lg shadow-2xl border border-white/10 hidden md:block transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Play overlay on cover */}
                            <div className="absolute inset-0 hidden md:flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                <Play className="w-12 h-12 text-white fill-current" />
                            </div>
                        </motion.div>

                        <div className="flex-1 mb-4">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <span className="inline-block px-3 py-1 bg-brand-purple text-white text-xs font-bold rounded mb-4">
                                    {game.genre}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{game.title}</h1>

                                <div className="flex items-center space-x-4 text-gray-300 mb-6">
                                    <div className="flex items-center text-yellow-400">
                                        <Star className="w-5 h-5 fill-current" />
                                        <span className="ml-1 font-bold">{game.rating}</span>
                                    </div>
                                    <span>|</span>
                                    <span>{game.developer}</span>
                                    <span>|</span>
                                    <span>Released: {game.releaseDate}</span>
                                </div>

                                <Button
                                    onClick={() => setShowTrailer(true)}
                                    className="bg-white/10 hover:bg-white/20 text-white border-white/20 mb-4"
                                    icon={<Play size={18} className="fill-current" />}
                                >
                                    Watch Trailer
                                </Button>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full md:w-80"
                        >
                            <div className="text-3xl font-bold text-white mb-4">${game.price.toFixed(2)}</div>
                            <div className="space-y-3">
                                <Button
                                    className="w-full bg-brand-neon text-black hover:bg-brand-neon/90"
                                    icon={<ShoppingCart size={18} />}
                                    onClick={() => addToCart(game)}
                                >
                                    Add to Cart
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    icon={<Heart size={18} />}
                                    onClick={() => addToWishlist(game)}
                                >
                                    Add to Wishlist
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Trailer Modal */}
            <AnimatePresence>
                {showTrailer && game.trailerId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setShowTrailer(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowTrailer(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-brand-neon text-white hover:text-black rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${game.trailerId}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">About</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {game.description}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Placeholders */}
                            <div className="aspect-video bg-gray-800 rounded-lg animate-pulse" />
                            <div className="aspect-video bg-gray-800 rounded-lg animate-pulse" />
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-4">Game Features</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center"><span className="w-2 h-2 bg-brand-purple rounded-full mr-2" />Single Player</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-brand-purple rounded-full mr-2" />4K Ultra HD</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-brand-purple rounded-full mr-2" />Controller Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
