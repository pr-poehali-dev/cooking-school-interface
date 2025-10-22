import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ваш вопрос!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const courses = [
    {
      title: "Итальянская кухня",
      description: "Паста, ризотто, пицца и десерты",
      price: "5 500 ₽",
      duration: "4 занятия",
      level: "Начинающий",
      image: "https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/d9141e02-1fd6-4440-a280-ee17e78baaf2.jpg",
      icon: "Pizza",
    },
    {
      title: "Азиатская кухня",
      description: "Суши, роллы, том-ям и вок",
      price: "6 000 ₽",
      duration: "5 занятий",
      level: "Средний",
      image: "https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/d5ee2606-9cc0-4b8a-a27d-6a59c7fdfffb.jpg",
      icon: "UtensilsCrossed",
    },
    {
      title: "Десерты и выпечка",
      description: "Торты, капкейки, макаруны",
      price: "4 500 ₽",
      duration: "4 занятия",
      level: "Начинающий",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      icon: "Cake",
    },
    {
      title: "Мастер-класс шефа",
      description: "Авторские блюда от наших поваров",
      price: "3 000 ₽",
      duration: "1 занятие",
      level: "Все уровни",
      image: "https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/45e072e7-1740-4e07-9595-924550fb9895.jpg",
      icon: "ChefHat",
    },
  ];

  const schedule = [
    {
      day: "Понедельник",
      time: "18:00 - 21:00",
      course: "Итальянская кухня",
      spots: 3,
    },
    {
      day: "Среда",
      time: "19:00 - 22:00",
      course: "Азиатская кухня",
      spots: 5,
    },
    {
      day: "Пятница",
      time: "17:00 - 20:00",
      course: "Десерты и выпечка",
      spots: 2,
    },
    {
      day: "Суббота",
      time: "14:00 - 17:00",
      course: "Мастер-класс шефа",
      spots: 8,
    },
    {
      day: "Воскресенье",
      time: "11:00 - 14:00",
      course: "Итальянская кухня",
      spots: 4,
    },
  ];

  const handleBooking = (course: string) => {
    toast({
      title: "Запись на курс",
      description: `Вы записываетесь на "${course}". Заполните форму ниже.`,
    });
    const formSection = document.getElementById("contact-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-yellow-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="ChefHat" className="text-primary" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Вкусная Школа
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">
                Курсы
              </a>
              <a href="#schedule" className="text-foreground hover:text-primary transition-colors font-medium">
                Расписание
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              ⭐ Лучшая кулинарная школа 2024
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Готовь как{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                профессионал
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Научим готовить блюда мировой кухни за 4 недели. От новичка до уверенного повара!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Записаться на курс
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1500+</div>
                <div className="text-sm text-muted-foreground">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Рецептов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15</div>
                <div className="text-sm text-muted-foreground">Шеф-поваров</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20"></div>
            <img
              src="https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/45e072e7-1740-4e07-9595-924550fb9895.jpg"
              alt="Кулинарная школа"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="courses" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">🍳 Наши курсы</Badge>
          <h2 className="text-4xl font-bold mb-4">Выбери свое направление</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изучай кухни мира под руководством опытных шеф-поваров
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-foreground">{course.level}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name={course.icon as any} className="text-primary" size={24} />
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </span>
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="schedule" className="bg-white/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">📅 Расписание</Badge>
            <h2 className="text-4xl font-bold mb-4">Ближайшие занятия</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбирай удобное время и записывайся прямо сейчас
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {schedule.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl text-white">
                        <Icon name="Calendar" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.day}</h3>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {item.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-semibold text-lg">{item.course}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Icon name="Users" size={16} />
                          Осталось мест: <span className="text-primary font-bold">{item.spots}</span>
                        </p>
                      </div>
                      <Button
                        onClick={() => handleBooking(item.course)}
                        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      >
                        Записаться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">💬 Остались вопросы?</Badge>
            <h2 className="text-4xl font-bold mb-4">Напишите нам</h2>
            <p className="text-xl text-muted-foreground">
              Ответим в течение 15 минут в рабочее время
            </p>
          </div>
          <Card className="border-2" id="contact-form">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваш вопрос</label>
                  <Textarea
                    placeholder="Расскажите, что вас интересует..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить вопрос
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="ChefHat" size={28} />
                <span className="text-xl font-bold">Вкусная Школа</span>
              </div>
              <p className="text-white/80">Готовим профессионалов с 2015 года</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Курсы</h3>
              <ul className="space-y-2 text-white/80">
                <li>Итальянская кухня</li>
                <li>Азиатская кухня</li>
                <li>Десерты и выпечка</li>
                <li>Мастер-классы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@cookschool.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Вкусная, 15
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Соцсети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
            <p>© 2024 Вкусная Школа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
