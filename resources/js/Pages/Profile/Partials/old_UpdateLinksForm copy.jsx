import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';

import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from '@inertiajs/inertia-react';

export default function UpdateLinksForm({ className }) {
    const links = usePage().props.links;
    // const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    //     links: links
    // });
    const onSubmit = (data) => {
        axios.patch(location.origin + '/links', data)
            .then(
                response => alert(JSON.stringify(response.data))
            )
            .catch(error => {
                console.log("ERROR:: ", error.response.data);
            });
        console.log(data);
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Links</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your links.
                </p>
            </header>

            <form onSubmit={onSubmit} className="mt-6 space-y-6">
                {links.map(link => (
                    <tr key={link.id}>
                        <TextInput
                            id="name"
                            className="mt-1 block w-[50]"
                            value={link.title}
                            handleChange={(e) => setData('link.title', e.target.value)}
                        />
                        <TextInput
                            id="name"
                            className="mt-1 block w-[50]"
                            value={link.url}
                            handleChange={(e) => setData('link.url', e.target.value)}
                        />
                        <td className="p-2 border">
                            <Link
                                className="text-white bg-blue-700 rounded-lg text-sm px-4 py-2 mr-2"
                                href={route('links.update', { id: link.id })}>
                                変更
                            </Link>
                            <SecondaryButton className='' onClick={() => onDelete(link.id)}>Edit</SecondaryButton>
                            <SecondaryButton className='bg-red-600 text-white' onClick={() => onDelete(link.id)}>Delete</SecondaryButton>
                        </td>
                    </tr>
                ))}
                <SecondaryButton onClick={() => append({ link: '' })}>Append</SecondaryButton>
                <div className="flex items-center gap-4">
                    <PrimaryButton>Save</PrimaryButton>
                </div>
            </form>
        </section >
    );
}
