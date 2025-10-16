import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        '1,000 messages/month',
        'Basic AI responses',
        'Single WhatsApp number',
        '24/7 bot availability',
        'Email support',
        'Basic analytics',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Best for growing businesses',
      features: [
        '10,000 messages/month',
        'Advanced AI with context',
        'Up to 5 WhatsApp numbers',
        'Multiple group support',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'API access',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited messages',
        'Custom AI training',
        'Unlimited WhatsApp numbers',
        'Unlimited groups',
        'Dedicated account manager',
        'Custom analytics & reporting',
        'Full API access',
        'SLA guarantee',
        'On-premise option',
      ],
      highlighted: false,
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your <span className="text-gradient">Perfect Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start automating your WhatsApp conversations today. Order via WhatsApp for instant setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${
                  plan.highlighted 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20 scale-105' 
                    : 'border-purple-500/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <a href="https://wa.me/6281262813832" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                          : ''
                      }`}
                      variant={plan.highlighted ? 'default' : 'outline'}
                    >
                      Order on WhatsApp
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border border-purple-500/20 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
              <div className="border border-purple-500/20 rounded-lg p-6">
                <h3 className="font-semibold mb-2">What happens if I exceed my message limit?</h3>
                <p className="text-muted-foreground">We will notify you when you are approaching your limit. You can upgrade your plan or purchase additional message credits via WhatsApp.</p>
              </div>
              <div className="border border-purple-500/20 rounded-lg p-6">
                <h3 className="font-semibold mb-2">How do I order?</h3>
                <p className="text-muted-foreground">Simply click the Order on WhatsApp button and send us a message. We will guide you through the setup process instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


