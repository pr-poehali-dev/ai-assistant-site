import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-dark-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            О проекте
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Наш ИИ-помощник создан для того, чтобы дать вам доступ к знаниям
            мирового уровня в любое время и в любом месте. Мы объединили
            передовые технологии искусственного интеллекта с глубокой
            специализацией в ключевых областях.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              Возможности платформы
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-bright-blue/10 p-2 rounded-lg">
                  <Icon name="Globe" className="text-bright-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Многоязычность
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Поддержка 50+ языков с пониманием контекста и культурных
                    особенностей
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-bright-blue/10 p-2 rounded-lg">
                  <Icon
                    name="Database"
                    className="text-bright-blue"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Интеграция с базами данных
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Доступ к актуальной информации из надежных источников в
                    реальном времени
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-bright-blue/10 p-2 rounded-lg">
                  <Icon
                    name="FileText"
                    className="text-bright-blue"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Работа с документами
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Анализ PDF, Word, презентаций и других форматов с
                    извлечением ключевой информации
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-bright-blue/10 p-2 rounded-lg">
                  <Icon name="Mic" className="text-bright-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Голосовое взаимодействие
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Распознавание речи и голосовые ответы для удобного общения
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-r from-bright-blue/5 to-light-purple/5 border-bright-blue/20">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Brain" className="text-bright-blue" size={32} />
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Техническая экспертиза
                </h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Глубокие знания в программировании, инженерии, DevOps,
                архитектуре систем и новейших технологиях.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">ML/AI</Badge>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-bright-blue/5 to-light-purple/5 border-bright-blue/20">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Heart" className="text-bright-blue" size={32} />
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Медицинские знания
                </h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Помощь в понимании медицинской информации, анализе симптомов и
                разъяснении медицинских терминов.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Диагностика</Badge>
                <Badge variant="secondary">Анализы</Badge>
                <Badge variant="secondary">Лекарства</Badge>
                <Badge variant="secondary">Профилактика</Badge>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-bright-blue/5 to-light-purple/5 border-bright-blue/20">
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  name="GraduationCap"
                  className="text-bright-blue"
                  size={32}
                />
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Образовательная поддержка
                </h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Объяснение сложных концепций, помощь в обучении и академических
                исследованиях.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Математика</Badge>
                <Badge variant="secondary">Физика</Badge>
                <Badge variant="secondary">Химия</Badge>
                <Badge variant="secondary">История</Badge>
                <Badge variant="secondary">Литература</Badge>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              Миссия проекта
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Мы стремимся демократизировать доступ к знаниям и экспертизе,
              делая сложную информацию понятной и доступной для каждого. Наш
              ИИ-помощник — это мост между вашими вопросами и ответами
              экспертного уровня.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
