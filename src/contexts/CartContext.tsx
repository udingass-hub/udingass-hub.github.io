import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "@/data/products";
import { toast } from "@/hooks/use-toast";

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return [];
    }
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [items]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stock) {
          toast({
            title: "Stok tidak cukup",
            description: `Hanya tersedia ${product.stock} unit`,
            variant: "destructive",
          });
          return prevItems;
        }
        
        toast({
          title: "Jumlah diperbarui",
          description: `${product.name} (${newQuantity} unit)`,
        });
        
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else {
        if (quantity > product.stock) {
          toast({
            title: "Stok tidak cukup",
            description: `Hanya tersedia ${product.stock} unit`,
            variant: "destructive",
          });
          return prevItems;
        }
        
        toast({
          title: "Ditambahkan ke keranjang",
          description: `${product.name} (${quantity} unit)`,
        });
        
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === productId);
      if (item) {
        toast({
          title: "Dihapus dari keranjang",
          description: item.name,
        });
      }
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === productId) {
          if (quantity > item.stock) {
            toast({
              title: "Stok tidak cukup",
              description: `Hanya tersedia ${item.stock} unit`,
              variant: "destructive",
            });
            return item;
          }
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Keranjang dikosongkan",
      description: "Semua item telah dihapus",
    });
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
