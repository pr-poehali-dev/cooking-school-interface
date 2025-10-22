import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      image: 'https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/09dc16d6-cffa-4791-84d2-916a03288039.jpg'
    },
    {
      id: 2,
      title: 'Азиатская кухня',
      emoji: '🍜',
      description: 'Суши, роллы, вок и восточные деликатесы',
      price: 4000,
      duration: '3.5 часа',
      level: 'Средний',
      image: 'https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/84c0c283-849c-4e35-b39c-b133527cb481.jpg'
    },
    {
      id: 3,
      title: 'Французская кухня',
      emoji: '🥐',
      description: 'Круассаны, багеты, изысканные десерты',
      price: 4500,
      duration: '4 часа',
      level: 'Продвинутый',
      image: 'https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/2d686d09-792f-4910-bcf4-fd29fef16e49.jpg'
    },
    {
      id: 4,
      title: 'Десерты и выпечка',
      emoji: '🍰',
      description: 'Торты, пирожные, макаронс',
      price: 3800,
      duration: '3 часа',
      level: 'Начинающий',
      image: 'https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/b51777c3-8a21-4f88-833f-bef276dc6cc2.jpg'
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
      description: 'Мы подтвердим вашу запись в течение часа.',
    });
    setBookingForm({ name: '', email: '', phone: '', course: '', date: '' });
    setOpenDialog(false);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Icon name="ChefHat" size={32} className="text-white" />
            <h1 className="text-2xl font-bold">Culinary School</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-accent transition-colors">Главная</a>
            <a href="#courses" className="hover:text-accent transition-colors">Курсы</a>
            <a href="#schedule" className="hover:text-accent transition-colors">Расписание</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight">
                Готовь как <span className="text-primary">профи</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Научим готовить блюда мировой кухни в уютной атмосфере. От новичка до шеф-повара!
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на урок
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Посмотреть видео
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground">Выпускников</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">25+</p>
                  <p className="text-muted-foreground">Курсов</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">10</p>
                  <p className="text-muted-foreground">Лет опыта</p>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/d95a371d-3eb0-4f50-be71-7fa0368da7be/files/40e73b6d-7603-4eed-9641-843d289c2a35.jpg" 
                alt="Кулинарная школа" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Star" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-sm text-muted-foreground">Рейтинг школы</p>
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
            <h2 className="text-4xl font-bold mb-4">Наши курсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбирайте направление по душе и становитесь мастером кулинарии
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-shadow border-2 hover:border-primary group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 text-5xl">{course.emoji}</div>
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-center">{course.title}</CardTitle>
                  <CardDescription className="text-center">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </span>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">{course.price} ₽</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setBookingForm({...bookingForm, course: course.title})}>
                        Записаться
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Запись на курс: {course.title}</DialogTitle>
                        <DialogDescription>Заполните форму, и мы свяжемся с вами для подтверждения</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBookingSubmit} className="space-y-4">
                        <div>
                          <Input 
                            placeholder="Ваше имя" 
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Input 
                            type="email" 
                            placeholder="Email" 
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Input 
                            type="tel" 
                            placeholder="Телефон" 
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Input 
                            type="date" 
                            placeholder="Предпочитаемая дата" 
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-primary">Отправить заявку</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Расписание занятий</h2>
            <p className="text-xl text-muted-foreground">
              Выбирайте удобное время и записывайтесь на уроки
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {schedule.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <Icon name="Calendar" size={24} className="text-primary" />
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
                        <div>
                          <p className="font-semibold">{item.course}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Icon name="Users" size={14} />
                            Свободно мест: <span className="font-bold text-primary">{item.spots}</span>
                          </p>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="bg-primary hover:bg-primary/90">
                              Записаться
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Запись на {item.day}</DialogTitle>
                              <DialogDescription>{item.course} • {item.time}</DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleBookingSubmit} className="space-y-4">
                              <Input 
                                placeholder="Ваше имя" 
                                value={bookingForm.name}
                                onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                                required
                              />
                              <Input 
                                type="email" 
                                placeholder="Email" 
                                value={bookingForm.email}
                                onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                                required
                              />
                              <Input 
                                type="tel" 
                                placeholder="Телефон" 
                                value={bookingForm.phone}
                                onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                                required
                              />
                              <Button type="submit" className="w-full bg-primary">Подтвердить запись</Button>
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
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Есть вопросы?</h2>
              <p className="text-xl text-muted-foreground">
                Задайте их нам, и мы ответим в течение часа
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleQuestionSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 font-semibold">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={questionForm.name}
                      onChange={(e) => setQuestionForm({...questionForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Email</label>
                    <Input 
                      type="email" 
                      placeholder="ivan@example.com" 
                      value={questionForm.email}
                      onChange={(e) => setQuestionForm({...questionForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Ваш вопрос</label>
                    <Textarea 
                      placeholder="Расскажите, что вас интересует..." 
                      rows={5}
                      value={questionForm.question}
                      onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 font-semibold">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить вопрос
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-primary/5 rounded-xl">
                <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
                <p className="font-semibold mb-1">Телефон</p>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
              <div className="p-6 bg-secondary/5 rounded-xl">
                <Icon name="Mail" size={32} className="mx-auto mb-3 text-secondary" />
                <p className="font-semibold mb-1">Email</p>
                <p className="text-muted-foreground">info@culinary.ru</p>
              </div>
              <div className="p-6 bg-accent/5 rounded-xl">
                <Icon name="MapPin" size={32} className="mx-auto mb-3 text-accent" />
                <p className="font-semibold mb-1">Адрес</p>
                <p className="text-muted-foreground">Москва, ул. Кулинарная, 10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="ChefHat" size={32} />
                <h3 className="text-xl font-bold">Culinary School</h3>
              </div>
              <p className="text-white/80">
                Учим готовить с любовью и профессионализмом с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Курсы</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Расписание</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2024 Culinary School. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;