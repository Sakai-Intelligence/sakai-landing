
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useLocale } from "@/i18n/LocaleContext";


const Index = () => {
  const { locale, setLocale } = useLocale();
  return (
    <div className="min-h-screen">
      <Header locale={locale} setLocale={setLocale} />
      <Hero locale={locale} />
      <Story locale={locale} />
      <Services locale={locale} />
      <ContactForm locale={locale} />
      <Footer locale={locale} />
    </div>
  );
};

export default Index;
