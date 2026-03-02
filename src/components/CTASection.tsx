import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-hero rounded-3xl p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground mb-4">
            Начните обучение команды
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Первый модуль доступен бесплатно. Посмотрите, подходит ли формат вашей команде, прежде чем принимать решение.
          </p>

          <button className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary-foreground text-primary font-semibold text-base transition-all hover:shadow-lg">
            Попробовать бесплатно
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-xs text-primary-foreground/60 mt-4">
            Без привязки карты · Доступ сразу после регистрации
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
