import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
//import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";

function CartSheet() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const itemCount = cart.reduce((count, item) => count + item.qte, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-white hover:bg-white/10 hover:text-white"
        >
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[380px] px-4 flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-1 items-center justify-center text-muted-foreground">
            Your cart is empty.
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto flex flex-col gap-4 mt-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b border-border pb-4"
              >
                <img
                  src={item.image}
                  alt={`${item.name}, ${item.country}`}
                  className="h-16 w-16 rounded-lg object-cover shrink-0"
                />

                <div className="flex flex-1 flex-col gap-1">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.country}
                  </p>
                  <p className="text-sm font-bold">${item.price}</p>

                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() =>
                        dispatch(
                          updateQuantity({ id: item.id, qte: item.qte - 1 }),
                        )
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm w-4 text-center">{item.qte}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() =>
                        dispatch(
                          updateQuantity({ id: item.id, qte: item.qte + 1 }),
                        )
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 ml-auto text-destructive hover:text-destructive"
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <SheetFooter className="border-t border-border pt-4 flex flex-col gap-3">
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;
