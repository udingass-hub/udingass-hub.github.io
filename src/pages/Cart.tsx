import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-3xl font-bold mb-4">Keranjang Belanja Kosong</h1>
            <p className="text-muted-foreground mb-8">
              Belum ada produk di keranjang Anda. Mulai belanja sekarang!
            </p>
            <Button asChild size="lg" data-testid="button-shop-now">
              <Link to="/shop">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Mulai Belanja
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold" data-testid="text-cart-title">
              Keranjang Belanja ({totalItems} item)
            </h1>
            <Button
              variant="outline"
              onClick={clearCart}
              data-testid="button-clear-cart"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Kosongkan Keranjang
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} data-testid={`cart-item-${item.id}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1" data-testid={`text-item-name-${item.id}`}>
                              {item.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            data-testid={`button-remove-${item.id}`}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              data-testid={`button-decrease-${item.id}`}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-12 text-center" data-testid={`text-quantity-${item.id}`}>
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= item.stock}
                              data-testid={`button-increase-${item.id}`}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">
                              ${item.price} x {item.quantity}
                            </p>
                            <p className="text-lg font-bold text-primary" data-testid={`text-subtotal-${item.id}`}>
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>

                        {item.quantity >= item.stock && (
                          <p className="text-xs text-destructive mt-2">
                            Stok maksimal: {item.stock} unit
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Ringkasan Pesanan</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal ({totalItems} item)</span>
                      <span className="font-medium" data-testid="text-subtotal">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ongkos Kirim</span>
                      <span className="font-medium text-green-600">Gratis</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary" data-testid="text-total">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full mb-3" size="lg" data-testid="button-checkout">
                    Checkout
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full"
                    data-testid="button-continue-shopping"
                  >
                    <Link to="/shop">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Lanjut Belanja
                    </Link>
                  </Button>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      💡 <strong>Gratis ongkir</strong> untuk pembelian di atas $50
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
