const Section = (props) => {
    return (
        <div className={`py-8 px-4 ${props.color ? props.color : ""}`}>
            {props.children}
        </div>
    );
};

export default Section;