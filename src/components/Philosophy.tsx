import { Card } from "@/components/ui/card";
import { Zap, Brain, Rocket } from "lucide-react";

const Philosophy = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
            The Hard Truth I Discovered
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Code leads to code. Every solution creates three new problems. 
            I learned this the expensive way—twice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
          <div>
            <h3 className="text-3xl font-playfair font-bold mb-6">What I Learned the Hard Way</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong>Company #1:</strong> I delegated every tech decision. We built a Frankenstein stack 
                that worked but couldn't scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Company #2:</strong> I went custom everything. More control meant more complexity. 
                It consumed all our resources.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>The framework:</strong> Born from these mistakes. Now AI helps founders avoid them.
              </p>
            </div>
          </div>

          <Card className="p-8 bg-background border border-border shadow-soft">
            <h4 className="text-xl font-playfair font-bold mb-4 text-primary">
              What I Learned
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Right tool beats best tool</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Simple beats custom</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Current scale beats future scale</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Complexity is debt</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;