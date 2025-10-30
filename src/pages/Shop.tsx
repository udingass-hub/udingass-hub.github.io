import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import toolsImage from "@/assets/category-tools.jpg";
import paintImage from "@/assets/category-paint.jpg";
import buildingImage from "@/assets/category-building.jpg";
import gardenImage from "@/assets/category-garden.jpg";

const products = [
  { id: 1, name: "Professional Power Drill", category: "Tools", price: 129.99, image: toolsImage, badge: "Bestseller" },
  { id: 2, name: "Premium Paint Set", category: "Paint", price: 89.99, image: paintImage, badge: "New" },
  { id: 3, name: "Quality Lumber Pack", category: "Building", price: 199.99, image: buildingImage },
  { id: 4, name: "Garden Tool Kit", category: "Garden", price: 79.99, image: gardenImage, badge: "Sale" },
  { id: 5, name: "Cordless Drill Set", category: "Tools", price: 159.99, image: toolsImage },
  { id: 6, name: "Interior Paint Combo", category: "Paint", price: 119.99, image: paintImage, badge: "Popular" },
  { id: 7, name: "Construction Materials", category: "Building", price: 249.99, image: buildingImage },
  { id: 8, name: "Professional Garden Set", category: "Garden", price: 149.99, image: gardenImage },
];

const categories = ["All", "Tools", "Paint", "Building", "Garden"];

const Shop = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Our Products</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Discover quality tools, materials, and supplies for all your projects
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b bg-background py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 items-center">
              <span className="font-semibold text-sm">Categories:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold mb-2 text-base">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">${product.price}</span>
                      <Button size="sm" variant="default">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
