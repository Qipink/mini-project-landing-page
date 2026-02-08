import { useHeader, useStats } from '../../hooks/useFurniture.jsx';

const Hero = () => {
    const { data: headerData, loading: headerLoading } = useHeader();
    const { stats } = useStats();

    if (headerLoading) {
        return (
            <section className="h-[850px] w-full bg-gray-200 animate-pulse flex items-center justify-center">
                <span className="sr-only">Loading Header...</span>
            </section>
        );
    }

    if (!headerData) {
        return null;
    }

    return (
        <section
            className="relative w-full h-[850px] bg-cover bg-center font-saira flex items-center justify-center text-center"
            style={{ backgroundImage: `url('${headerData.banner}')` }}
        >
            <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/60" />
            <div className="relative z-10 px-6 max-w-[888px] mx-auto text-white mt-20">
                <h1 className="text-5xl md:text-[64px] font-semibold leading-[120%] capitalize mb-6 drop-shadow-lg">
                    {headerData.title}
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-12 max-w-[627px] mx-auto drop-shadow-md">
                    {headerData.description}
                </p>
                <button className="px-12 py-4 bg-white/20 backdrop-blur-md border border-white/50 rounded-[10px] text-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                    Shop Now
                </button>
            </div>
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] md:w-[1240px] bg-primary rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center text-white shadow-2xl gap-8 md:gap-0">
                <StatItem
                    number={stats ? stats.experience : "..."}
                    label="Year Experience"
                />
                <div className="hidden md:block w-px h-[80px] bg-white/30" />
                <StatItem
                    number={stats ? stats.country : "..."}
                    label="Opened in Country"
                />
                <div className="hidden md:block w-px h-[80px] bg-white/30" />
                <StatItem
                    number={stats ? stats.sold : "..."}
                    label="Furniture Sold"
                />
                <div className="hidden md:block w-px h-[80px] bg-white/30" />
                <StatItem
                    number={stats ? stats.variant : "..."}
                    label="Variant Furniture"
                />
            </div>
        </section>
    );
}

const StatItem = ({ number, label }) => (
    <div className="text-center min-w-[150px]">
        <span className="text-4xl md:text-5xl font-semibold block mb-2">{number}</span>
        <span className="text-lg opacity-80 font-normal">{label}</span>
    </div>
);

export default Hero;