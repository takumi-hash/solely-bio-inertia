import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';

import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function LinkForm({ link, className }) {
    const { data, setData, put, errors, processing, recentlySuccessful } = useForm({
        title: link.title,
        url: link.url,
    });
    const [loading, setLoading] = useState(false);
    // const submit = (e) => {
    //     e.preventDefault();
    //     patch(route('/links/' + link.id));
    // };
    // Methods
    const onFinish = () => setLoading(false);
    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const url = route('links.updateById', link.id);
        put(url, data, { onFinish });
    }


    return (

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            < div >
                <InputLabel for="title" value="Title" />

                <TextInput
                    id="title"
                    className="mt-1 block w-full"
                    value={data.title}
                    handleChange={(e) => setData('title', e.target.value)}
                    required
                />

                <InputError className="mt-2" message={errors.title} />
            </div >


            <div>
                <InputLabel for="url" value="URL" />

                <TextInput
                    id="url"
                    className="mt-1 block w-full"
                    value={data.url}
                    handleChange={(e) => setData('url', e.target.value)}
                    required
                />

                <InputError className="mt-2" message={errors.url} />
            </div>


            <div className="flex items-center gap-4">
                <PrimaryButton type="submit" processing={processing}>Save</PrimaryButton>
                <SecondaryButton processing={processing}>Delete</SecondaryButton>

                <Transition
                    show={recentlySuccessful}
                    enterFrom="opacity-0"
                    leaveTo="opacity-0"
                    className="transition ease-in-out"
                >
                    <p className="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form >
    );
}
