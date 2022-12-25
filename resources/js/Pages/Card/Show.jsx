import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/inertia-react';

export default function ShowCard({ user }) {
    return (
        <>
            <Head title="Show Profile" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {user ? (<>
                                <p>User Card</p>
                                <p>{user.name}</p>
                                <p>{user.handlename}</p>

                            </>

                            ) : (
                                <>
                                    <p>User is undefined.</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
