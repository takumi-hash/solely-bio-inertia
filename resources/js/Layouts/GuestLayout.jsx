import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <NavLink href={route('register')} active={route().current('register')}>
                                Register
                            </NavLink>

                            <NavLink href={route('login')} active={route().current('login')}>
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col p-4">{children}</div>
            <Footer></Footer>
        </div>
    );
}
