import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Wrench, Rocket, MapPin, Route } from "lucide-react";

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

  const applications = [
    {
      icon: Rocket,
      title: "Initial Stack",
      description: "Good for new startups who need to make smart technology choices from day one without over-engineering or under-planning.",
      benefit: "Start right, scale smart"
    },
    {
      icon: MapPin,
      title: "Where Are We",
      description: "Good for tech teams with some traction that need to evaluate what worked and plan for version 2 of their stack.",
      benefit: "Learn, assess, evolve"
    },
    {
      icon: Route,
      title: "Roadmap",
      description: "We have a stack and want to find ways to get more out of it, drive down complexity and add in nimble patterns.",
      benefit: "Optimize, simplify, accelerate"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            How I Learned to Score Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through countless mistakes and successes, I discovered that every technology decision 
            comes down to three simple questions. Now our AI assistant uses this same framework 
            to help you evaluate your tech stack.
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

        {/* Applications Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              ...Apply this framework
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Use the cookbook to make smarter technology decisions at every stage of your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {applications.map((application, index) => {
              const Icon = application.icon;
              return (
                <Card key={index} className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 border-primary/10 hover:border-primary/20">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{application.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {application.description}
                  </p>
                  <Badge variant="outline" className="text-primary border-primary/30">
                    {application.benefit}
                  </Badge>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Teaser Section */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            In the coming months we are launching a new newsletter format that uses this scoring for new tech, 
            an AI agent that can be used in a Chat GPT mode to make more informed tech decisions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Framework;