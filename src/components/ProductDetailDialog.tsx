import { useState, useEffect } from "react";
import { Product } from "@/data/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Plus, Minus, Check, Package } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductDetailDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProductDetailDialog = ({
  product,
  open,
  onOpenChange,
}: ProductDetailDialogProps) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product, open]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="dialog-product-detail">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2" data-testid="text-product-name">
                {product.name}
              </DialogTitle>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" data-testid="badge-category">{product.category}</Badge>
                {product.badge && (
                  <Badge className="bg-accent text-accent-foreground" data-testid="badge-status">
                    {product.badge}
                  </Badge>
                )}
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary" data-testid="text-price">
                ${product.price}
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1" data-testid="text-stock">
                <Package className="h-4 w-4" />
                {product.stock} tersedia
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                data-testid="img-product"
              />
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  data-testid="button-decrease-quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold w-12 text-center" data-testid="text-quantity">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stock}
                  data-testid="button-increase-quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                className="flex-1" 
                onClick={handleAddToCart}
                data-testid="button-add-to-cart"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Tambah ke Keranjang
              </Button>
            </div>
          </div>

          <div>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description" data-testid="tab-description">Deskripsi</TabsTrigger>
                <TabsTrigger value="features" data-testid="tab-features">Fitur</TabsTrigger>
                <TabsTrigger value="specs" data-testid="tab-specs">Spesifikasi</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Tentang Produk</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-description">
                    {product.description}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-2">
                <h3 className="font-semibold mb-3">Fitur Utama</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-2"
                      data-testid={`feature-${index}`}
                    >
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="specs" className="space-y-2">
                <h3 className="font-semibold mb-3">Spesifikasi Teknis</h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index} data-testid={`spec-${index}`}>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm font-medium">{spec.label}</span>
                        <span className="text-sm text-muted-foreground">{spec.value}</span>
                      </div>
                      {index < product.specifications.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
