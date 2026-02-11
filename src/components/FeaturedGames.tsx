import { GameCard } from './GameCard';
import { motion } from 'framer-motion';

const MOCK_GAMES = [
    {
        id: 'gta5',
        title: 'Grand Theft Auto V',
        price: 29.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900_2x.jpg',
        genre: 'Action',
        rating: 4.9,
    },
    {
        id: 'cod',
        title: 'Call of Duty: MW III',
        price: 69.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/library_600x900_2x.jpg',
        genre: 'FPS',
        rating: 4.2,
    },
    {
        id: 'rdr2',
        title: 'Red Dead Redemption 2',
        price: 59.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900_2x.jpg',
        genre: 'Adventure',
        rating: 5.0,
    },
    {
        id: 'wayout',
        title: 'A Way Out',
        price: 29.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/library_600x900_2x.jpg',
        genre: 'Co-op',
        rating: 4.6,
    },
    {
        id: 'forza5',
        title: 'Forza Horizon 5',
        price: 59.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900_2x.jpg',
        genre: 'Racing',
        rating: 4.9,
    },
    {
        id: 'cp2077',
        title: 'Cyberpunk 2077',
        price: 59.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900_2x.jpg',
        genre: 'RPG',
        rating: 4.8,
    },
    {
        id: 'starfield',
        title: 'Starfield',
        price: 69.99,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/library_600x900_2x.jpg',
        genre: 'RPG',
        rating: 4.5,
    },
    {
        id: 'destiny2',
        title: 'Destiny 2',
        price: 0.00,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/library_600x900_2x.jpg',
        genre: 'Action',
        rating: 4.7,
    },
];

export const FeaturedGames = () => {
    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-brand-neon/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Games</h2>
                        <div className="h-1 w-20 bg-brand-purple rounded-full" />
                    </div>
                    <button className="text-brand-neon hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
                        View All Games
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {MOCK_GAMES.map((game, index) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GameCard {...game} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
