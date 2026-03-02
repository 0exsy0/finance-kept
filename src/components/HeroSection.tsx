import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-hero rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden">
      <div className="container py-16 md:py-24">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold font-display text-primary-foreground leading-tight mb-4"
          >
            Академия Kept
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed"
          >
            Финансовый анализ на практике.
            <br />
            Учись как эксперты Big&nbsp;4.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-foreground text-primary font-semibold text-base transition-all hover:shadow-lg">
              Обучение для себя
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary-foreground/60 text-primary-foreground font-medium text-base hover:bg-primary-foreground/10 transition-colors">
              Обучение для компании
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
