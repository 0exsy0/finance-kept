import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-display">
            <span className="text-primary">kept</span>
            <span className="text-muted-foreground font-normal">.academy</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#program" className="hover:text-foreground transition-colors">Программа</a>
          <a href="#why" className="hover:text-foreground transition-colors">Преимущества</a>
          <a href="#" className="hover:text-foreground transition-colors">Отзывы</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Войти
          </button>
          <button className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Начать бесплатно
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
