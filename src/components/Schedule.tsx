import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

interface ScheduleProps {
  showBookingDialog: boolean;
  setShowBookingDialog: (show: boolean) => void;
  selectedCourse: string | null;
}

const Schedule = ({ showBookingDialog, setShowBookingDialog, selectedCourse }: ScheduleProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const scheduleItems = [
    {
      id: 1,
      day: "Понедельник",
      time: "10:00 - 13:00",
      course: "Итальянская кухня",
      available: 5,
      color: "bg-red-500"
    },
    {
      id: 2,
      day: "Понедельник",
      time: "15:00 - 18:00",
      course: "Здоровое питание",
      available: 8,
      color: "bg-green-500"
    },
    {
      id: 3,
      day: "Вторник",
      time: "11:00 - 14:00",
      course: "Азиатская кухня",
      available: 3,
      color: "bg-yellow-500"
    },
    {
      id: 4,
      day: "Среда",
      time: "10:00 - 13:00",
      course: "Французская выпечка",
      available: 6,
      color: "bg-pink-500"
    },
    {
      id: 5,
      day: "Среда",
      time: "16:00 - 19:00",
      course: "Мясные блюда",
      available: 4,
      color: "bg-orange-600"
    },
    {
      id: 6,
      day: "Четверг",
      time: "14:00 - 17:00",
      course: "Азиатская кухня",
      available: 7,
      color: "bg-yellow-500"
    },
    {
      id: 7,
      day: "Пятница",
      time: "10:00 - 13:00",
      course: "Итальянская кухня",
      available: 2,
      color: "bg-red-500"
    },
    {
      id: 8,
      day: "Пятница",
      time: "15:00 - 18:00",
      course: "Авторская кухня",
      available: 4,
      color: "bg-purple-500"
    },
    {
      id: 9,
      day: "Суббота",
      time: "11:00 - 14:00",
      course: "Французская выпечка",
      available: 5,
      color: "bg-pink-500"
    },
    {
      id: 10,
      day: "Суббота",
      time: "15:00 - 18:00",
      course: "Мясные блюда",
      available: 6,
      color: "bg-orange-600"
    },
    {
      id: 11,
      day: "Воскресенье",
      time: "10:00 - 13:00",
      course: "Здоровое питание",
      available: 9,
      color: "bg-green-500"
    },
    {
      id: 12,
      day: "Воскресенье",
      time: "14:00 - 17:00",
      course: "Авторская кухня",
      available: 3,
      color: "bg-purple-500"
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
    
    setFormData({ name: "", phone: "", email: "" });
    setShowBookingDialog(false);
  };

  return (
    <>
      <section id="schedule" className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2 bg-secondary">Расписание</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите удобное время</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Занятия проходят в небольших группах до 10 человек
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scheduleItems.map((item) => (
              <Card 
                key={item.id} 
                className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${item.color} text-white`}>{item.day}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{item.available} мест</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl">{item.course}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <Icon name="Clock" size={18} />
                    {item.time}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Button 
                    className="w-full font-semibold"
                    variant={item.available <= 3 ? "default" : "outline"}
                    onClick={() => {
                      setShowBookingDialog(true);
                    }}
                  >
                    {item.available <= 3 ? (
                      <>
                        <Icon name="Zap" className="mr-2" size={18} />
                        Быстрая запись
                      </>
                    ) : (
                      <>
                        <Icon name="CalendarCheck" className="mr-2" size={18} />
                        Записаться
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-2 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="bg-accent rounded-full p-3">
                    <Icon name="Info" size={24} className="text-white" />
                  </div>
                  Важная информация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-accent" />
                      Что входит в занятие:
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-accent mt-1" />
                        Все ингредиенты и оборудование
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-accent mt-1" />
                        Фартук и рабочая форма
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-accent mt-1" />
                        Рецепты в электронном виде
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-accent mt-1" />
                        Дегустация приготовленных блюд
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="MapPin" size={20} className="text-accent" />
                      Адрес и контакты:
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>г. Москва, ул. Кулинарная, д. 15</li>
                      <li>Телефон: +7 (495) 123-45-67</li>
                      <li>Email: info@cooking-school.ru</li>
                      <li>Пн-Вс: 09:00 - 21:00</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Запись на курс</DialogTitle>
            <DialogDescription>
              {selectedCourse && `Курс: ${selectedCourse}`}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                id="name"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <Button type="submit" className="w-full font-semibold" size="lg">
              Отправить заявку
              <Icon name="Send" className="ml-2" size={18} />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Schedule;
