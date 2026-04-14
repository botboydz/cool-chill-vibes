import { useState } from "react";
import { Send, Snowflake } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-12 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center animate-bounce-in">
          <p className="text-6xl mb-4">📬</p>
          <h1 className="font-display text-3xl font-bold mb-2">Message Received!</h1>
          <p className="text-muted-foreground">We'll get back to you faster than ice melts in July. (Okay, maybe a bit slower.)</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-lg">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Drop Us a <span className="text-gradient-ice">Line</span>
          </h1>
          <p className="text-muted-foreground">Questions, compliments, ice puns — we accept them all ❄️</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl bg-card border border-border shadow-card">
          <div>
            <label className="font-display font-medium text-sm mb-1 block">Name</label>
            <input required type="text" placeholder="Your coolest name" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
          </div>
          <div>
            <label className="font-display font-medium text-sm mb-1 block">Email</label>
            <input required type="email" placeholder="you@icecold.com" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
          </div>
          <div>
            <label className="font-display font-medium text-sm mb-1 block">Message</label>
            <textarea required rows={4} placeholder="Tell us something cool..." className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none" />
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl gradient-ice text-primary-foreground font-display font-bold hover:opacity-90 transition-all">
            <Send className="w-4 h-4" /> Send It ❄️
          </button>
          <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Snowflake className="w-3 h-3" /> Powered by frozen carrier pigeons
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
