import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

interface CourseSchedule {
  id: number;
  title: string;
  time: string;
  duration: string;
  level: string;
  price: string;
  available: number;
}

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseSchedule | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const { toast } = useToast();

  const courses: CourseSchedule[] = [
    { id: 1, title: "Итальянская паста с нуля", time: "Понедельник 18:00", duration: "2 часа", level: "Начинающий", price: "3500₽", available: 4 },
    { id: 2, title: "Суши и роллы мастер-класс", time: "Среда 19:00", duration: "2.5 часа", level: "Средний", price: "4200₽", available: 6 },
    { id: 3, title: "Французские десерты", time: "Пятница 17:00", duration: "3 часа", level: "Продвинутый", price: "5000₽", available: 3 },
    { id: 4, title: "Грузинская кухня", time: "Суббота 14:00", duration: "2 часа", level: "Начинающий", price: "3800₽", available: 8 },
    { id: 5, title: "Азиатская street food", time: "Воскресенье 16:00", duration: "2 часа", level: "Средний", price: "4000₽", available: 5 },
  ];

  const dishes = [
    { name: "Итальянская кухня", description: "Паста, ризотто, пицца", icon: "Pizza", color: "bg-primary" },
    { name: "Азиатская кухня", description: "Суши, вок, димсамы", icon: "UtensilsCrossed", color: "bg-secondary" },
    { name: "Французская кухня", description: "Круассаны, тарты, рататуй", icon: "Croissant", color: "bg-accent" },
    { name: "Грузинская кухня", description: "Хачапури, хинкали, чахохбили", icon: "ChefHat", color: "bg-amber-500" },
  ];

  const handleBooking = (course: CourseSchedule) => {
    setSelectedCourse(course);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: `Мы свяжемся с вами для подтверждения записи на "${selectedCourse?.title}"`,
    });
    setSelectedCourse(null);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Вопрос отправлен!",
      description: "Мы ответим вам в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Icon name="ChefHat" size={40} className="text-white" />
            <h1 className="text-3xl font-extrabold">Вкусная Школа</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#hero" className="hover:text-amber-200 transition font-semibold">Главная</a>
            <a href="#schedule" className="hover:text-amber-200 transition font-semibold">Расписание</a>
            <a href="#dishes" className="hover:text-amber-200 transition font-semibold">Направления</a>
            <a href="#question" className="hover:text-amber-200 transition font-semibold">Вопросы</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary text-white text-base px-4 py-2">Открыт набор!</Badge>
              <h2 className="text-5xl font-extrabold text-foreground leading-tight">
                Научись готовить <span className="text-primary">как шеф</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Профессиональные мастер-классы по кулинарии от лучших поваров города. 
                Открой в себе талант шеф-повара!
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                  <Icon name="CalendarCheck" size={20} className="mr-2" />
                  Записаться на урок
                </Button>
                <Button size="lg" variant="outline" className="border-2 font-bold">
                  <Icon name="Info" size={20} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/1d0d72a7-f630-4ca3-a4b5-eef6378fd592.jpg" 
                alt="Cooking class" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={32} className="text-primary" />
                  <div>
                    <p className="text-3xl font-bold text-foreground">2500+</p>
                    <p className="text-sm text-muted-foreground">Учеников</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dishes" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-foreground mb-4">Направления обучения</h2>
            <p className="text-xl text-muted-foreground">Выбирай кухню мира и начинай учиться</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dishes.map((dish, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className={`${dish.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    <Icon name={dish.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{dish.name}</CardTitle>
                  <CardDescription className="text-base">{dish.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full font-semibold">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-foreground mb-4">Расписание занятий</h2>
            <p className="text-xl text-muted-foreground">Выбери удобное время и запишись на урок</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="border-2 hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-secondary text-white">{course.level}</Badge>
                    <Badge variant="outline" className="border-accent text-accent">
                      <Icon name="Users" size={14} className="mr-1" />
                      {course.available} мест
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="space-y-2 text-base">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>{course.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-secondary" />
                      <span>{course.duration}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-primary">{course.price}</span>
                  </div>
                  <Dialog open={selectedCourse?.id === course.id} onOpenChange={(open) => !open && setSelectedCourse(null)}>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold"
                        onClick={() => handleBooking(course)}
                      >
                        <Icon name="CalendarPlus" size={18} className="mr-2" />
                        Записаться
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Запись на урок</DialogTitle>
                        <DialogDescription>{course.title}</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmitBooking} className="space-y-4">
                        <Input 
                          placeholder="Ваше имя" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                        <Input 
                          type="email" 
                          placeholder="Email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                        <Input 
                          type="tel" 
                          placeholder="Телефон" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                        <Textarea 
                          placeholder="Комментарий (необязательно)" 
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                          Подтвердить запись
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="question" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 shadow-xl">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-primary to-secondary w-20 h-20 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={40} className="text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-extrabold">Остались вопросы?</CardTitle>
                <CardDescription className="text-lg">
                  Напишите нам, и мы ответим в течение часа!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuestionSubmit} className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input 
                    type="tel" 
                    placeholder="Телефон (необязательно)" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <Textarea 
                    placeholder="Ваш вопрос" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={5}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить вопрос
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="ChefHat" size={32} />
                <h3 className="text-2xl font-bold">Вкусная Школа</h3>
              </div>
              <p className="text-white/80">Лучшая кулинарная школа для всех уровней подготовки</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@vkusnaya-school.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Кулинарная, 10
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
            <p>© 2025 Вкусная Школа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
