import { motion } from "framer-motion";
import { TrendingUp, Building2, Users, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "1 200+", label: "выпускников" },
  { icon: Building2, value: "87%", label: "трудоустройство в Big 4" },
  { icon: Users, value: "50+", label: "экспертов-менторов" },
  { icon: Award, value: "4.9", label: "средний рейтинг" },
];

const StatsSection = () => {
  return (
    <section className="py-20 border-y border-border/50">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold font-display mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
