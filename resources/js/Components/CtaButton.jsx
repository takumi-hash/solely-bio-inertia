import { Link } from "@inertiajs/inertia-react";

const CtaButton = (props) => {
    return (
        <button className="solely-btn solely-gradient font-bold text-xl px-8 my-4">
            <Link href={props.linkto}>{props.text}</Link>
        </button>
    );
};

export default CtaButton;