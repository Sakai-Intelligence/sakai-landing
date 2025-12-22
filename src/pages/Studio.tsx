import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocale } from "@/i18n/LocaleContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Code, TrendingUp, Users, Shield, Lightbulb } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

const Studio = () => {
  const { locale, setLocale } = useLocale();
  const { t } = useTranslation(locale);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: Code,
      titleKey: "studio.benefits.mvp.title",
      descKey: "studio.benefits.mvp.desc",
    },
    {
      icon: Rocket,
      titleKey: "studio.benefits.launch.title",
      descKey: "studio.benefits.launch.desc",
    },
    {
      icon: TrendingUp,
      titleKey: "studio.benefits.coaching.title",
      descKey: "studio.benefits.coaching.desc",
    },
    {
      icon: Shield,
      titleKey: "studio.benefits.ownership.title",
      descKey: "studio.benefits.ownership.desc",
    },
  ];

  const process = [
    {
      step: "01",
      titleKey: "studio.process.discovery.title",
      descKey: "studio.process.discovery.desc",
    },
    {
      step: "02",
      titleKey: "studio.process.build.title",
      descKey: "studio.process.build.desc",
    },
    {
      step: "03",
      titleKey: "studio.process.launch.title",
      descKey: "studio.process.launch.desc",
    },
    {
      step: "04",
      titleKey: "studio.process.scale.title",
      descKey: "studio.process.scale.desc",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header locale={locale} setLocale={setLocale} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-forge via-charcoal to-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t('studio.badge')}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
              {t('studio.hero.title1')}<br />
              <span className="text-accent">{t('studio.hero.title2')}</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('studio.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8"
              >
                {t('studio.hero.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('studio.offer.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('studio.offer.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{t(benefit.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{t(benefit.descKey)}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('studio.process.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('studio.process.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-2xl font-bold text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    {item.step}
                  </div>
                </div>

                <div className="flex-1 pb-8">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>

                {index < process.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Studio Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {t('studio.why.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {t('studio.why.expertise.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('studio.why.expertise.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {t('studio.why.speed.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('studio.why.speed.desc')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {t('studio.why.partnership.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('studio.why.partnership.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {t('studio.why.rights.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('studio.why.rights.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-forge to-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              {t('studio.cta.title')}
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              {t('studio.cta.subtitle')}
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.location.href = '/#contact'}
              className="text-lg px-8"
            >
              {t('studio.cta.button')}
            </Button>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
};

export default Studio;
