import LinkForm from '@/Components/LinkForm';

export default function UpdateLinksForm(props, className) {
    const items = props.links;
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Links</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your links.
                </p>
            </header>
            {items.map((link, index) => {
                return (
                    <LinkForm key={index} link={link}></LinkForm>
                );
            })}
        </section >
    );
}
