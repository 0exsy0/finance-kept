const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold font-display">
              <span className="text-primary">kept</span>
              <span className="text-muted-foreground font-normal">.academy</span>
            </span>
            <p className="text-xs text-muted-foreground mt-1">Финансовая аналитика на практике</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Оферта</a>
            <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Kept Academy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
