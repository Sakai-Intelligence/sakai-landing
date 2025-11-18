import { Sword, Sparkles, TrendingUp } from "lucide-react";
import sakaiSpirit from "@/assets/sakai-spirit.jpg";

const Story = () => {
  return (
    <section id="story" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            The Spirit of <span className="text-accent">Sakai</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            In Sakai, Japan, legendary sword craftsmen faced a turning point. When the age of the samurai ended,
            they didn't abandon their craft—they reinvented it, becoming the world's most renowned kitchen knife makers.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img
                src={sakaiSpirit}
                alt="Master craftsman forging with precision"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forge/80 to-transparent" />
            </div>

            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Sword className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Mastery</h3>
                  <p className="text-muted-foreground">
                    Decades of perfecting a single craft, understanding every nuance and detail of our work.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Reinvention</h3>
                  <p className="text-muted-foreground">
                    Adapting timeless expertise to modern challenges, transforming traditional excellence into innovation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Excellence</h3>
                  <p className="text-muted-foreground">
                    Every solution precision-crafted, every integration sharp and purposeful, every result exceptional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 text-center">
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
