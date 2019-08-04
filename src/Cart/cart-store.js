import { writable } from "svelte/store";

const cart = writable([], () => {
  console.log("[cart-store] Got a subscriber....");
  return () => {
    console.log("[cart-store] No more subs...");
  };
});

export default {
  subscribe: cart.subscribe,
  update: newItem => {
    cart.update(items => {
      console.log(`[cart-store]`, items);
      return [...items, newItem];
    });
  }
};
