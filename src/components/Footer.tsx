import { Link } from "react-router-dom";
import { Snowflake } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary/50 border-t border-border mt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary mb-3">
            <Snowflake className="w-5 h-5" /> FrostBox
          </Link>
          <p className="text-sm text-muted-foreground">Keeping things cool since... well, we just started. But we're really good at it. 😎</p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/shop" className="block hover:text-primary transition-colors">Shop</Link>
            <Link to="/about" className="block hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="block hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Fun Facts</h4>
          <p className="text-sm text-muted-foreground">Did you know? Our coolers have been tested in the Sahara Desert. They survived. The tester didn't (just kidding, he was fine 🏜️).</p>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-8 pt-8 border-t border-border">
        © 2026 FrostBox — Cooler than your average cooler company ❄️
      </div>
    </div>
  </footer>
);

export default Footer;
