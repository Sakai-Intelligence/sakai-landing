import { Bot, Layers, Database, Workflow, Code2, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation, Locale } from "@/i18n/useTranslation";

interface ServicesProps {
  locale: Locale;
}

const serviceKeys = [
  {
    icon: Bot,
    titleKey: "services.readiness.title",
    descKey: "services.readiness.desc",
  },
  {
    icon: Layers,
    titleKey: "services.integrations.title",
    descKey: "services.integrations.desc",
  },
  {
    icon: Database,
    titleKey: "services.rag.title",
    descKey: "services.rag.desc",
  },
  {
    icon: Workflow,
    titleKey: "services.agents.title",
    descKey: "services.agents.desc",
  },
  {
    icon: Code2,
    titleKey: "services.document.title",
    descKey: "services.document.desc",
  },
  {
    icon: Shield,
    titleKey: "services.security.title",
    descKey: "services.security.desc",
  },
];

const Services = ({ locale }: ServicesProps) => {
  const { t } = useTranslation(locale);
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {serviceKeys.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t(service.descKey)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
