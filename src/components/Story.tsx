import { Sword, Sparkles, TrendingUp } from "lucide-react";

const Story = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            The Spirit of <span className="text-accent">Sakai</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            In Sakai, Japan, legendary sword craftsmen faced a turning point. When the age of the samurai ended, 
            they didn't abandon their craft—they reinvented it, becoming the world's most renowned kitchen knife makers.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sword className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Mastery</h3>
              <p className="text-muted-foreground">
                Decades of perfecting a single craft, understanding every nuance and detail of our work.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Reinvention</h3>
              <p className="text-muted-foreground">
                Adapting timeless expertise to modern challenges, transforming traditional excellence into innovation.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                Every solution precision-crafted, every integration sharp and purposeful, every result exceptional.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 text-center">
            <p className="text-lg text-foreground italic">
              "We bring that same spirit to your business—combining deep technical mastery with the courage to reinvent, 
              creating AI-powered solutions that cut through complexity and deliver transformative results."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
