import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Story />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
