import React from 'react';
import ProductCard from '../shared/ProductCard';
import { useProducts } from '../../hooks/useFurniture';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProductList = () => {
    const { products, loading } = useProducts(1, 8);

    return (
        <section className="py-20 px-6 container mx-auto font-saira bg-[#F8F8F8]">

            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-[40px] font-bold text-dark mb-4">All Product</h2>
                <p className="text-gray-500 leading-relaxed">
                    The products we provide only for you as our service are selected from the best products with number 1 quality in the world
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-80">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-12">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div key={product.id} className="w-full">
                                    <ProductCard product={product} />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500 py-10">
                                No products found.
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center items-center gap-6">
                        <button className="p-3 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition text-dark">
                            <ArrowLeft size={20} />
                        </button>

                        <div className="flex gap-3">
                            <span className="w-3 h-3 rounded-full bg-primary"></span>
                            <span className="w-3 h-3 rounded-full bg-[#D9D9D9]"></span>
                            <span className="w-3 h-3 rounded-full bg-[#D9D9D9]"></span>
                            <span className="w-3 h-3 rounded-full bg-[#D9D9D9]"></span>
                            <span className="w-3 h-3 rounded-full bg-[#D9D9D9]"></span>
                        </div>

                        <button className="p-3 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition text-dark">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

export default ProductList;