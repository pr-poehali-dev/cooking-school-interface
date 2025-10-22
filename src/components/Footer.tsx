import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-50 to-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Icon name="ChefHat" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">Кулинарная Школа</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Научим готовить блюда мировой кухни под руководством профессионалов
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Курсы</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#courses" className="hover:text-primary transition-colors">Итальянская кухня</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary transition-colors">Азиатская кухня</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary transition-colors">Французская выпечка</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary transition-colors">Мясные блюда</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary transition-colors">Здоровое питание</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary transition-colors">Авторская кухня</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
              </li>
              <li>
                <a href="#questions" className="hover:text-primary transition-colors">Вопросы и ответы</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">О школе</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Наши преподаватели</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Галерея</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>г. Москва, ул. Кулинарная, д. 15</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={20} className="text-primary mt-1 flex-shrink-0" />
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={20} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@cooking-school.ru" className="hover:text-primary transition-colors">
                  info@cooking-school.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Пн-Вс: 09:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Школа Кулинарного Искусства. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
