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
                <div className="min-w-[50%] mx-auto py-12">
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
