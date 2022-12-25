import GuestLayout from '@/Layouts/GuestLayout';
import Card from '@/Components/Card';
import { Head } from '@inertiajs/inertia-react';

export default function ShowCard({ user, links }) {
    return (
        <>
            <GuestLayout>
                <Head title="Show Profile" />
                <div className="min-w-[80%] md:min-w-[50%] mx-auto py-12">
                    {user ? (
                        <>
                            <Card user={user} links={links}></Card>
                        </>
                    ) : (
                        <>
                            <p>User is undefined.</p>
                        </>
                    )}
                </div>
            </GuestLayout>
        </>
    );
}
