import { motion } from "framer-motion";
import { Lock, Unlock, CheckCircle2, Clock, BookOpen, BarChart3, PieChart, Search, LineChart, Target } from "lucide-react";

interface Module {
  id: number;
  title: string;
  subtitle: string;
  lessons: number;
  hours: number;
  icon: React.ElementType;
  free?: boolean;
  tags: string[];
}

const modules: Module[] = [
  {
    id: 0,
    title: "Твой путь в финансовую элиту",
    subtitle: "Карьерные треки, зарплаты, реальные истории выпускников",
    lessons: 5,
    hours: 2,
    icon: Target,
    free: true,
    tags: ["Бесплатно", "Карьера"],
  },
  {
    id: 1,
    title: "Язык денег",
    subtitle: "Базовые механизмы, термины и сленг, который откроет двери",
    lessons: 12,
    hours: 6,
    icon: BookOpen,
    tags: ["Фундамент", "Теория"],
  },
  {
    id: 2,
    title: "Читай отчётность как открытую книгу",
    subtitle: "Баланс, P&L, cash flow — научись видеть то, что скрыто",
    lessons: 15,
    hours: 10,
    icon: BarChart3,
    tags: ["Отчётность", "Практика"],
  },
  {
    id: 3,
    title: "Цифры, которые решают всё",
    subtitle: "Финансовые коэффициенты и экспресс-диагностика бизнеса",
    lessons: 14,
    hours: 8,
    icon: PieChart,
    tags: ["Анализ", "KPI"],
  },
  {
    id: 4,
    title: "Рентген бизнеса",
    subtitle: "Глубокий анализ и оценка реальной стоимости компании",
    lessons: 18,
    hours: 14,
    icon: Search,
    tags: ["Оценка", "Due Diligence"],
  },
  {
    id: 5,
    title: "Архитектор прибыли",
    subtitle: "Финансовое моделирование: от Excel до автоматизации",
    lessons: 16,
    hours: 12,
    icon: LineChart,
    tags: ["Моделирование", "Excel"],
  },
  {
    id: 6,
    title: "Решения на миллион",
    subtitle: "Инвестиционный анализ и принятие стратегических решений",
    lessons: 14,
    hours: 10,
    icon: Target,
    tags: ["Инвестиции", "Стратегия"],
  },
];

const LearningPath = () => {
  return (
    <section className="py-24" id="program">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Твой путь к <span className="text-gradient">мастерству</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            7 модулей. От нуля до уровня аналитика Big&nbsp;4. Каждый шаг — реальная практика на кейсах Kept.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px line-glow" />

          <div className="space-y-6">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Node */}
                <div className={`absolute left-3 md:left-5 top-6 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs font-bold z-10 ${
                  mod.free
                    ? "bg-success text-success-foreground"
                    : "bg-primary/20 text-primary border border-primary/40"
                }`}>
                  {mod.id}
                </div>

                <div className={`group glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300 cursor-pointer ${
                  mod.free ? "border-success/30 bg-success/5" : ""
                }`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {mod.free ? (
                          <Unlock className="w-4 h-4 text-success" />
                        ) : (
                          <Lock className="w-4 h-4 text-muted-foreground opacity-50" />
                        )}
                        <h3 className="text-lg font-semibold font-display group-hover:text-primary transition-colors">
                          {mod.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{mod.subtitle}</p>
                    </div>
                    <mod.icon className="w-8 h-8 text-primary/40 shrink-0 hidden md:block" />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {mod.lessons} уроков
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {mod.hours}ч
                    </span>
                    {mod.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 rounded-full ${
                        tag === "Бесплатно"
                          ? "bg-success/15 text-success"
                          : "bg-secondary text-secondary-foreground"
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
