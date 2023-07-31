
const SectionTitle = ({ heading, subHeading }) => {

    return (
        <div className="text-center w-1/4 mx-auto my-8">
            <h1 className="text-orange-400 ">---{heading}---</h1>
            <p className="text-4xl uppercase border-y-4">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;