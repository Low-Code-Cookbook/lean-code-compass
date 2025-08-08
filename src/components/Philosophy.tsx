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
            "Code leads to code." Every solution I added created three new problems. 
            Every tool demanded maintenance. I was building complexity, not solutions. 
            That's when I realized the power wasn't in the perfect tech stack—it was in starting simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
          <div>
            <h3 className="text-3xl font-playfair font-bold mb-6">What I Learned the Hard Way</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                In my first company, I delegated every tech decision to developers. We ended up with 
                a Frankenstein stack that worked but was impossible to maintain or scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In my second company, I went the opposite direction—custom everything. I thought building 
                from scratch meant more control. Instead, I created a complexity monster that consumed 
                all our resources.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's when I developed this framework. Now, with AI as a guide, founders can make 
                these decisions confidently without repeating my mistakes.
              </p>
            </div>
          </div>

          <Card className="p-8 bg-background border border-border shadow-soft">
            <h4 className="text-xl font-playfair font-bold mb-4 text-primary">
              The Mistakes That Taught Me
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Choosing the "best" tool instead of the right tool</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Building custom when simple solutions existed</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Planning for scale I didn't have (and might never need)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Letting complexity creep in "just this once"</span>
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
          <Card className="p-8 max-w-4xl mx-auto bg-background border border-primary/20 shadow-soft">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-primary">
              The Low Code Cookbook Today
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              What started as my personal framework has become an AI-powered tool that helps founders 
              evaluate their entire tech stack. Whether you're technical or not, our digital assistant 
              provides personalized recommendations, scores your current solutions, and guides you toward 
              the simplicity that actually scales.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;