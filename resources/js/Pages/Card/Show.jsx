import GuestLayout from '@/Layouts/GuestLayout';
import Card from '@/Components/Card';
import { Head } from '@inertiajs/inertia-react';

export default function ShowCard({ user }) {

    const links =
        [
            {
                title: "Github",
                url: "https://github.com/takumi-hash"
            },
            {
                title: "Podcast",
                url: "https://anchor.fm/futakobookcast"
            }
        ]
        ;

    return (
        <>
            <GuestLayout>
                <Head title="Show Profile" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
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
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
