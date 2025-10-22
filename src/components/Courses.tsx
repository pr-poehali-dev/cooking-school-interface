import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CoursesProps {
  onBookCourse: (courseName: string) => void;
}

const Courses = ({ onBookCourse }: CoursesProps) => {
  const courses = [
    {
      id: 1,
      name: "Итальянская кухня",
      icon: "Pizza",
      description: "Паста, пицца, ризотто и традиционные итальянские десерты",
      duration: "8 занятий",
      price: "25 000 ₽",
      level: "Для начинающих",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      name: "Азиатская кухня",
      icon: "Soup",
      description: "Суши, роллы, вок, димсамы и секреты восточной кулинарии",
      duration: "10 занятий",
      price: "28 000 ₽",
      level: "Средний уровень",
      color: "from-yellow-500 to-red-500"
    },
    {
      id: 3,
      name: "Французская выпечка",
      icon: "Croissant",
      description: "Круассаны, эклеры, макаруны и другие изысканные десерты",
      duration: "12 занятий",
      price: "32 000 ₽",
      level: "Для начинающих",
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 4,
      name: "Мясные блюда",
      icon: "Beef",
      description: "Стейки, запекание, тушение и секреты работы с мясом",
      duration: "6 занятий",
      price: "22 000 ₽",
      level: "Средний уровень",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      name: "Здоровое питание",
      icon: "Salad",
      description: "Салаты, смузи-боулы, веганские и ПП блюда",
      duration: "8 занятий",
      price: "24 000 ₽",
      level: "Для начинающих",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 6,
      name: "Авторская кухня",
      icon: "Sparkles",
      description: "Креативные техники, молекулярная кухня и fusion",
      duration: "15 занятий",
      price: "45 000 ₽",
      level: "Продвинутый",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-base px-4 py-2 bg-primary">Наши курсы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите своё направление</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            От классики до авторской кухни - научим готовить блюда любой сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
              <div className={`h-3 bg-gradient-to-r ${course.color}`}></div>
              
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center mb-4`}>
                  <Icon name={course.icon as any} size={32} className="text-white" />
                </div>
                
                <CardTitle className="text-2xl">{course.name}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span>{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="GraduationCap" size={18} />
                    <span>{course.level}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 font-bold text-2xl text-primary mt-4">
                    <Icon name="Wallet" size={24} />
                    <span>{course.price}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full font-semibold text-lg py-6" 
                  size="lg"
                  onClick={() => onBookCourse(course.name)}
                >
                  Записаться на курс
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white/20 rounded-full p-4">
                <Icon name="Gift" size={48} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold mb-2">Пробное занятие бесплатно!</h3>
                <p className="text-white/90">
                  Запишитесь на любой курс и получите первое занятие в подарок
                </p>
              </div>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-white/90 border-0 font-semibold"
              >
                Узнать подробнее
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Courses;
