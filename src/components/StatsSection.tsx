import { motion } from "framer-motion";

const stats = [
  { value: "1 000+", label: "довольных клиентов" },
  { value: "200+", label: "компаний выбрали нас для обучения сотрудников" },
  { value: "100+", label: "авторских программ на основе бизнес-кейсов из опыта Kept" },
  { value: "4.96", label: "средняя оценка практической применимости новых знаний" },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
