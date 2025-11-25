import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const organizationStructure = [
    { position: 'Генеральный директор', name: 'Иванов Иван Иванович', department: 'Руководство', phone: '+7 (495) 123-45-67' },
    { position: 'Технический директор', name: 'Петров Петр Петрович', department: 'Руководство', phone: '+7 (495) 123-45-68' },
    { position: 'Коммерческий директор', name: 'Сидорова Анна Сергеевна', department: 'Руководство', phone: '+7 (495) 123-45-69' },
    { position: 'Главный инженер', name: 'Козлов Михаил Александрович', department: 'Технический отдел', phone: '+7 (495) 123-45-70' },
    { position: 'Начальник производства', name: 'Смирнов Алексей Николаевич', department: 'Производство', phone: '+7 (495) 123-45-71' },
    { position: 'Начальник отдела качества', name: 'Морозова Елена Владимировна', department: 'Контроль качества', phone: '+7 (495) 123-45-72' },
    { position: 'Начальник отдела снабжения', name: 'Волков Дмитрий Игоревич', department: 'Снабжение', phone: '+7 (495) 123-45-73' },
    { position: 'Начальник отдела продаж', name: 'Новикова Ольга Петровна', department: 'Продажи', phone: '+7 (495) 123-45-74' },
  ];

  const products = [
    { name: 'Металлоконструкции', description: 'Производство сварных металлоконструкций любой сложности' },
    { name: 'Станки и оборудование', description: 'Изготовление промышленного оборудования на заказ' },
    { name: 'Запасные части', description: 'Производство деталей по чертежам заказчика' },
    { name: 'Механическая обработка', description: 'Токарные, фрезерные и шлифовальные работы' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2">
            <Icon name="Factory" size={32} className="text-primary" />
            <div>
              <h1 className="text-lg font-bold">АО «СМПП»</h1>
              <p className="text-xs text-muted-foreground">Ступинское машиностроительное производственное предприятие</p>
            </div>
          </div>
          <nav className="ml-auto flex gap-6">
            <Button variant={activeSection === 'home' ? 'default' : 'ghost'} onClick={() => setActiveSection('home')}>
              Главная
            </Button>
            <Button variant={activeSection === 'about' ? 'default' : 'ghost'} onClick={() => setActiveSection('about')}>
              О компании
            </Button>
            <Button variant={activeSection === 'structure' ? 'default' : 'ghost'} onClick={() => setActiveSection('structure')}>
              Структура
            </Button>
            <Button variant={activeSection === 'products' ? 'default' : 'ghost'} onClick={() => setActiveSection('products')}>
              Продукция
            </Button>
            <Button variant={activeSection === 'contacts' ? 'default' : 'ghost'} onClick={() => setActiveSection('contacts')}>
              Контакты
            </Button>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center space-y-4 py-12">
              <h2 className="text-5xl font-bold">Ступинское машиностроительное производственное предприятие</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ведущее предприятие по производству металлоконструкций и промышленного оборудования с 1960 года
              </p>
              <div className="flex justify-center gap-4 pt-6">
                <Button size="lg" onClick={() => setActiveSection('products')}>
                  Наша продукция
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('contacts')}>
                  Связаться с нами
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="Award" size={40} className="text-primary mb-4" />
                  <CardTitle>60+ лет опыта</CardTitle>
                  <CardDescription>Более шести десятилетий на рынке машиностроения</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="Users" size={40} className="text-primary mb-4" />
                  <CardTitle>500+ сотрудников</CardTitle>
                  <CardDescription>Высококвалифицированная команда профессионалов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="TrendingUp" size={40} className="text-primary mb-4" />
                  <CardTitle>1000+ проектов</CardTitle>
                  <CardDescription>Успешно реализованных заказов по всей России</CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold">О компании</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>История</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    АО «Ступинское машиностроительное производственное предприятие» основано в 1960 году. 
                    За годы работы предприятие стало одним из ведущих производителей металлоконструкций 
                    и промышленного оборудования в регионе. Наше предприятие оснащено современным оборудованием 
                    и использует передовые технологии производства.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Наша миссия — предоставлять клиентам высококачественную продукцию машиностроения, 
                    которая соответствует самым строгим стандартам качества и безопасности. 
                    Мы стремимся к постоянному развитию и внедрению инновационных решений в производственный процесс.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Наши преимущества</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Современное оборудование</h3>
                      <p className="text-sm text-muted-foreground">Парк высокоточных станков с ЧПУ</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Контроль качества</h3>
                      <p className="text-sm text-muted-foreground">Многоступенчатая система проверки продукции</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Опытные специалисты</h3>
                      <p className="text-sm text-muted-foreground">Квалифицированные инженеры и рабочие</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Гибкие условия</h3>
                      <p className="text-sm text-muted-foreground">Индивидуальный подход к каждому заказу</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'structure' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-2">Организационная структура</h2>
              <p className="text-muted-foreground">Руководство и ключевые сотрудники предприятия</p>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">Должность</TableHead>
                        <TableHead className="font-bold">ФИО</TableHead>
                        <TableHead className="font-bold">Подразделение</TableHead>
                        <TableHead className="font-bold">Телефон</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {organizationStructure.map((employee, index) => (
                        <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                          <TableCell className="font-medium">{employee.position}</TableCell>
                          <TableCell>{employee.name}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              {employee.department}
                            </span>
                          </TableCell>
                          <TableCell className="text-muted-foreground">{employee.phone}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'products' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-2">Наша продукция</h2>
              <p className="text-muted-foreground">Широкий спектр услуг и изделий машиностроения</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Package" className="text-primary" />
                      {product.name}
                    </CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Индивидуальные заказы</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Мы готовы выполнить производство по вашим чертежам и техническим заданиям
                </CardDescription>
              </CardContent>
              <CardContent>
                <Button variant="secondary" size="lg" onClick={() => setActiveSection('contacts')}>
                  Отправить запрос
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-2">Контакты</h2>
              <p className="text-muted-foreground">Свяжитесь с нами удобным способом</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-sm text-muted-foreground">142800, Московская область, г. Ступино, ул. Промышленная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-68</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">info@smpp.ru</p>
                      <p className="text-sm text-muted-foreground">sales@smpp.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 8:00 - 17:00</p>
                      <p className="text-sm text-muted-foreground">Сб-Вс: Выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input type="email" className="w-full px-3 py-2 border rounded-md" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <textarea className="w-full px-3 py-2 border rounded-md min-h-[100px]" placeholder="Опишите ваш запрос..." />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t mt-12">
        <div className="container py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Factory" size={24} className="text-primary" />
                <h3 className="font-bold">АО «СМПП»</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Ступинское машиностроительное производственное предприятие
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => setActiveSection('about')} className="block text-muted-foreground hover:text-primary transition-colors">О компании</button>
                <button onClick={() => setActiveSection('structure')} className="block text-muted-foreground hover:text-primary transition-colors">Структура</button>
                <button onClick={() => setActiveSection('products')} className="block text-muted-foreground hover:text-primary transition-colors">Продукция</button>
                <button onClick={() => setActiveSection('contacts')} className="block text-muted-foreground hover:text-primary transition-colors">Контакты</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>г. Ступино, ул. Промышленная, д. 1</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@smpp.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 АО «Ступинское машиностроительное производственное предприятие». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
