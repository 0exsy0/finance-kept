import { motion } from "framer-motion";
import { Shield, Users, Clock, BarChart3 } from "lucide-react";
import officeImg from "@/assets/office.jpg";
import teamImg from "@/assets/team.jpg";

const reasons = [
  {
    icon: Shield,
    title: "Методология Kept",
    desc: "Программа построена на реальных подходах, которые используются в проектах Kept каждый день.",
  },
  {
    icon: Users,
    title: "Для команд любого уровня",
    desc: "Помогаем компаниям обучить сотрудников — от стажёров до руководителей финансовых направлений.",
  },
  {
    icon: Clock,
    title: "Гибкий формат",
    desc: "Онлайн-доступ 24/7, практические задания на реальных данных, удобный темп прохождения.",
  },
  {
    icon: BarChart3,
    title: "Практика на кейсах",
    desc: "Каждый модуль включает задания на основе реальных бизнес-ситуаций. Теория сразу закрепляется.",
  },
];

const WhySection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50" id="why">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-3">
            Как устроено обучение
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы помогаем компаниям развивать финансовые компетенции сотрудников
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mb-12">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-background p-6 hover:border-primary/30 transition-all group"
            >
              <r.icon className="w-9 h-9 text-primary mb-4" />
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Photos */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img src={officeImg} alt="Офис Kept" className="w-full h-56 object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
          >
            <img src={teamImg} alt="Команда на обучении" className="w-full h-56 object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
