import { motion } from "framer-motion";
import { Shield, Briefcase, Clock, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Методология Big 4",
    desc: "Учишься по тем же стандартам, по которым работают аналитики Kept, Deloitte, EY и PwC.",
  },
  {
    icon: Briefcase,
    title: "Реальные кейсы",
    desc: "Каждый модуль — это живой бизнес-кейс. Никакой «воды» и абстрактной теории.",
  },
  {
    icon: Clock,
    title: "Учись в своём темпе",
    desc: "Доступ к материалам 24/7. Практикуйся на интерактивных заданиях когда удобно.",
  },
  {
    icon: Rocket,
    title: "Карьерный буст",
    desc: "87% выпускников получили оффер или повышение в течение 3 месяцев после курса.",
  },
];

const WhySection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Почему <span className="text-gradient">именно мы</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Не просто курс — система трансформации карьеры
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <r.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold font-display mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
