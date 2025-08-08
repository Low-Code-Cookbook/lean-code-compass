import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Wrench } from "lucide-react";

const Framework = () => {
  const criteria = [
    {
      icon: Target,
      title: "Utility",
      score: "1-5",
      description: "Does this solution solve a single issue or multiple problems?",
      detail: "Higher scores for solutions that address multiple pain points efficiently."
    },
    {
      icon: TrendingUp,
      title: "Scalability", 
      score: "1-5",
      description: "How well does this solution grow with your business?",
      detail: "Consider both technical scaling and organizational complexity."
    },
    {
      icon: Wrench,
      title: "Expertise Needed",
      score: "1-5", 
      description: "How much code or technical expertise is required?",
      detail: "Lower scores mean less complexity and easier implementation."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            The 3-Score Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI assistant evaluates every technology decision on these three critical dimensions. 
            Stop delegating tech choices—start making informed decisions with digital guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon;
            return (
              <Card key={index} className="p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 border-primary/10 hover:border-primary/20">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    Score: {criterion.score}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{criterion.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {criterion.description}
                </p>
                <p className="text-sm text-muted-foreground/80">
                  {criterion.detail}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto bg-gradient-subtle border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Why This Framework Works
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Most founders delegate technology decisions without understanding their long-term impact. 
              This framework empowers you to evaluate every tool, platform, and solution objectively. 
              The result? Simpler stacks, lower costs, and more agile businesses.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Framework;