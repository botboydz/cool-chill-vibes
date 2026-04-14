import { Link } from "react-router-dom";
import { ArrowRight, Snowflake, Thermometer, Shield, Clock, Star } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useRef, useState } from "react";

const IceCube = ({ delay, className }: { delay: number; className?: string }) => (
  <div className={`absolute text-4xl animate-float ${className}`} style={{ animationDelay: `${delay}s` }}>🧊</div>
);

const Home = () => {
  const [temperature, setTemperature] = useState(72);
  const [easterEggFound, setEasterEggFound] = useState(false);
  const featuredProducts = products.slice(0, 3);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setTemperature(Math.round(72 - scrollPercent * 72));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = sectionRefs.current.indexOf(e.target as HTMLDivElement);
          if (idx !== -1) setVisibleSections(prev => new Set(prev).add(idx));
        }
      }),
      { threshold: 0.15 }
    );
    sectionRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const setRef = (idx: number) => (el: HTMLDivElement | null) => { sectionRefs.current[idx] = el; };

  const features = [
    { icon: Thermometer, title: "Sub-Zero Powers", desc: "Ice stays frozen longer than your New Year's resolutions", emoji: "🥶" },
    { icon: Shield, title: "Indestructible", desc: "Dropped it off a cliff once. The cliff broke.", emoji: "💪" },
    { icon: Clock, title: "72-Hour Cold", desc: "Your ice will outlast most Netflix binges", emoji: "⏰" },
    { icon: Star, title: "5-Star Chill", desc: "Rated #1 by drinks everywhere", emoji: "⭐" },
  ];

  const testimonials = [
    { name: "Jake B.", text: "I put my soda in this cooler on Monday. It's Thursday and it's still cold. My fridge is jealous.", avatar: "🧔" },
    { name: "Sarah K.", text: "My FrostBox is the only thing that stays cool under pressure. Unlike me at job interviews.", avatar: "👩" },
    { name: "Mike T.", text: "Bought one for camping. Now my tent is warmer than my cooler. 10/10.", avatar: "🧑‍🦲" },
  ];

  return (
    <div className="pt-16">
      {/* Temperature Meter */}
      <div className="fixed bottom-6 right-6 z-40 bg-card/90 backdrop-blur-sm rounded-2xl p-3 shadow-card border border-border">
        <div className="flex items-center gap-2">
          <Thermometer className={`w-5 h-5 ${temperature < 30 ? "text-primary" : "text-destructive"}`} />
          <span className="font-display font-bold text-sm">{temperature}°F</span>
        </div>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          {temperature > 50 ? "Keep scrolling!" : temperature > 20 ? "Getting chilly..." : "❄️ FROZEN!"}
        </p>
      </div>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hero">
        <div className="absolute inset-0 opacity-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <IceCube delay={0} className="top-[15%] left-[10%]" />
        <IceCube delay={1} className="top-[25%] right-[15%]" />
        <IceCube delay={2} className="bottom-[20%] left-[20%]" />
        <IceCube delay={0.5} className="top-[60%] right-[10%]" />
        <IceCube delay={1.5} className="top-[40%] left-[5%] hidden md:block" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-bounce-in">
            <Snowflake className="w-4 h-4" /> The Coolest Store on the Internet
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Stay Cooler Than Your{" "}
            <span className="text-gradient-ice">WiFi Password</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Premium ice coolers that keep your drinks colder than your ex's goodbye text. Your beverages deserve better. 🧊
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-ice text-primary-foreground font-display font-bold text-lg hover:opacity-90 transition-all shadow-ice hover:shadow-glow"
            >
              Chill Out Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card border-2 border-primary/20 font-display font-bold text-lg hover:border-primary/40 transition-all"
            >
              Freeze My Drinks ❄️
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={setRef(0)} className={`py-20 px-4 transition-all duration-700 ${visibleSections.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Superpower Features</h2>
          <p className="text-center text-muted-foreground mb-12">Not all heroes wear capes. Some hold ice.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:shadow-ice hover:border-primary/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{f.emoji}</div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section ref={setRef(1)} className={`py-20 px-4 bg-secondary/30 transition-all duration-700 ${visibleSections.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Fan Favorites</h2>
          <p className="text-center text-muted-foreground mb-12">The ones your drinks are begging for</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/shop" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-display font-bold hover:bg-primary hover:text-primary-foreground transition-all">
              View All Coolers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={setRef(2)} className={`py-20 px-4 transition-all duration-700 ${visibleSections.has(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">What Cool People Say</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from real chill humans</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-ice transition-all duration-300">
                <div className="text-4xl mb-3">{t.avatar}</div>
                <p className="text-muted-foreground italic mb-4">"{t.text}"</p>
                <p className="font-display font-bold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Easter Egg */}
      <section className="py-12 px-4 text-center">
        <button
          onClick={() => setEasterEggFound(true)}
          className="text-muted-foreground/30 hover:text-primary transition-colors text-xs cursor-pointer"
        >
          🐧
        </button>
        {easterEggFound && (
          <div className="mt-4 p-4 rounded-2xl bg-primary/10 inline-block animate-bounce-in">
            <p className="font-display font-bold text-primary">🎉 You found the secret penguin!</p>
            <p className="text-sm text-muted-foreground mt-1">Fun fact: Penguins don't actually need coolers. They ARE coolers.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
