import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Refresh
        </h1>
        <p className="text-xl text-gray-600">
          Discover premium personal care products for your daily routine
        </p>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
