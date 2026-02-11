import { Hero } from '../components/Hero';
import { FeaturedGames } from '../components/FeaturedGames';

export const Home = () => {
    return (
        <div className="bg-brand-dark min-h-screen">
            <Hero />
            <FeaturedGames />

            {/* Newsletter Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-purple/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Revolution</h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Sign up now to get early access to beta releases, exclusive in-game items, and special discounts on your favorite titles.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-colors">
                            Get Started Free
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
