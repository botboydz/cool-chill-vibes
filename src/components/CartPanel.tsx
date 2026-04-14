import { X, Plus, Minus, Trash2, Snowflake } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartPanel = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50" onClick={closeCart} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display text-xl font-bold flex items-center gap-2">
            <Snowflake className="w-5 h-5 text-primary" /> Your Chill Cart
          </h2>
          <button onClick={closeCart} className="p-2 hover:bg-secondary rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-4">🧊</p>
              <p className="font-display text-lg text-muted-foreground">Your cart is ice cold empty!</p>
              <p className="text-sm text-muted-foreground mt-1">Time to add some chill</p>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-3 p-3 rounded-lg bg-secondary/50">
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-sm truncate">{product.name}</p>
                  <p className="text-primary font-bold">${product.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1 rounded bg-muted hover:bg-border transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1 rounded bg-muted hover:bg-border transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                    <button onClick={() => removeFromCart(product.id)} className="ml-auto p-1 text-destructive hover:bg-destructive/10 rounded transition-colors">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex justify-between font-display text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full py-3 rounded-lg gradient-ice text-primary-foreground font-display font-bold text-lg hover:opacity-90 transition-opacity">
              Freeze This Order ❄️
            </button>
            <p className="text-center text-xs text-muted-foreground">Warning: May cause extreme chill</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPanel;
