import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';

// import { Link, useForm as useInertiaForm, usePage } from '@inertiajs/inertia-react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import axios from 'axios';
import { Transition } from '@headlessui/react';

export default function UpdateLinksForm({ links, className }) {
    // const links = usePage().props.links;
    // const { data, setData, patch, errors, processing, recentlySuccessful } = useInertiaForm({
    //     links: links
    //     // name: links.name,
    //     // handlename: user.handlename,
    //     // email: user.email,
    // });

    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            links: links
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'links'
    });
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

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
                {fields.map((field, index) => {
                    return (
                        <div key={field.id}>
                            <input
                                id={`links[${index}].title`}
                                {...register(`links[${index}].title`)}
                                defaultValue={`${field.title ? field.title : ""}`}
                                placeholder="Title"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            />
                            <input
                                name={`links[${index}].url`}
                                defaultValue={`${field.url ? field.url : "https://"}`}
                                placeholder="URL"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            />
                            <SecondaryButton onClick={() => remove(index)}>Remove</SecondaryButton>
                        </div>
                    );
                })}
                <SecondaryButton onClick={() => append({ link: '' })}>Append</SecondaryButton>
                <div className="flex items-center gap-4">
                    <PrimaryButton>Save</PrimaryButton>
                </div>
            </form>
        </section >
    );
}
