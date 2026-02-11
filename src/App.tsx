import { Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import { GameDetails } from './pages/GameDetails';
import { Cart } from './pages/Cart';

const Wishlist = () => <div className="pt-32 text-center"><h1>Wishlist (Coming Soon)</h1></div>;
const Browse = () => <div className="pt-32 text-center"><h1>Browse Games (Coming Soon)</h1></div>;
const Support = () => <div className="pt-32 text-center"><h1>Support Center (Coming Soon)</h1></div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="game/:id" element={<GameDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="browse" element={<Browse />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
