
const Cover = ({ img, title }) => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: `url('${img}')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 uppercase text-2xl mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;