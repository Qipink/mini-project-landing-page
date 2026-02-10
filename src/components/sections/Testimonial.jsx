import React, { useState } from 'react';
import { useTestimonials } from '../../hooks/useFurniture';
import DOMPurify from 'dompurify';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonial = () => {
    const [page, setPage] = useState(1);
    const { data, loading } = useTestimonials(page, 1);

    const handleNext = () => setPage((prev) => prev + 1);
    const handlePrev = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <section className="py-20 bg-[#F9F9F7] font-saira overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <div className="lg:w-1/2 w-full space-y-8 z-10 flex flex-col justify-center min-h-75">

                        <h2 className="text-3xl md:text-[42px] font-bold text-dark leading-tight text-center lg:text-left">
                            What People Are Saying About Us
                        </h2>

                        {!loading && data && (
                            <div className="space-y-8 animate-fade-in">
                                <div className="flex items-center gap-5 justify-center lg:justify-start">
                                    <img
                                        src={data.image || "https://placehold.co/100"}
                                        alt={data.name}
                                        className="w-16 h-16 md:w-17.5 md:h-17.5 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <h4 className="text-lg font-bold text-dark">
                                            {DOMPurify.sanitize(data.name)}
                                        </h4>
                                        <p className="text-sm text-[#9F9F9F]">
                                            {DOMPurify.sanitize(data.title)}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[#616161] text-base md:text-lg leading-relaxed text-center lg:text-left">
                                    “{DOMPurify.sanitize(data.message)}”
                                </p>
                            </div>
                        )}

                        <div className="flex gap-4 justify-center lg:justify-start pt-4">
                            <button
                                onClick={handlePrev}
                                disabled={page === 1 || loading}
                                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark shadow-lg hover:bg-opacity-90 hover:bg-primary hover:text-white transition-all"
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={loading}
                                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark shadow-lg hover:bg-opacity-90 hover:bg-primary hover:text-white transition-all"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full h-100 md:h-125">
                        <img
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
                            alt="Interior Living Room"
                            className="w-full h-full object-cover rounded-[10px] shadow-sm"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;