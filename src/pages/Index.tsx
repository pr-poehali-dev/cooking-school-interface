import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: "Итальянская кухня",
      description: "Паста, пицца, ризотто и классические итальянские десерты",
      price: "12 000 ₽",
      duration: "8 занятий",
      level: "Начинающий",
      image: "🍝"
    },
    {
      id: 2,
      title: "Французская выпечка",
      description: "Круассаны, эклеры, макаруны и другие изысканные десерты",
      price: "15 000 ₽",
      duration: "10 занятий",
      level: "Продвинутый",
      image: "🥐"
    },
    {
      id: 3,
      title: "Азиатская кухня",
      description: "Суши, вок, димсамы и традиционные азиатские блюда",
      price: "13 000 ₽",
      duration: "8 занятий",
      level: "Начинающий",
      image: "🍜"
    },
    {
      id: 4,
      title: "Мастер-класс по стейкам",
      description: "Идеальная прожарка, соусы и гарниры к мясным блюдам",
      price: "8 000 ₽",
      duration: "4 занятия",
      level: "Средний",
      image: "🥩"
    },
    {
      id: 5,
      title: "Здоровое питание",
      description: "ПП-блюда, смузи-боулы, салаты и полезные перекусы",
      price: "10 000 ₽",
      duration: "6 занятий",
      level: "Начинающий",
      image: "🥗"
    },
    {
      id: 6,
      title: "Авторские десерты",
      description: "Современная кондитерская: торты, пирожные, декор",
      price: "16 000 ₽",
      duration: "12 занятий",
      level: "Продвинутый",
      image: "🍰"
    }
  ];

  const schedule = [
    { day: "Понедельник", time: "18:00 - 20:30", course: "Итальянская кухня", spots: 3 },
    { day: "Вторник", time: "19:00 - 21:30", course: "Французская выпечка", spots: 2 },
    { day: "Среда", time: "18:00 - 20:30", course: "Азиатская кухня", spots: 5 },
    { day: "Четверг", time: "19:00 - 21:00", course: "Мастер-класс по стейкам", spots: 4 },
    { day: "Пятница", time: "18:00 - 20:00", course: "Здоровое питание", spots: 6 },
    { day: "Суббота", time: "14:00 - 17:00", course: "Авторские десерты", spots: 1 },
    { day: "Воскресенье", time: "11:00 - 13:30", course: "Итальянская кухня", spots: 4 }
  ];

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за вопрос!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы подтвердим вашу запись в течение часа.",
    });
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">👨‍🍳</span>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Кулинарная Школа
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">Курсы</a>
            <a href="#schedule" className="text-foreground hover:text-primary transition-colors font-medium">Расписание</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-4 py-1">
            Откройте мир кулинарии
          </Badge>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
            Готовьте как шеф-повар!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональные курсы кулинарного мастерства для всех уровней подготовки.
            Научитесь создавать шедевры на своей кухне!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на курс
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Наши курсы
            </h3>
            <p className="text-muted-foreground text-lg">
              Выберите направление по душе и начните своё кулинарное путешествие
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                <CardHeader>
                  <div className="text-6xl mb-4 text-center animate-scale-in">{course.image}</div>
                  <CardTitle className="text-2xl text-center">{course.title}</CardTitle>
                  <CardDescription className="text-center text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center text-muted-foreground">
                        <Icon name="Clock" size={18} className="mr-2 text-accent" />
                        {course.duration}
                      </span>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" onClick={() => setSelectedCourse(course.id)}>
                            Записаться
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Запись на курс: {course.title}</DialogTitle>
                            <DialogDescription>
                              Заполните форму, и мы свяжемся с вами для подтверждения записи
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleBooking} className="space-y-4">
                            <div>
                              <Label htmlFor="name">Имя</Label>
                              <Input id="name" placeholder="Ваше имя" required />
                            </div>
                            <div>
                              <Label htmlFor="phone">Телефон</Label>
                              <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="your@email.com" required />
                            </div>
                            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                              Отправить заявку
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Расписание занятий
            </h3>
            <p className="text-muted-foreground text-lg">
              Выберите удобное время и забронируйте место
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {schedule.map((item, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all ${item.spots <= 2 ? 'border-destructive' : 'hover:border-accent'}`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span className="flex items-center">
                      <Icon name="Calendar" size={20} className="mr-2 text-primary" />
                      {item.day}
                    </span>
                  </CardTitle>
                  <CardDescription className="flex items-center text-base">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {item.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2 text-sm">{item.course}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant={item.spots <= 2 ? "destructive" : "default"} className="text-xs">
                      {item.spots} {item.spots === 1 ? 'место' : 'места'}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <Icon name="UserPlus" size={16} className="mr-1" />
                          Записаться
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Запись на занятие</DialogTitle>
                          <DialogDescription>
                            {item.course} - {item.day}, {item.time}
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleBooking} className="space-y-4">
                          <div>
                            <Label htmlFor="name">Имя</Label>
                            <Input id="name" placeholder="Ваше имя" required />
                          </div>
                          <div>
                            <Label htmlFor="phone">Телефон</Label>
                            <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                          </div>
                          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                            Забронировать место
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Есть вопросы?
            </h3>
            <p className="text-muted-foreground text-lg">
              Напишите нам, и мы с радостью ответим!
            </p>
          </div>
          <Card className="shadow-2xl border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleQuestionSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="question-name" className="text-base">Имя</Label>
                  <Input id="question-name" placeholder="Как вас зовут?" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="question-contact" className="text-base">Контакт</Label>
                  <Input id="question-contact" type="email" placeholder="Email или телефон" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="question-text" className="text-base">Ваш вопрос</Label>
                  <Textarea id="question-text" placeholder="Напишите ваш вопрос..." className="mt-2 min-h-32" required />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить вопрос
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                <span className="text-3xl">👨‍🍳</span>
                Кулинарная Школа
              </h4>
              <p className="text-background/80">
                Профессиональное обучение кулинарному искусству с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@cookschool.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Кулинарная, 15
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Режим работы</h4>
              <div className="text-background/80 space-y-1">
                <p>Пн-Пт: 10:00 - 22:00</p>
                <p>Сб-Вс: 10:00 - 20:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 text-center text-background/60">
            <p>&copy; 2024 Кулинарная Школа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
