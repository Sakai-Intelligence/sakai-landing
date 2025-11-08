import { Bot, Code2, Layers, Workflow, Database, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "AI Integration",
    description: "Seamlessly integrate cutting-edge AI models into your existing systems, from GPT-4 to custom machine learning solutions.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Bespoke software solutions crafted with precision, tailored to your unique business challenges and goals.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Transform manual workflows into intelligent automated systems that save time and eliminate errors.",
  },
  {
    icon: Layers,
    title: "API Development",
    description: "Robust, scalable APIs that connect your systems and enable seamless data flow across your organization.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build pipelines and infrastructure that turn raw data into actionable insights for your business.",
  },
  {
    icon: Shield,
    title: "Technical Consulting",
    description: "Strategic guidance on technology decisions, architecture design, and digital transformation initiatives.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every service delivered with the precision and care of a master craftsman, 
            combining technical excellence with strategic insight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
