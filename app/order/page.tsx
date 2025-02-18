'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, CreditCard, Banknote } from 'lucide-react';

type OrderStep = 'login' | 'details' | 'payment';

export default function OrderPage() {
  const [currentStep, setCurrentStep] = useState<OrderStep>('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [orderDetails, setOrderDetails] = useState({
    address: '',
    city: '',
    pincode: '',
    phone: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('online');

  // Dummy cart data - in a real app, this would come from your cart state
  const cartItems = [
    { name: 'Gobi Manchuria', quantity: 2, price: '80 Rs' },
    { name: 'Paneer Manchuria', quantity: 1, price: '130 Rs' }
  ];

  const totalAmount = 290; // In a real app, calculate this from cart items

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically authenticate the user
    console.log('Login:', loginData);
    setCurrentStep('details');
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the payment processing
    console.log('Payment submitted:', { paymentMethod, orderDetails });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033"
          alt="Place your order"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl">Complete Your Order</h1>
          <p className="mt-4 max-w-xl text-lg">
            Just a few steps to complete your order
          </p>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order Steps */}
          <div className="md:col-span-2">
            {currentStep === 'login' && (
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Login</h2>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) =>
                          setLoginData({ ...loginData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={loginData.password}
                        onChange={(e) =>
                          setLoginData({ ...loginData, password: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Continue</Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {currentStep === 'details' && (
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Delivery Details</h2>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDetailsSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Delivery Address</Label>
                      <Input
                        id="address"
                        value={orderDetails.address}
                        onChange={(e) =>
                          setOrderDetails({ ...orderDetails, address: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={orderDetails.city}
                          onChange={(e) =>
                            setOrderDetails({ ...orderDetails, city: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">PIN Code</Label>
                        <Input
                          id="pincode"
                          value={orderDetails.pincode}
                          onChange={(e) =>
                            setOrderDetails({ ...orderDetails, pincode: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={orderDetails.phone}
                        onChange={(e) =>
                          setOrderDetails({ ...orderDetails, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Continue to Payment</Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {currentStep === 'payment' && (
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Payment</h2>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <Tabs
                      defaultValue="online"
                      value={paymentMethod}
                      onValueChange={(value) => setPaymentMethod(value as 'online' | 'cod')}
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="online">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Online Payment
                        </TabsTrigger>
                        <TabsTrigger value="cod">
                          <Banknote className="mr-2 h-4 w-4" />
                          Cash on Delivery
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="online" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="card">Card Number</Label>
                          <Input id="card" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="cod">
                        <p className="text-muted-foreground">
                          Pay with cash when your order is delivered.
                        </p>
                      </TabsContent>
                    </Tabs>
                    <Button type="submit" className="w-full">
                      Place Order
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold">Order Summary</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium">{item.price}</p>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total Amount</span>
                      <span>{totalAmount} Rs</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}