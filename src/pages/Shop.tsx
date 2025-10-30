import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ShoppingCart } from "lucide-react";
import { products, Product } from "@/data/products";
import { ProductDetailDialog } from "@/components/ProductDetailDialog";
import { useCart } from "@/contexts/CartContext";

const categories = ["All", "Tools", "Paint", "Building", "Garden"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleQuickAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

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
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3" data-testid="text-product-count">
              Menampilkan {filteredProducts.length} produk
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden hover:shadow-[var(--shadow-strong)] transition-all duration-300 cursor-pointer"
                  onClick={() => handleViewDetails(product)}
                  data-testid={`card-product-${product.id}`}
                >
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
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="gap-2"
                        data-testid={`button-view-details-${product.id}`}
                      >
                        <Eye className="h-4 w-4" />
                        Lihat Detail
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold mb-2 text-base line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
                          ${product.price}
                        </span>
                        <p className="text-xs text-muted-foreground">Stok: {product.stock}</p>
                      </div>
                      <Button 
                        size="sm" 
                        variant="default"
                        onClick={(e) => handleQuickAddToCart(product, e)}
                        data-testid={`button-quick-add-${product.id}`}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <ProductDetailDialog
        product={selectedProduct}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
};

export default Shop;
