const Features = () => {
    return (
        <section className="pt-40 pb-30 bg-[#F9F9F7] font-saira h-screen">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className=" ml-20 w-138.5 h-110.75 flex justify-center items-center">
                    <img src="/images/features.jpg" className="w-full h-full object-cover rounded-lg flex" alt="Feature 2" />
                </div>

                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-dark leading-tight">
                        We Create your home <br /> more aesthetic
                    </h2>
                    <p className="text-gray-500">
                        Furniture power is a software as services for multiperpose business management system.
                    </p>

                    <div className="space-y-6">
                        <FeatureItem title="Valuation Services" desc="Sometimes features require a short description." />
                        <FeatureItem title="Development of Furniture Models" desc="Sometimes features require a short description." />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ title, desc }) => (
    <div className="flex gap-4">
        <div className="bg-dark text-white p-1 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-1">
        </div>
        <div>
            <h4 className="font-bold text-lg text-dark">{title}</h4>
            <p className="text-sm text-gray-500">{desc}</p>
        </div>
    </div>
);

export default Features;