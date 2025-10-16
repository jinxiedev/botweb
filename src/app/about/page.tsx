import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Zap } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We build technology that puts your customers at the center of everything.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge AI solutions.',
    },
    {
      icon: Heart,
      title: 'Reliability',
      description: 'Trusted by thousands of businesses for mission-critical communications.',
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Fast responses, quick setup, and instant results for your business.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Jinxie Bot</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are revolutionizing WhatsApp communication with AI-powered automation
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Jinxie Bot was born from a simple observation: businesses were drowning in WhatsApp messages, 
                    unable to respond to every customer inquiry quickly and efficiently.
                  </p>
                  <p>
                    We set out to build an AI assistant that could handle conversations naturally, understand context, 
                    and provide instant responses 24/7. Today, we power thousands of businesses worldwide, 
                    processing millions of messages every month.
                  </p>
                  <p>
                    Our mission is to make advanced AI accessible to businesses of all sizes, helping them 
                    provide better customer service while saving time and resources.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 flex flex-col items-center justify-center p-8">
                  <img 
                    src="https://up.lauma.icu/k3cvdh.avif" 
                    alt="Jinxie Bot" 
                    className="w-32 h-32 object-contain mb-8"
                  />
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gradient mb-4">10k+</div>
                    <div className="text-xl text-muted-foreground">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-purple-500/20 text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 p-2.5 mb-4 mx-auto">
                      <value.icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-purple-500/20 py-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">5M+</div>
              <div className="text-sm text-muted-foreground">Messages Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


