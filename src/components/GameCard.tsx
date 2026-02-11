import { motion } from 'framer-motion';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from './Button';
import { useStore, type Game } from '../store/useStore';
import { Link } from 'react-router-dom';

interface GameCardProps extends Game {
    genre: string;
    rating: number;
}

export const GameCard = (props: GameCardProps) => {
    const { id, title, price, image, genre, rating } = props;
    const { addToCart } = useStore();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-brand-gray shadow-lg border border-white/5"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <span className="inline-block px-2 py-1 bg-brand-purple/20 border border-brand-purple/30 rounded text-[10px] font-bold text-brand-purple mb-2 backdrop-blur-sm">
                                {genre.toUpperCase()}
                            </span>
                            <h3 className="text-xl font-bold text-white leading-tight mb-1 group-hover:text-brand-neon transition-colors">
                                {title}
                            </h3>
                        </div>
                        <div className="flex items-center space-x-1 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-bold text-white">{rating}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-gray-200">
                            ${price.toFixed(2)}
                        </span>
                    </div>

                    {/* Action Buttons - Hidden by default, shown on hover */}
                    <div className="grid grid-cols-2 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <Button
                            size="sm"
                            variant="primary"
                            className="bg-brand-neon text-black hover:bg-brand-neon/90 w-full"
                            onClick={() => addToCart({ id, title, price, image })}
                            icon={<ShoppingCart className="w-4 h-4" />}
                        >
                            Add
                        </Button>
                        <Link to={`/game/${id}`} className="w-full">
                            <Button
                                size="sm"
                                variant="glass"
                                className="w-full"
                                icon={<Eye className="w-4 h-4" />}
                            >
                                View
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
