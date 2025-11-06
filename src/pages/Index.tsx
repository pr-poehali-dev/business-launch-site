import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const features = [
    {
      icon: 'Layout',
      title: 'Сайт-визитка / Блог',
      description: 'Профессиональное онлайн-представительство вашего бизнеса с возможностью ведения блога'
    },
    {
      icon: 'ShoppingCart',
      title: 'Интернет-магазин',
      description: 'Полнофункциональный магазин с каталогом товаров, корзиной и приёмом платежей'
    },
    {
      icon: 'Calendar',
      title: 'Бронирование услуг',
      description: 'Система онлайн-записи и управления бронированиями для сервисного бизнеса'
    },
    {
      icon: 'GraduationCap',
      title: 'Онлайн-курсы',
      description: 'Платформа для создания и продажи образовательных программ и вебинаров'
    }
  ];

  const plans = [
    {
      name: 'Старт',
      price: '490',
      period: 'месяц',
      description: 'Сайт-визитка, блог',
      features: ['Адаптивный дизайн', 'Базовое SEO', 'Форма обратной связи', 'SSL-сертификат'],
      popular: false
    },
    {
      name: 'Профи',
      price: '1 490',
      period: 'месяц',
      description: 'Интернет-магазин',
      features: ['Всё из тарифа Старт', 'Каталог товаров', 'Корзина покупок', 'Интеграция платежей', 'Управление заказами'],
      popular: true
    },
    {
      name: 'Премиум',
      price: '2 990',
      period: 'месяц',
      description: 'Все возможности',
      features: ['Всё из тарифа Профи', 'Система бронирования', 'Платформа курсов', 'CRM-система', 'Приоритетная поддержка'],
      popular: false
    }
  ];

  const additionalServices = [
    { name: 'Регистрация домена', price: '990', period: 'год' },
    { name: 'Премиум шаблоны', price: '2 900', period: 'единица' },
    { name: 'Юридический пакет документов', price: '3 900', period: 'комплект' },
    { name: 'Прием онлайн-платежей', price: '2.5%', period: 'от оборота' },
    { name: 'Email-рассылки (база до 1000)', price: '590', period: 'месяц' },
    { name: 'SMS-уведомления', price: '2.50', period: '1 SMS' }
  ];

  const courses = [
    { name: 'Курс "Запуск онлайн-бизнеса"', price: '9 900', period: 'курс' },
    { name: 'Индивидуальная консультация', price: '3 900', period: 'час' },
    { name: 'Настройка платформы "под ключ"', price: '14 900', period: 'проект' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Rocket" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-foreground">БизнесСтарт</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Возможности
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('education')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Обучение
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </button>
              <Button>Начать</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">Платформа для предпринимателей</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Запустите онлайн-бизнес
              <br />
              <span className="text-primary">за 24 часа</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Всё необходимое для создания профессионального сайта, интернет-магазина или образовательной платформы без программирования
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('pricing')}>
                Выбрать тариф
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('features')}>
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Возможности платформы</h2>
            <p className="text-lg text-muted-foreground">Выберите подходящее решение для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Тарифные планы</h2>
            <p className="text-lg text-muted-foreground">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price} ₽</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Дополнительные услуги</h2>
            <p className="text-lg text-muted-foreground">Расширьте возможности вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-primary">{service.price} ₽</span>
                    <span className="text-sm text-muted-foreground">/{service.period}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Обучение и поддержка</h2>
            <p className="text-lg text-muted-foreground">Научим эффективно использовать платформу</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="BookOpen" className="text-secondary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{course.price} ₽</span>
                    <span className="text-muted-foreground">/{course.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">Узнать подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Ответим на все вопросы и поможем начать</p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Имя</label>
                    <Input placeholder="Иван Петров" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте" rows={5} />
                </div>
                <Button className="w-full" size="lg">Отправить заявку</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center">
                  <Icon name="Rocket" className="text-background" size={20} />
                </div>
                <span className="font-bold">БизнесСтарт</span>
              </div>
              <p className="text-sm text-background/70">Платформа быстрого запуска онлайн-бизнеса</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Продукт</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><button onClick={() => scrollToSection('features')}>Возможности</button></li>
                <li><button onClick={() => scrollToSection('pricing')}>Тарифы</button></li>
                <li><button onClick={() => scrollToSection('services')}>Услуги</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Компания</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#">О нас</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="#">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Поддержка</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#">Документация</a></li>
                <li><a href="#">FAQ</a></li>
                <li><button onClick={() => scrollToSection('contact')}>Контакты</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 text-center text-sm text-background/70">
            <p>&copy; 2024 БизнесСтарт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
