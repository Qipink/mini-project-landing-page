import React, { useState } from 'react';
import ProductCard from '../shared/ProductCard';
import { useProducts } from '../../hooks/useFurniture';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProductList = () => {
    const [page, setPage] = useState(1);
    const { products, loading } = useProducts(page, 8);

    return (
        <section className="py-20 px-6 container mx-auto font-saira bg-[#F8F8F8]">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-[40px] font-bold text-dark mb-4">All Product</h2>
                <p className="text-gray-500 leading-relaxed">
                    The products we provide only for you as our service are selected from the best products.
                </p>
            </div>

            {loading ? (
                // Loading Spinner
                <div className="flex justify-center h-80 items-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-12">
                        {products.map((product) => (
                            <div key={product.id} className="w-full">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="p-3 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition disabled:opacity-50"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div className="flex gap-3">
                            {[1, 2, 3].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setPage(num)}
                                    className={`w-3 h-3 rounded-full ${page === num ? 'bg-primary' : 'bg-[#D9D9D9]'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setPage(p => p + 1)}
                            className="p-3 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition"
                        >
                            <ArrowRight size={20} />
                        </button>

                    </div>
                </>
            )}
        </section>
    );
};

export default ProductList;