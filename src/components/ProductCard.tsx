'use client';

import { Product } from '@/types';
import Image from 'next/image';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { addToCart } from '@/store/slices/cartSlice';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <Image
          src={product.img}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
