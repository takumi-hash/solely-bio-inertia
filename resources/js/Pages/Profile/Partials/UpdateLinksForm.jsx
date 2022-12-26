import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm as useInertiaForm, usePage } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';

import { set } from "lodash/fp";
// import { useForm as useInertiaForm } from "@inertiajs/inertia-react";

export function useForm(...args) {
    const form = useInertiaForm(...args);

    function setData(key, value) {
        form.setData(
            function (data) {
                return set(key, value, data);
            }
        );
    }

    return { ...form, setData }
}

export default function UpdateLinksForm({ className }) {
    const links = usePage().props.links;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        links: links,

        // name: links.name,
        // handlename: user.handlename,
        // email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('link.update'));
    };

    return (
        <section className={className}>
            <header>
                {console.log(data)}
                <h2 className="text-lg font-medium text-gray-900">My Links</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your links.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                {links.map((link, index) => {
                    return (
                        <div key={link.id}>
                            <TextInput
                                id={'links[' + `${index}` + '].title'}
                                className="mt-1 block w-[50%]"
                                value={links[`${index}`].title}
                                handleChange={(e) => setData('links[' + `${index}` + '].title', e.target.value)}
                            />
                            <TextInput
                                id={'links[' + `${index}` + '].url'}
                                className="mt-1 block w-[50%]"
                                value={link.url}
                                handleChange={(e) => setData('links[' + `${index}` + '].url', e.target.value)}
                            />
                        </div>
                    );
                })}
                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
