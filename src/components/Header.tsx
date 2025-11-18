import sakaiLogo from "@/assets/sakai-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forge/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div
              alt="Sakai Intelligence Logo" className="h-12 w-12 bg-accent"
              style={{
                mask: `url(${sakaiLogo}) center / contain no-repeat`,
                WebkitMask: `url(${sakaiLogo}) center / contain no-repeat`
              }}
            />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground tracking-tight">Sakai Intelligence</h1>
              <p className="text-xs text-muted-foreground">Forged with Precision</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#story"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              Our Story
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
