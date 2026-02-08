import React from 'react';
import { Plus } from 'lucide-react';
import DOMPurify from 'dompurify';

const ProductCard = ({ product }) => {
    const title = product.title || "Untitled Product";
    const image = product.image || "https://placehold.co/300x300?text=No+Image";
    const originalPrice = product.price || 0;
    const finalPrice = product.price_after_discount || product.price;
    const hasDiscount = product.price_after_discount && product.price_after_discount < product.price;

    const safeTitle = DOMPurify.sanitize(title);

    return (
        <div className="group w-full bg-white rounded-[20px] overflow-hidden font-saira shadow-sm hover:shadow-md transition-shadow duration-300 p-4 pb-6">
            <div className="relative h-[250px] w-full rounded-[16px] overflow-hidden flex items-center justify-center mb-4">
                <img
                    src={image}
                    alt={safeTitle}
                    className="w-auto h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105 p-4"
                />

                <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md text-dark hover:bg-primary hover:text-white transition-colors">
                    <Plus size={20} strokeWidth={2.5} />
                </button>
            </div>

            <div className="flex flex-col gap-1">
                <h3
                    className="text-lg font-bold text-dark truncate"
                    dangerouslySetInnerHTML={{ __html: safeTitle }}
                />
                <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-dark">${finalPrice.toFixed(2)}</span>
                    {hasDiscount && (
                        <span className="text-sm text-[#B0B0B0] line-through decoration-2">${originalPrice.toFixed(2)}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;