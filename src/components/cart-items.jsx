// cart-item.jsx
import { memo } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="flex gap-3 border-b border-border pb-4">
      <img
        src={item.image}
        alt={`${item.name}, ${item.country}`}
        className="h-16 w-16 rounded-lg object-cover shrink-0"
      />

      <div className="flex flex-1 flex-col gap-1">
        <p className="font-semibold text-sm">{item.name}</p>
        <p className="text-xs text-muted-foreground">{item.country}</p>
        <p className="text-sm font-bold">${item.price}</p>

        <div className="flex items-center gap-2 mt-1">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => onDecrement(item.id, item.qte)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="text-sm w-4 text-center">{item.qte}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => onIncrement(item.id, item.qte)}
          >
            <Plus className="h-3 w-3" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 ml-auto text-destructive hover:text-destructive"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// memo() skips re-rendering this row if its props are shallowly equal to last time
export default memo(CartItem);
