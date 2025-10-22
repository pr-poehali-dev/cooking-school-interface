import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [openDialog, setOpenDialog] = useState(false);
  const [questionForm, setQuestionForm] = useState({ name: '', email: '', question: '' });
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', phone: '', course: '', date: '' });

  const courses = [
    {
      id: 1,
      title: 'Итальянская кухня',
      emoji: '🍝',
      description: 'Паста, пицца, ризотто и другие блюда',
      price: 3500,
      duration: '3 часа',
      level: 'Начинающий',
      image: 'https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/f66e4682-5465-41d0-bb0a-80a67a66416d.jpg'
    },
    {
      id: 2,
      title: 'Азиатская кухня',
      emoji: '🍜',
      description: 'Суши, роллы, вок и восточные деликатесы',
      price: 4000,
      duration: '3.5 часа',
      level: 'Средний',
      image: 'https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/01377932-9ca2-41cf-a9dc-bf662942d5e9.jpg'
    },
    {
      id: 3,
      title: 'Французская кухня',
      emoji: '🥐',
      description: 'Круассаны, багеты, изысканные десерты',
      price: 4500,
      duration: '4 часа',
      level: 'Продвинутый',
      image: 'https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/9d0ada4b-8dca-4934-9188-ad463797a322.jpg'
    },
    {
      id: 4,
      title: 'Десерты и выпечка',
      emoji: '🍰',
      description: 'Торты, пирожные, макаронс',
      price: 3800,
      duration: '3 часа',
      level: 'Начинающий',
      image: 'https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/09902e22-8d82-42b1-9264-d2bf9fc2c1a5.jpg'
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '18:00-21:00', course: 'Итальянская кухня', spots: 5 },
    { day: 'Вторник', time: '19:00-22:30', course: 'Азиатская кухня', spots: 3 },
    { day: 'Среда', time: '18:30-21:30', course: 'Десерты и выпечка', spots: 7 },
    { day: 'Четверг', time: '18:00-22:00', course: 'Французская кухня', spots: 2 },
    { day: 'Пятница', time: '19:00-22:00', course: 'Итальянская кухня', spots: 6 },
    { day: 'Суббота', time: '14:00-18:00', course: 'Азиатская кухня', spots: 4 },
    { day: 'Воскресенье', time: '11:00-15:00', course: 'Французская кухня', spots: 8 }
  ];

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за ваш вопрос!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setQuestionForm({ name: '', email: '', question: '' });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами для подтверждения записи.',
    });
    setOpenDialog(false);
    setBookingForm({ name: '', email: '', phone: '', course: '', date: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">👨‍🍳</div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Школа Гастрономии</h1>
                <p className="text-xs text-muted-foreground">Вкус, который останется с вами</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">Курсы</a>
              <a href="#schedule" className="text-foreground hover:text-primary transition-colors font-medium">Расписание</a>
              <a href="#questions" className="text-foreground hover:text-primary transition-colors font-medium">Вопросы</a>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgZmlsbD0iI2ZmNjYwMCIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary text-primary-foreground px-6 py-2 text-base">
              ✨ Лучшая кулинарная школа 2024
            </Badge>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Готовьте с Душой!
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Научим готовить блюда мировой кухни. От классики до авторских рецептов. 
              Практика с первого занятия!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                <Icon name="ChefHat" size={20} className="mr-2" />
                Выбрать курс
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">500+</p>
                    <p className="text-sm text-muted-foreground">Учеников</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Icon name="Award" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">15+</p>
                    <p className="text-sm text-muted-foreground">Курсов</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon name="Star" size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-sm text-muted-foreground">Рейтинг</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Наши программы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Кулинарные Курсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите направление и станьте мастером кулинарии за несколько занятий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary group overflow-hidden hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 text-5xl drop-shadow-lg">{course.emoji}</div>
                  <Badge className="absolute bottom-4 left-4 bg-white/95 text-foreground">{course.level}</Badge>
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">{course.price} ₽</span>
                    <span className="text-sm text-muted-foreground">за курс</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all" 
                        onClick={() => setBookingForm({...bookingForm, course: course.title})}
                      >
                        <Icon name="CalendarCheck" size={18} className="mr-2" />
                        Записаться на курс
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Запись на: {course.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          Заполните форму, и мы свяжемся с вами для подтверждения
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBookingSubmit} className="space-y-4">
                        <div>
                          <Input 
                            placeholder="Ваше имя" 
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                            required
                            className="h-12"
                          />
                        </div>
                        <div>
                          <Input 
                            type="email" 
                            placeholder="Email" 
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                            required
                            className="h-12"
                          />
                        </div>
                        <div>
                          <Input 
                            type="tel" 
                            placeholder="Телефон" 
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                            required
                            className="h-12"
                          />
                        </div>
                        <div>
                          <Input 
                            type="date" 
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                            required
                            className="h-12"
                          />
                        </div>
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-base">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-gradient-to-br from-muted/50 to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Планируйте занятия</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Расписание на Неделю</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбирайте удобное время для посещения мастер-классов
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {schedule.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:border-primary border-2 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon name="CalendarDays" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{item.day}</h3>
                          <p className="text-muted-foreground flex items-center gap-2">
                            <Icon name="Clock" size={16} />
                            {item.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-lg">{item.course}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                            <Icon name="Users" size={14} />
                            Осталось мест: <span className="font-bold text-accent">{item.spots}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="questions" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary text-primary-foreground">Мы здесь, чтобы помочь</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Есть Вопросы?</h2>
              <p className="text-xl text-muted-foreground">
                Задайте нам вопрос, и наши менеджеры свяжутся с вами в течение часа
              </p>
            </div>

            <Card className="shadow-2xl border-2 hover:border-primary transition-all">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="MessageCircleQuestion" size={28} className="text-primary" />
                  Форма обратной связи
                </CardTitle>
                <CardDescription className="text-base">
                  Заполните форму ниже, и мы ответим на все ваши вопросы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuestionSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input
                      placeholder="Иван Петров"
                      value={questionForm.name}
                      onChange={(e) => setQuestionForm({ ...questionForm, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email для связи</label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={questionForm.email}
                      onChange={(e) => setQuestionForm({ ...questionForm, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваш вопрос</label>
                    <Textarea
                      placeholder="Расскажите, что вас интересует..."
                      value={questionForm.question}
                      onChange={(e) => setQuestionForm({ ...questionForm, question: e.target.value })}
                      required
                      className="min-h-[120px] resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-base shadow-lg hover:shadow-xl transition-all">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить вопрос
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon name="Phone" size={28} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary/10 p-4 rounded-full">
                    <Icon name="Mail" size={28} className="text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@cookschool.ru</p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <Icon name="MapPin" size={28} className="text-accent" />
                  </div>
                </div>
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Повара, 10</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">👨‍🍳</span>
                <h3 className="font-bold text-xl">Школа Гастрономии</h3>
              </div>
              <p className="text-background/70">
                Лучшая кулинарная школа для тех, кто хочет готовить с душой
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Курсы</h4>
              <ul className="space-y-2 text-background/70">
                <li>Итальянская кухня</li>
                <li>Азиатская кухня</li>
                <li>Французская кухня</li>
                <li>Десерты и выпечка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-background/70">
                <li>О школе</li>
                <li>Наши повара</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="bg-background/10 p-3 rounded-full hover:bg-background/20 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="bg-background/10 p-3 rounded-full hover:bg-background/20 transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="bg-background/10 p-3 rounded-full hover:bg-background/20 transition-colors cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2024 Школа Гастрономии. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
