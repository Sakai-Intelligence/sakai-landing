
import sakaiLogo from "@/assets/sakai-logo.png";
import { useTranslation, Locale } from "@/i18n/useTranslation";
import { Link, useLocation } from "react-router-dom";

const LANGUAGES = [
  { code: 'ca', label: 'Català' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

interface HeaderProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const Header = ({ locale, setLocale }: HeaderProps) => {
  const { t } = useTranslation(locale);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as Locale);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forge/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div
              alt="Sakai Intelligence Logo" className="h-12 w-12 bg-accent"
              style={{
                mask: `url(${sakaiLogo}) center / contain no-repeat`,
                WebkitMask: `url(${sakaiLogo}) center / contain no-repeat`
              }}
            />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground tracking-tight">{t('header.title')}</h1>
              <p className="text-xs text-muted-foreground">{t('header.subtitle')}</p>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              {isHome ? (
                <>
                  <a
                    href="#story"
                    className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    {t('header.ourStory')}
                  </a>
                  <a
                    href="#services"
                    className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    {t('header.services')}
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    {t('header.contact')}
                  </a>
                </>
              ) : (
                <Link
                  to="/"
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                >
                  {t('header.services')}
                </Link>
              )}
              <Link
                to="/studio"
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {t('header.studio')}
              </Link>
            </nav>
            {/* Language Selector */}
            <div className="relative">
              <select
                className="appearance-none bg-transparent text-xs text-muted-foreground border-none pr-6 pl-2 py-1 focus:outline-none cursor-pointer"
                value={locale}
                aria-label="Language selector"
                style={{ minWidth: 70 }}
                onChange={handleChange}
              >
                {LANGUAGES.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">▼</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
