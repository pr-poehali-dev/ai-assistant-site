import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-purple via-slate-900 to-dark-purple relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-bright-blue/10 border border-bright-blue/20 rounded-full px-4 py-2 text-bright-blue mb-6">
              <Icon name="Sparkles" size={16} />
              <span className="text-sm font-medium">
                Новое поколение ИИ-помощников
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Найдите ответ на
              <span className="text-transparent bg-gradient-to-r from-bright-blue to-light-purple bg-clip-text">
                {" "}
                любой вопрос
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Умный ИИ-помощник с поддержкой файлов, изображений и
              специализацией в технике, медицине и образовании
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12 animate-slide-up">
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-colors">
              <Icon
                name="Brain"
                className="text-bright-blue mb-4 mx-auto"
                size={32}
              />
              <h3 className="text-white font-semibold mb-2">Техника</h3>
              <p className="text-slate-400 text-sm">
                Программирование, инженерия, технологии
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-colors">
              <Icon
                name="Heart"
                className="text-bright-blue mb-4 mx-auto"
                size={32}
              />
              <h3 className="text-white font-semibold mb-2">Медицина</h3>
              <p className="text-slate-400 text-sm">
                Диагностика, лечение, анализы
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-colors">
              <Icon
                name="GraduationCap"
                className="text-bright-blue mb-4 mx-auto"
                size={32}
              />
              <h3 className="text-white font-semibold mb-2">Образование</h3>
              <p className="text-slate-400 text-sm">
                Обучение, исследования, наука
              </p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              className="bg-bright-blue hover:bg-bright-blue/90 text-white px-8 py-6 text-lg font-medium"
            >
              <Icon name="Search" className="mr-2" size={20} />
              Начать поиск
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg"
            >
              <Icon name="Upload" className="mr-2" size={20} />
              Загрузить файл
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-400 text-sm">Языков</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-slate-400 text-sm">Запросов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-400 text-sm">Доступность</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-slate-400 text-sm">Точность</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
