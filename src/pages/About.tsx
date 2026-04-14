import { useState } from "react";

const About = () => {
  const [clickCount, setClickCount] = useState(0);

  const milestones = [
    { year: "2024", event: "Two friends realize warm drinks are a crime against humanity", emoji: "💡" },
    { year: "2024", event: "First prototype made from a cardboard box and dreams", emoji: "📦" },
    { year: "2025", event: "Actual engineers join (thank goodness)", emoji: "🔧" },
    { year: "2025", event: "Launch day! Three coolers sold (two to our moms)", emoji: "🚀" },
    { year: "2026", event: "World domination... in progress", emoji: "🌍" },
  ];

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient-ice">Coolest</span> Company Ever
          </h1>
          <p className="text-lg text-muted-foreground">A totally serious and professional origin story</p>
        </div>

        <div className="prose-like space-y-6 text-muted-foreground leading-relaxed mb-16">
          <p>
            It all started when our founder, Chad McFreeze (not his real name, but it should be), opened a warm soda at a beach party. 
            The disappointment was so profound that he vowed to dedicate his life to <strong className="text-foreground">keeping drinks cold</strong>.
          </p>
          <p>
            After months of extensive research (Googling "how to make things cold"), FrostBox was born. 
            Our mission? To make sure no drink ever suffers the indignity of being lukewarm again. 🧊
          </p>
          <p>
            Today, we're a team of passionate cold-enthusiasts who believe that everyone deserves ice-cold beverages, 
            whether you're at a tailgate, a beach, or hiding from responsibilities in your backyard.
          </p>
        </div>

        <h2 className="font-display text-2xl font-bold text-center mb-8">Our "Journey" 🗺️</h2>
        <div className="space-y-4 mb-16">
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-card border border-border hover:shadow-ice transition-all duration-300 group">
              <span className="text-3xl group-hover:scale-125 transition-transform">{m.emoji}</span>
              <div>
                <span className="font-display font-bold text-primary text-sm">{m.year}</span>
                <p className="text-sm text-muted-foreground">{m.event}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <h3 className="font-display text-xl font-bold mb-2">Our Core Values</h3>
          <p className="text-muted-foreground mb-4">Tap our mascot to hear wisdom</p>
          <button onClick={() => setClickCount(c => c + 1)} className="text-6xl hover:scale-110 transition-transform cursor-pointer">
            🐧
          </button>
          {clickCount > 0 && (
            <p className="mt-4 font-display text-primary animate-bounce-in">
              {clickCount === 1 && "\"Stay frosty, friend.\""}
              {clickCount === 2 && "\"Be like ice: cool under pressure.\""}
              {clickCount === 3 && "\"Life's too short for warm drinks.\""}
              {clickCount === 4 && "\"Okay you can stop clicking me now.\""}
              {clickCount >= 5 && "\"SERIOUSLY. I'm just a penguin emoji. 😤\""}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
