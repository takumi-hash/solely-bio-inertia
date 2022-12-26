import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Profile/Partials/DeleteUserForm';
import UpdateLinksForm from './Profile/Partials/UpdateLinksForm';
import UpdateProfileInformationForm from './Profile/Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard({ auth, mustVerifyEmail, status, links }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Welcome back, {auth.user.name}.</div>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateLinksForm
                            className="max-w-xl"
                        />
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
