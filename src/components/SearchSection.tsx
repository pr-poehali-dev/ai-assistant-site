import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function SearchSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            Поиск ответов на любые вопросы
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Выберите способ взаимодействия с ИИ-помощником и получите точные
            ответы на ваши вопросы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="text" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="text" className="flex items-center gap-2">
                <Icon name="Type" size={16} />
                Текст
              </TabsTrigger>
              <TabsTrigger value="voice" className="flex items-center gap-2">
                <Icon name="Mic" size={16} />
                Голос
              </TabsTrigger>
              <TabsTrigger value="file" className="flex items-center gap-2">
                <Icon name="Upload" size={16} />
                Файл
              </TabsTrigger>
              <TabsTrigger value="image" className="flex items-center gap-2">
                <Icon name="Image" size={16} />
                Изображение
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="space-y-6">
              <Card className="p-6">
                <div className="flex gap-4">
                  <Input
                    placeholder="Задайте любой вопрос..."
                    className="flex-1 text-lg"
                  />
                  <Button className="bg-bright-blue hover:bg-bright-blue/90 px-8">
                    <Icon name="Search" className="mr-2" size={18} />
                    Поиск
                  </Button>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Brain" className="text-bright-blue" size={24} />
                    <h3 className="font-semibold">Техника</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    "Как настроить Docker для React приложения?"
                  </p>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Heart" className="text-bright-blue" size={24} />
                    <h3 className="font-semibold">Медицина</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    "Объясните результаты анализа крови"
                  </p>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      name="GraduationCap"
                      className="text-bright-blue"
                      size={24}
                    />
                    <h3 className="font-semibold">Образование</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    "Помогите решить задачу по физике"
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="voice" className="space-y-6">
              <Card className="p-8 text-center">
                <Icon
                  name="Mic"
                  className="text-bright-blue mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-xl font-semibold mb-2">Голосовой ввод</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Говорите свой вопрос, и ИИ поймет вас на любом из 50+ языков
                </p>
                <Button className="bg-bright-blue hover:bg-bright-blue/90">
                  <Icon name="Mic" className="mr-2" size={18} />
                  Начать запись
                </Button>
              </Card>
            </TabsContent>

            <TabsContent value="file" className="space-y-6">
              <Card className="p-8 text-center border-dashed border-2">
                <Icon
                  name="Upload"
                  className="text-bright-blue mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-xl font-semibold mb-2">Загрузка файлов</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Поддерживаются PDF, DOC, TXT и другие форматы
                </p>
                <Button className="bg-bright-blue hover:bg-bright-blue/90">
                  <Icon name="Upload" className="mr-2" size={18} />
                  Выбрать файл
                </Button>
              </Card>
            </TabsContent>

            <TabsContent value="image" className="space-y-6">
              <Card className="p-8 text-center border-dashed border-2">
                <Icon
                  name="Image"
                  className="text-bright-blue mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-xl font-semibold mb-2">
                  Анализ изображений
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Загрузите изображение и задайте вопрос о его содержимом
                </p>
                <Button className="bg-bright-blue hover:bg-bright-blue/90">
                  <Icon name="Image" className="mr-2" size={18} />
                  Загрузить изображение
                </Button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
