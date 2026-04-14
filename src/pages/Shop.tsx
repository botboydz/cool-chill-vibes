import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = ["all", "compact", "standard", "premium"] as const;

const Shop = () => {
  const [category, setCategory] = useState<string>("all");

  const filtered = category === "all" ? products : products.filter(p => p.category === category);

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The Chill <span className="text-gradient-ice">Collection</span>
          </h1>
          <p className="text-muted-foreground text-lg">Warning: May cause extreme chill 🥶</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-5 py-2 rounded-full font-medium text-sm capitalize transition-all ${
                category === c
                  ? "gradient-ice text-primary-foreground shadow-ice"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {c === "all" ? "All Coolers" : c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🏜️</p>
            <p className="font-display text-xl text-muted-foreground">No coolers here... it's a desert!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
