import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, ShieldCheck, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We only stock products that meet our rigorous quality standards",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our staff brings decades of combined experience in home improvement",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Reliability",
    description: "Building lasting relationships through honest service and fair pricing",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Constantly updating our inventory with the latest tools and techniques",
  },
];

const stats = [
  { number: "25+", label: "Years in Business" },
  { number: "50K+", label: "Happy Customers" },
  { number: "10K+", label: "Products Available" },
  { number: "98%", label: "Satisfaction Rate" },
];

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About BuildMart</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Your trusted partner in home improvement for over 25 years
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                BuildMart began with a simple mission: to provide homeowners and professionals with access to quality tools and materials at fair prices. What started as a small family business has grown into a trusted regional leader in home improvement supplies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we serve thousands of customers with an extensive inventory, expert advice, and a commitment to customer satisfaction that has remained unchanged since day one.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our knowledgeable staff is here to help with every project, big or small. From selecting the right tools to planning complex renovations, we're committed to your success.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
