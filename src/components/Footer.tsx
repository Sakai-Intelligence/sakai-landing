import { useTranslation, Locale } from "@/i18n/useTranslation";

interface FooterProps {
  locale: Locale;
}

const Footer = ({ locale }: FooterProps) => {
  const { t } = useTranslation(locale);
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('footer.title')}</h3>
              <p className="text-primary-foreground/80">
                {t('footer.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>{t('footer.aiIntegration')}</li>
                <li>{t('footer.softwareDev')}</li>
                <li>{t('footer.processAuto')}</li>
                <li>{t('footer.techConsult')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>{t('footer.email')}</li>
                <li>{t('footer.phone')}</li>
                <li>{t('footer.remote')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} {t('footer.title')}. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
