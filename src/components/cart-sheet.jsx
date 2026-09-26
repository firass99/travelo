// cart-sheet.jsx
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";
import CartItems from "./cart-items";
//import cartItems from "./cart-items";

function CartSheet() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const itemCount = cart.reduce((count, item) => count + item.qte, 0);
  const dispatch = useDispatch();

  // Stable references across renders — required for React.memo on CartItem to actually help
  const handleIncrement = useCallback(
    (id, qte) => dispatch(updateQuantity({ id, qte: qte + 1 })),
    [dispatch],
  );

  const handleDecrement = useCallback(
    (id, qte) => dispatch(updateQuantity({ id, qte: qte - 1 })),
    [dispatch],
  );

  const handleRemove = useCallback(
    (id) => dispatch(removeFromCart({ id })),
    [dispatch],
  );

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="relative text-white hover:bg-white/10 hover:text-white"
          />
        }
      >
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
            {itemCount}
          </span>
        )}
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[380px] px-4 flex flex-col"
        showCloseButton={false}
      >
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
              <CartItems
                key={item.id}
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onRemove={handleRemove}
              />
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
