import { Link, Head } from '@inertiajs/inertia-react';
import Section from '../Components/Section'
import CtaButton from '@/Components/CtaButton';
import Card from '@/Components/Card';
import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Welcome({ auth }) {

    const demoUser = {
        name: "Jane Appleseed",
        image: "../../images/placeholder.webp",
        intro: "A weekend developer.",
    };
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
                <Head title="Welcome" />
                <Section className="text-center">
                    <h1 className="text-4xl font-bold my-4">Solely</h1>
                    <p className="text-sm mb-4">
                        An online biography for a more civilized age.
                    </p>
                    <p className="text-base font-bold">
                        Create your complete biography <br />
                        and share it anywhere.
                    </p>
                </Section>
                <Section className="text-center">
                    <p className="text-sm">solely.bio/u/your-name</p>
                    <CtaButton linkto="/register" text="Create your bio"></CtaButton>
                    <p className="text-slate-500">You can create one in a minute :)</p>
                </Section>
                <Section>
                    <Card user={demoUser} links={links}></Card>
                </Section>
                <Section>
                    <h2 className="text-2xl mb-4">What is Solely for?</h2>
                    <p className="text-left mb-4">
                        This is a simple online profile card service.
                    </p>
                    <p className="text-left mb-4">
                        Once you created your profile, you can share it with a business
                        partner, followers on SNS, friends, and your family members.
                    </p>
                    <p className="text-left mb-4">
                        You don’t have to exchange your paper card anymore.
                    </p>
                </Section>
                <Section>
                    <h2 className="text-2xl mb-4">Example Usage</h2>
                    <p className="text-left mb-4">
                        Use it as a business card. You don’t have to waste a bunch of paper
                        anymore every time your job title changes.
                    </p>
                    <p className="text-left mb-4">
                        Use it as a social networking accounts list so your audiences can
                        follow you on every platform.
                    </p>
                    <p className="text-left mb-4">
                        Use it as a portfolio site. Your works and articles can be gathered
                        here, you can engage with your audiences even more.
                    </p>
                </Section>
                <Section>
                    <h2 className="text-2xl mb-4">Who can see my profile?</h2>
                    <p className="text-left mb-4">
                        Anyone you share the URL with can see your profile. Basically you
                        want to input the information you want to make visible to public.
                    </p>
                    <p className="text-left mb-4">
                        Don’t worry, however, we prevent Google Search from indexing your
                        information.
                    </p>
                </Section>
            </GuestLayout>
        </>
    );
}
