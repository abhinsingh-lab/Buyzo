import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { addItem, removeItem, updateQuantity, clearCart } from "../store/cartSlice";

/**
 * Exposes cart helpers to components. Leave TODOs........ to implement side-effects.
 */
export function useCart() {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((s: RootState) => s.cart);

  const add = useCallback(
    (item: { id: string; name?: string; price?: number; quantity: number }) => {
      // TODO : validate item, check inventory, optimistic UI
      dispatch(addItem(item));
    },
    [dispatch]
  );

  const remove = useCallback(
    (id: string) => {
      // TODO : show confirmation modal before removing
      dispatch(removeItem({ id }));
    },
    [dispatch]
  );

  const setQuantity = useCallback(
    (id: string, quantity: number) => {
      // TODO : debounce quantity updates to avoid spamming server
      dispatch(updateQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const clear = useCallback(() => dispatch(clearCart()), [dispatch]);

  return { cart, add, remove, setQuantity, clear };
}