import { Head } from '@inertiajs/inertia-react';

export default function ShowCard({ user }) {
    return (
        <>
            <Head title="Show Profile" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
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
        </>
    );
}
