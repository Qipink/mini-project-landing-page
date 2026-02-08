import { useCategories } from '../../hooks/useFurniture';
// import { ArrowRight } from 'lucide-react';

const Category = () => {
    const { categories, loading } = useCategories();

    if (loading) return null;

    return (
        <section className="py-20 px-6 font-saira overflow-x-hidden ">

            {/* CONTAINER UTAMA (Membatasi lebar konten text kiri) */}
            <div className="container mx-auto flex flex-col xl:flex-row gap-12 items-center xl:items-start">

                {/* --- BAGIAN KIRI: Text Content (Tetap di dalam Container) --- */}
                <div className="xl:w-1/4 text-center xl:text-left space-y-6 shrink-0">
                    {/* ... (Konten text biarkan sama) ... */}
                    <h2 className="text-4xl md:text-[40px] font-semibold leading-[130%] text-dark">
                        New In <br className="hidden xl:block" /> Store Now
                    </h2>
                    <p className="text-base text-[#23262F] opacity-80 leading-[170%]">
                        Get the latest items immediately with promo prices
                    </p>
                    <a href="#all-products" className="inline-flex items-center gap-2 text-dark font-medium underline underline-offset-4 hover:text-primary transition group">
                        Check All
                    </a>
                </div>
                <div className="w-full xl:w-[calc(100%+50vw)] flex gap-6 overflow-x-auto pb-4 snap-x scrollbar-hide z-50 xl:-mr-[50vw] pr-6">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="group relative h-[380px] min-w-[280px] sm:min-w-[300px] rounded-lg overflow-hidden cursor-pointer shrink-0 snap-center"
                        >
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                            <div className="absolute inset-0 flex items-end justify-center pb-6">
                                <h3 className="text-white text-xl font-medium tracking-wider">{cat.title}</h3>
                            </div>
                        </div>
                    ))}

                    {/* Spacer Kosong di Ujung Kanan (Opsional) */}
                    <div className="min-w-[20px] shrink-0 xl:hidden"></div>
                </div>

            </div>
        </section>
    );
};

export default Category;