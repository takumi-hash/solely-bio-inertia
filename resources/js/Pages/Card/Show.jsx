import GuestLayout from '@/Layouts/GuestLayout';
import Card from '@/Components/Card';
import { Head } from '@inertiajs/inertia-react';

export default function ShowCard({ user, links }) {
    return (
        <>
            <Head>
                <title>The Rock (1996)</title>
                <meta property="og:title" content={user.name} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`"https://www.solely.bio/u/"+ ${user.handlename}`} />
                <meta property="og:image" content={`"https://www.solely.bio/ogp_images/"+${user.handlename}+"ogp.jpg"`} />
            </Head>
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
