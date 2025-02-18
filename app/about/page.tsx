import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Heart } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in food service delivery.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with clients to create their perfect event experience.'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Punctual, professional, and consistently exceeding expectations.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Bringing love and dedication to every dish we prepare.'
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          alt="Kitchen team at work"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Our Story</h1>
          <p className="mt-6 max-w-2xl text-lg">
            Crafting culinary experiences with passion and precision since 2012
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Lakshmi Ganapathi Catering</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2012,Lakshmi Ganapathi Catering has been at the forefront of innovative catering
              services in the region. What started as a small family business has grown into a
              full-service catering company, serving hundreds of events annually.
            </p>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence, attention to detail, and passion for creating
              memorable dining experiences sets us apart. We believe that every event deserves
              exceptional food and service.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1555244162-803834f70033"
              alt="Catering presentation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}