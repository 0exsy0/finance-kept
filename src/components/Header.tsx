import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold font-display text-foreground tracking-tight">kept</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#program" className="hover:text-foreground transition-colors">Программа</a>
          <a href="#why" className="hover:text-foreground transition-colors">Преимущества</a>
          <a href="#" className="hover:text-foreground transition-colors">О Kept</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2 text-sm rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Подписаться на рассылку
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
