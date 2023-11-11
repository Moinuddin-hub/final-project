
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto md:w-3/12">
            <p className="text-yellow-600 text-center my-4">{subHeading}</p>
            <h3 className="text-4xl uppercase border-y-4 text-center mb-8">{heading}</h3>
        </div>
    );
};

export default SectionTitle;