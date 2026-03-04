import qrCode from "@/assets/qr-code.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-bold font-display text-foreground">kept</span>
            <p className="text-xs text-muted-foreground mt-1">Финансовая аналитика на практике</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Оферта</a>
            <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-4">
            <img src={qrCode} alt="QR-код для быстрого доступа" className="w-16 h-16 rounded-lg" />
            <p className="text-xs text-muted-foreground">© 2026 Kept Academy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
