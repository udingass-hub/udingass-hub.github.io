import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Paintbrush, Hammer, TreePine, Ruler, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Tool Rental",
    description: "Access professional-grade tools without the commitment. Daily, weekly, and monthly rental options available.",
    features: ["Professional equipment", "Flexible rental periods", "Expert guidance"],
  },
  {
    icon: Paintbrush,
    title: "Paint Consultation",
    description: "Get expert advice on colors, finishes, and techniques. Our specialists help bring your vision to life.",
    features: ["Color matching", "Finish recommendations", "Free samples"],
  },
  {
    icon: Hammer,
    title: "Installation Services",
    description: "Professional installation for flooring, cabinets, fixtures, and more. Licensed and insured contractors.",
    features: ["Licensed professionals", "Quality guarantee", "Timely completion"],
  },
  {
    icon: TreePine,
    title: "Landscaping Design",
    description: "Transform your outdoor space with custom landscaping plans and expert planting services.",
    features: ["Custom designs", "Plant selection", "Maintenance tips"],
  },
  {
    icon: Ruler,
    title: "Project Planning",
    description: "Free consultations to help plan your project from start to finish. Material estimates and timelines included.",
    features: ["Material calculations", "Timeline planning", "Budget guidance"],
  },
  {
    icon: Lightbulb,
    title: "Workshop Classes",
    description: "Learn new skills with hands-on workshops. From basic repairs to advanced techniques.",
    features: ["Expert instruction", "Hands-on practice", "All skill levels"],
  },
];

const Services = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Expert support for every step of your project
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6" variant="outline">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our experts today. We're here to help make your vision a reality.
            </p>
            <Button size="lg" variant="accent">
              Schedule Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
