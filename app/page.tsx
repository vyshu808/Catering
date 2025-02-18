import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Clock, Award, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033"
          alt="Catering spread"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Exceptional Catering
            <br />
            for Every Occasion
          </h1>
          <p className="mt-6 max-w-lg text-lg text-gray-200">
            From intimate gatherings to grand celebrations, we bring culinary excellence to your events.
          </p>
          <div className="mt-8 flex space-x-4">
            <Button size="lg" asChild>
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ChefHat,
                title: 'Expert Chefs',
                description: 'Culinary masters with years of experience',
              },
              {
                icon: Clock,
                title: 'Timely Service',
                description: 'Punctual delivery and setup guaranteed',
              },
              {
                icon: Award,
                title: 'Quality Food',
                description: 'Fresh ingredients and exquisite taste',
              },
              {
                icon: Users,
                title: 'Custom Menus',
                description: 'Tailored to your preferences',
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <feature.icon className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Featured Menu Items</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
                title: 'Lakshmi Ganapathi Appetizers',
                description: 'A selection of fine dine',
              },
              {
                image: 'https://www.jeyashriskitchen.com/wp-content/uploads/2016/01/hyderabadi-dum-biryani.jpg',
                title: 'Main Course',
                description: 'Exquisite  for every palate',
              },
              {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Nb_9txUG0E4-dopc4QMFkaqLKF27qVN3xw&s',
                title: 'Dessert Collection',
                description: 'Sweet endings to perfect meals',
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}