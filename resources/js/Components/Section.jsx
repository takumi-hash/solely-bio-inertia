const Section = (props) => {
    return (
        <div className={`py-8 px-4 ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    );
};

export default Section;