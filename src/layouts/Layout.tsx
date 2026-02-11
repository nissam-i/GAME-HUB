import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-brand-dark text-white font-sans selection:bg-brand-purple selection:text-white">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
