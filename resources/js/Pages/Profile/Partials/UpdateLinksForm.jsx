import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';

import { Link, useForm as useInertiaForm, usePage } from '@inertiajs/inertia-react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Transition } from '@headlessui/react';

export default function UpdateLinksForm({ className }) {
    const links = usePage().props.links;
    const { data, setData, patch, errors, processing, recentlySuccessful } = useInertiaForm({
        links: links
        // name: links.name,
        // handlename: user.handlename,
        // email: user.email,
    });

    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            links: links
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'links'
    });

    const submit = (data) => {
        patch(route('links.update'));
    };

    return (
        <section className={className}>
            <header>
                {console.log(links)}
                <h2 className="text-lg font-medium text-gray-900">Links</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your links.
                </p>
            </header>

            <form onSubmit={handleSubmit(submit)} className="mt-6 space-y-6">
                <SecondaryButton processing={processing} onClick={() => append({ link: '' })}>Append</SecondaryButton>
                {fields.map((field, index) => {
                    return (
                        <div key={field.id}>
                            <input
                                name={`links[${index}].title`}
                                defaultValue={`${field.title}`}
                                placeholder="Title"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            />
                            <input
                                name={`links[${index}].url`}
                                defaultValue={`${field.url}`}
                                placeholder="URL"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            />
                            {/* <Controller
                                         name={`links.${index}.item`}
                                         control={control}
                                         render={({ field }) => (
                                             <TextInput
                                                 id={'links[' + `${index}` + '].title'}
                                                 className="mt-1 block w-[50%]"
                                                 value={field.title}
                                                 handleChange={(e) => setData('field.title', e.target.value)}
                                             />
                                         )}
                                         />*/}
                            <SecondaryButton onClick={() => remove(index)}>Remove</SecondaryButton>
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
