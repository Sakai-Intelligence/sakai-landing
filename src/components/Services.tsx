import { Bot, Code2, Layers, Workflow, Database, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation, Locale } from "@/i18n/useTranslation";

interface ServicesProps {
  locale: Locale;
}

const serviceKeys = [
  {
    icon: Bot,
    title: 'services.aiIntegration',
    description: 'services.aiIntegrationDesc',
  },
  {
    icon: Code2,
    title: 'services.softwareDev',
    description: 'services.softwareDevDesc',
  },
  {
    icon: Workflow,
    title: 'services.processAuto',
    description: 'services.processAutoDesc',
  },
  {
    icon: Layers,
    title: 'services.apiDev',
    description: 'services.apiDevDesc',
  },
  {
    icon: Database,
    title: 'services.dataEng',
    description: 'services.dataEngDesc',
  },
  {
    icon: Shield,
    title: 'services.techConsult',
    description: 'services.techConsultDesc',
  },
];

const Services = ({ locale }: ServicesProps) => {
  const { t } = useTranslation(locale);
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('services.subtitle')}
          </p>
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
                <CardTitle className="text-xl">{t(service.title)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t(service.description)}
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
