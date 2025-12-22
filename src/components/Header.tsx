
import sakaiLogo from "@/assets/sakai-logo.png";
import { useTranslation, Locale } from "@/i18n/useTranslation";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as Locale);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forge/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div
              aria-label="Sakai Intelligence Logo"
              role="img"
              className="h-12 w-12 bg-accent"
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-8">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-forge border-b border-border/50 p-4 shadow-lg animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {isHome ? (
              <>
                <a
                  href="#story"
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  onClick={closeMenu}
                >
                  {t('header.ourStory')}
                </a>
                <a
                  href="#services"
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  onClick={closeMenu}
                >
                  {t('header.services')}
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  onClick={closeMenu}
                >
                  {t('header.contact')}
                </a>
              </>
            ) : (
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                onClick={closeMenu}
              >
                {t('header.services')}
              </Link>
            )}
            <Link
              to="/studio"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              {t('header.studio')}
            </Link>

            <div className="pt-2 border-t border-border/20">
              <select
                className="w-full bg-transparent text-sm text-muted-foreground border border-border/50 rounded p-2 focus:outline-none"
                value={locale}
                onChange={handleChange}
              >
                {LANGUAGES.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
