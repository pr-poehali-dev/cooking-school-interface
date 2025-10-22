import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const QuestionsForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Вопрос отправлен!",
      description: "Мы ответим вам в ближайшее время на указанный email или телефон.",
    });
    
    setFormData({ name: "", email: "", phone: "", question: "" });
  };

  const faqs = [
    {
      icon: "HelpCircle",
      question: "Нужен ли опыт в кулинарии?",
      answer: "Нет, мы обучаем с нуля. У нас есть курсы для всех уровней подготовки."
    },
    {
      icon: "Clock",
      question: "Сколько длится одно занятие?",
      answer: "Занятие длится 3 часа с небольшим перерывом на дегустацию."
    },
    {
      icon: "Users",
      question: "Сколько человек в группе?",
      answer: "Максимум 10 человек, чтобы преподаватель мог уделить внимание каждому."
    },
    {
      icon: "Award",
      question: "Выдаете ли вы сертификат?",
      answer: "Да, после прохождения курса вы получите сертификат нашей школы."
    }
  ];

  return (
    <section id="questions" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-base px-4 py-2 bg-accent">Вопросы и ответы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Посмотрите популярные вопросы или задайте свой
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon name="MessageSquare" size={28} className="text-primary" />
              Частые вопросы
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 mt-1">
                        <Icon name={faq.icon as any} size={20} className="text-primary" />
                      </div>
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Звоните нам</h4>
                    <p className="text-muted-foreground mb-2">Ответим на все вопросы по телефону</p>
                    <a href="tel:+74951234567" className="text-xl font-bold text-primary hover:underline">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Mail" size={28} className="text-secondary" />
                  Задайте свой вопрос
                </CardTitle>
                <CardDescription className="text-base">
                  Заполните форму и мы ответим вам в течение 24 часов
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="question-name" className="text-base">Ваше имя *</Label>
                    <Input
                      id="question-name"
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="question-email" className="text-base">Email *</Label>
                      <Input
                        id="question-email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="question-phone" className="text-base">Телефон</Label>
                      <Input
                        id="question-phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="question-text" className="text-base">Ваш вопрос *</Label>
                    <Textarea
                      id="question-text"
                      placeholder="Напишите ваш вопрос подробно..."
                      value={formData.question}
                      onChange={(e) => setFormData({...formData, question: e.target.value})}
                      required
                      rows={6}
                      className="mt-2 resize-none"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full font-semibold text-lg">
                    Отправить вопрос
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <Card className="text-center p-4 border-2 hover:border-primary transition-colors">
                <Icon name="MapPin" size={32} className="mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">Центр Москвы</p>
              </Card>
              
              <Card className="text-center p-4 border-2 hover:border-secondary transition-colors">
                <Icon name="Car" size={32} className="mx-auto mb-2 text-secondary" />
                <p className="text-sm font-semibold">Парковка</p>
              </Card>
              
              <Card className="text-center p-4 border-2 hover:border-accent transition-colors">
                <Icon name="Wifi" size={32} className="mx-auto mb-2 text-accent" />
                <p className="text-sm font-semibold">Бесплатный Wi-Fi</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsForm;
