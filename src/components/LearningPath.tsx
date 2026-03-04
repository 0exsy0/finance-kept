import { motion } from "framer-motion";
import { useState } from "react";
import { Lock, Unlock, CheckCircle2, Clock, ChevronDown, ChevronUp, BookOpen, BarChart3, PieChart, Brain, Award, Target } from "lucide-react";

interface Lesson {
  title: string;
  description: string;
  hasTask?: boolean;
}

interface Module {
  id: number;
  title: string;
  subtitle: string;
  lessons: Lesson[];
  icon: React.ElementType;
  free?: boolean;
  isFinal?: boolean;
}

const modules: Module[] = [
  {
    id: 0,
    title: "Введение",
    subtitle: "Описание курса, карьерные возможности и использование ИИ для обучения",
    icon: Target,
    free: true,
    lessons: [
      { title: "Описание курса", description: "Перечисление навыков, которые будут изучены на курсе." },
      { title: "Карьерные возможности", description: "Описание потенциальных вариантов построения карьеры." },
      { title: "Использование ИИ для обучения", description: "Изучение промптов, помогающих в изучении материала." },
    ],
  },
  {
    id: 1,
    title: "Финансовая отчётность",
    subtitle: "ОФР, ОДДС, балансовый отчёт и связь между формами отчётности",
    icon: BookOpen,
    lessons: [
      { title: "Принципы финансового учёта", description: "Изучение основных принципов финансового учёта.", hasTask: true },
      { title: "Отчёт о финансовых результатах (ОФР)", description: "Выручка, себестоимость, валовая прибыль, операционные расходы, чистая прибыль и структура ОФР.", hasTask: true },
      { title: "Отчёт о движении денежных средств (ОДДС)", description: "Денежные потоки от текущих, инвестиционных и финансовых операций, сальдо денежных потоков.", hasTask: true },
      { title: "Балансовый отчёт", description: "Активы, пассивы, собственный и заёмный капитал, внеоборотные и оборотные активы.", hasTask: true },
      { title: "Связь между тремя формами отчётности", description: "Как связаны три формы отчётности между собой.", hasTask: true },
      { title: "Кейс", description: "Построение трёх форм отчётности за три года и анализ слабых мест компании.", hasTask: true },
    ],
  },
  {
    id: 2,
    title: "Финансовый анализ",
    subtitle: "Вертикальный, горизонтальный и коэффициентный анализ с учётом отрасли",
    icon: BarChart3,
    lessons: [
      { title: "Вертикальный анализ", description: "Структура расходов, выручки, обязательств и другие метрики вертикального анализа.", hasTask: true },
      { title: "Горизонтальный анализ", description: "Темп прироста выручки, чистой прибыли и другие метрики горизонтального анализа.", hasTask: true },
      { title: "Коэффициентный анализ (часть 1)", description: "Метрики рентабельности и финансовых результатов: EBITDA, EBIT, точка безубыточности.", hasTask: true },
      { title: "Коэффициентный анализ (часть 2)", description: "Метрики деловой активности и платёжеспособности: оборачиваемость, ликвидность, финансовый рычаг.", hasTask: true },
      { title: "Специфика анализа по отраслям", description: "Какие показатели использовать при анализе различных отраслей.", hasTask: true },
      { title: "Кейс", description: "Выбор актуальных метрик, расчёт и рекомендации по улучшению показателей.", hasTask: true },
    ],
  },
  {
    id: 3,
    title: "ИИ для финансового анализа",
    subtitle: "Промпт-инжиниринг, ИИ для Excel, изучение отрасли и проверка ответов",
    icon: Brain,
    lessons: [
      { title: "Основы промпт-инжиниринга", description: "Как правильно строить запросы для ИИ с учётом контекста.", hasTask: true },
      { title: "ИИ для MS Excel", description: "Промпты для проверки правильности формул и объяснения их работы.", hasTask: true },
      { title: "ИИ для изучения отрасли", description: "Промпты для понимания специфики отрасли и выбора показателей для анализа.", hasTask: true },
      { title: "Проверка ответов ИИ", description: "Методы оценки правильности ответов, сгенерированных ИИ.", hasTask: true },
    ],
  },
  {
    id: 4,
    title: "Финальный проект",
    subtitle: "Комплексный проект: от построения отчётности до рекомендаций по улучшению бизнеса",
    icon: Award,
    isFinal: true,
    lessons: [
      { title: "Построить ОФР из полученных данных", description: "" },
      { title: "Построить ОДДС из полученных данных", description: "" },
      { title: "Построить балансовый отчёт из полученных данных", description: "" },
      { title: "Проверить правильность отчётностей с помощью ИИ", description: "" },
      { title: "Изучить специфику отрасли с помощью ИИ", description: "" },
      { title: "Провести вертикальный анализ", description: "" },
      { title: "Провести горизонтальный анализ", description: "" },
      { title: "Провести коэффициентный анализ", description: "" },
      { title: "Сделать вывод о слабых сторонах и описать пути их исправления", description: "" },
    ],
  },
];

const ModuleCard = ({ mod, index }: { mod: Module; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="relative pl-16 md:pl-20"
    >
      {/* Node */}
      <div className={`absolute left-3 md:left-5 top-5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold z-10 ${
        mod.free
          ? "bg-primary text-primary-foreground"
          : mod.isFinal
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground border border-border"
      }`}>
        {mod.isFinal ? "★" : mod.id}
      </div>

      <div
        className={`group rounded-2xl border p-5 transition-all duration-300 cursor-pointer ${
          mod.free ? "border-primary/30 bg-secondary/50" : mod.isFinal ? "border-primary/30 bg-secondary/30" : "border-border bg-background"
        } hover:border-primary/40`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {mod.free ? (
                <Unlock className="w-4 h-4 text-primary" />
              ) : (
                <Lock className="w-4 h-4 text-muted-foreground/40" />
              )}
              <h3 className="text-base font-semibold font-display text-foreground group-hover:text-primary transition-colors">
                Блок {mod.id}{mod.isFinal ? "" : `: ${mod.title}`}
                {mod.isFinal && `: ${mod.title}`}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">{mod.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <mod.icon className="w-7 h-7 text-primary/30 hidden md:block" />
            {expanded ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {mod.lessons.length} {mod.isFinal ? "задач" : "уроков"}
          </span>
          {mod.free && (
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Бесплатно
            </span>
          )}
          {mod.isFinal && (
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Итоговый
            </span>
          )}
        </div>

        {/* Expandable lessons */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 pt-4 border-t border-border space-y-3"
          >
            {mod.lessons.map((lesson, li) => (
              <div key={li} className="flex items-start gap-3">
                <span className="text-xs font-medium text-muted-foreground bg-muted rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  {li + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{lesson.title}</p>
                  {lesson.description && (
                    <p className="text-xs text-muted-foreground mt-0.5">{lesson.description}</p>
                  )}
                  {lesson.hasTask && (
                    <span className="inline-flex items-center gap-1 text-xs text-primary mt-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Практическое задание
                    </span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const LearningPath = () => {
  return (
    <section className="py-16 md:py-24" id="program">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-3">
            Программа курса
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            4 блока + финальный проект. Каждый урок — конкретный навык с практическим заданием на реальных данных.
          </p>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-5">
            {modules.map((mod, i) => (
              <ModuleCard key={mod.id} mod={mod} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
