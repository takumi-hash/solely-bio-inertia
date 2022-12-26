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

    const { handleSubmit, control } = useForm();
    const { fields, append, remove } = useFieldArray({ control, name: 'todo' });
    const handleClick = (data) => {
        console.log(data);
    };

    const { data, setData, patch, errors, processing, recentlySuccessful } = useInertiaForm({
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
                {console.log(links)}
                <h2 className="text-lg font-medium text-gray-900">Links</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your links.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                {links.map((link, index) => {
                    return (
                        // TODO: dynamically populate forms
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
                                handleChange={(e) => setData('data.links[' + `${index}` + '].url', e.target.value)}
                            />
                        </div>
                    );
                })}
                {/* test begins here */}
                <SecondaryButton processing={processing} onClick={() => append({ task: '' })}>Append</SecondaryButton>
                <form onSubmit={handleSubmit(handleClick)}>
                    {fields.map((field, index) => {
                        return (
                            <div key={field.id}>
                                <Controller
                                    name={`todo.${index}.task`}
                                    control={control}
                                    render={({ field }) => (
                                        <TextInput
                                            id={'links[' + `${index}` + '].url'}
                                            className="mt-1 block w-[50%]"
                                            value={field.name}
                                            handleChange={(e) => setData('data.links[' + `${index}` + '].url', e.target.value)}
                                        />
                                    )}
                                />
                                <SecondaryButton onClick={() => remove(index)}>Remove</SecondaryButton>
                            </div>
                        );
                    })}
                    <PrimaryButton type='submit'>Submit</PrimaryButton>
                </form>
                {/* ends here */}
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
