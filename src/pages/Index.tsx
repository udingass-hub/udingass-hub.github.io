import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Truck, Shield, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";
import toolsImage from "@/assets/category-tools.jpg";
import paintImage from "@/assets/category-paint.jpg";
import buildingImage from "@/assets/category-building.jpg";
import gardenImage from "@/assets/category-garden.jpg";

const categories = [
  { name: "Power Tools", image: toolsImage, link: "/shop" },
  { name: "Paint & Supplies", image: paintImage, link: "/shop" },
  { name: "Building Materials", image: buildingImage, link: "/shop" },
  { name: "Garden & Outdoor", image: gardenImage, link: "/shop" },
];

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders over $50",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "30-day money-back guarantee",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "24/7 customer service available",
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="BuildMart Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Build Your Dreams
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Quality tools and materials for every project. From weekend DIY to professional construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button asChild size="lg" variant="hero">
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Link key={index} to={category.link}>
                  <Card className="group overflow-hidden hover:shadow-[var(--shadow-strong)] transition-all duration-300 cursor-pointer">
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert advice and quality materials delivered to your door
            </p>
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
