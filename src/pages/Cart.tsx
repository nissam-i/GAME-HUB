import { useStore } from '../store/useStore';
import { Button } from '../components/Button';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cart, removeFromCart } = useStore();
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>

            {cart.length === 0 ? (
                <div className="text-center py-24 bg-white/5 rounded-2xl border border-white/10">
                    <h2 className="text-2xl text-gray-300 mb-4">Your cart is empty</h2>
                    <Link to="/">
                        <Button variant="primary">Browse Games</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center bg-white/5 p-4 rounded-xl border border-white/10">
                                <img src={item.image} alt={item.title} className="w-24 h-16 object-cover rounded-md" />
                                <div className="ml-4 flex-1">
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    <p className="text-gray-400">Base Game</p>
                                </div>
                                <div className="text-right mx-4">
                                    <span className="text-xl font-bold text-white">${item.price.toFixed(2)}</span>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 h-fit">
                        <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                        <div className="flex justify-between mb-4 text-gray-300">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-6 text-gray-300">
                            <span>Tax</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="border-t border-white/10 pt-4 mb-8 flex justify-between">
                            <span className="text-xl font-bold text-white">Total</span>
                            <span className="text-xl font-bold text-brand-neon">${total.toFixed(2)}</span>
                        </div>
                        <Button className="w-full bg-brand-neon text-black hover:bg-brand-neon/90" size="lg">
                            Checkout <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
