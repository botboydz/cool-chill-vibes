import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, ArrowLeft, Snowflake } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart, justAdded } = useCart();

  if (!product) {
    return (
      <div className="pt-24 text-center min-h-screen flex items-center justify-center">
        <div>
          <p className="text-6xl mb-4">🥶</p>
          <h1 className="font-display text-2xl font-bold mb-2">Product not found!</h1>
          <p className="text-muted-foreground mb-4">This cooler must've been TOO cool to exist</p>
          <Link to="/shop" className="text-primary hover:underline">Back to Shop →</Link>
        </div>
      </div>
    );
  }

  const isFreezing = justAdded === product.id;
  const related = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="container mx-auto">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to all coolers
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-2xl overflow-hidden bg-secondary/30 border border-border">
            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize">{product.category}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: product.coolnessLevel }).map((_, i) => (
                  <Snowflake key={i} className="w-4 h-4 text-primary" />
                ))}
              </div>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-lg text-primary font-display font-bold mb-4">{product.tagline}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-display font-bold mb-3">What Makes It Cool:</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Snowflake className="w-3 h-3 text-primary flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-display text-4xl font-bold text-primary">${product.price}</span>
              <button
                onClick={() => addToCart(product)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full gradient-ice text-primary-foreground font-display font-bold text-lg hover:opacity-90 transition-all ${isFreezing ? "animate-freeze-pulse" : ""}`}
              >
                <ShoppingCart className="w-5 h-5" />
                {isFreezing ? "Frozen! ❄️" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <h2 className="font-display text-2xl font-bold mb-6">You Might Also Chill With</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
