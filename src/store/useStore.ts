import { create } from 'zustand';

export interface Game {
    id: string;
    title: string;
    price: number;
    image: string;
}

interface StoreState {
    cart: Game[];
    wishlist: Game[];
    addToCart: (game: Game) => void;
    removeFromCart: (gameId: string) => void;
    addToWishlist: (game: Game) => void;
    removeFromWishlist: (gameId: string) => void;
}

export const useStore = create<StoreState>((set) => ({
    cart: [],
    wishlist: [],
    addToCart: (game) =>
        set((state) => {
            if (state.cart.find((item) => item.id === game.id)) return state;
            return { cart: [...state.cart, game] };
        }),
    removeFromCart: (gameId) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== gameId) })),
    addToWishlist: (game) =>
        set((state) => {
            if (state.wishlist.find((item) => item.id === game.id)) return state;
            return { wishlist: [...state.wishlist, game] };
        }),
    removeFromWishlist: (gameId) =>
        set((state) => ({ wishlist: state.wishlist.filter((item) => item.id !== gameId) })),
}));
