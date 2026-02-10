import React from 'react';

const Benefits = () => {
    return (
        <section className="py-20 px-6 container mx-auto font-saira">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* --- BAGIAN KIRI: Teks --- */}
                <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-[42px] font-bold text-dark leading-[1.2]">
                        The Best Furniture Manufacturer Of Your Choice
                    </h2>
                    <p className="text-[#9F9F9F] text-base md:text-lg leading-relaxed text-justify md:text-left">
                        Furnitre power is a software as services for multiperpose business management system, especially for them who are running two or more business exploree the future Furnitre power is a software as services \
                    </p>
                </div>

                {/* --- BAGIAN KANAN: Gambar --- */}
                <div className="lg:w-1/2 w-full">
                    <img
                        src="/images/best-furniture.png"
                        alt="Modern Kitchen Interior"
                        className="w-full h-auto rounded-sm object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default Benefits;