import { Card } from "@/components/ui/card";
import { Zap, Brain, Rocket } from "lucide-react";

const Philosophy = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
            Code Leads to Code
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Every solution creates complexity. Every tool demands maintenance. 
            Our AI assistant helps you start simple and stay nimble with intelligent recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">The Problem</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Non-technical founders delegate technology decisions, losing control of their most 
                critical business infrastructure. They end up with over-engineered solutions that 
                drain resources and slow growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Technical founders often fall into the opposite trap—building custom solutions 
                when simple alternatives exist, creating unnecessary complexity.
              </p>
            </div>
          </div>

          <Card className="p-8 bg-card shadow-medium">
            <h4 className="text-xl font-bold mb-4 text-primary">
              Common Mistakes
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Choosing tools based on features, not fit</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Building when you should buy</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Optimizing for scale you don't have</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Delegating without understanding</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold mb-3">Start Simple</h4>
            <p className="text-muted-foreground text-sm">
              Begin with the minimum viable tech stack. Add complexity only when absolutely necessary.
            </p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold mb-3">AI + SaaS Revolution</h4>
            <p className="text-muted-foreground text-sm">
              AI eliminates 20 years of SaaS complexity. Do more with less code, less cost, less maintenance.
            </p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold mb-3">Stay Nimble</h4>
            <p className="text-muted-foreground text-sm">
              Force simple solutions. Question every dependency. Keep your business agile and adaptable.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Card className="p-8 max-w-4xl mx-auto bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-primary">
              The Low Code Cookbook Tool
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This isn't just a guide—it's an intelligent tool powered by AI that helps you evaluate your entire tech stack. 
              Whether you're technical or not, our digital assistant provides personalized recommendations, 
              scores your current solutions, and guides you toward simpler, more effective technology decisions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;