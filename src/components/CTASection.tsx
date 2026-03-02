import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center glow-purple"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/10" />
          <div className="absolute inset-0 border border-primary/20 rounded-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gold/15 text-gold border border-gold/20 mb-6">
              <Zap className="w-3 h-3" />
              Первый модуль — бесплатно
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Готов начать?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Присоединяйся к 1 200+ аналитикам, которые уже прокачали карьеру с Kept Academy.
              Первый модуль — полностью бесплатный.
            </p>

            <button className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-purple transition-all hover:scale-105">
              Начать обучение
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-xs text-muted-foreground mt-4">
              Без привязки карты · Доступ сразу после регистрации
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
