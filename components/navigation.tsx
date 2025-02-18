'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();
  
  const routes = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <ChefHat className="h-6 w-6" />
          <span className="font-bold">Lakshmi Ganapathi</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === route.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {route.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/order">Order Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}