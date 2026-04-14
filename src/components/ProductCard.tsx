import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Snowflake } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, justAdded } = useCart();
  const [hovered, setHovered] = useState(false);
  const isFreezing = justAdded === product.id;

  return (
    <div
      className="group rounded-2xl bg-card shadow-card hover:shadow-ice transition-all duration-300 overflow-hidden border border-border hover:border-primary/30"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={640}
          height={640}
          className={`w-full aspect-square object-cover transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute top-3 right-3 flex gap-1">
          {Array.from({ length: product.coolnessLevel }).map((_, i) => (
            <Snowflake key={i} className="w-4 h-4 text-primary drop-shadow-md" />
          ))}
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium capitalize">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-lg font-bold hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-display text-xl font-bold text-primary">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full gradient-ice text-primary-foreground font-medium text-sm hover:opacity-90 transition-all ${isFreezing ? "animate-freeze-pulse" : ""}`}
          >
            <ShoppingCart className="w-4 h-4" />
            {isFreezing ? "Frozen! ❄️" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
