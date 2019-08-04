import { writable } from "svelte/store";

const cart = writable([], () => {
  console.log("[cart-store] Got a subscriber....");
  return () => {
    console.log("[cart-store] No more subs...");
  };
});

export default {
  subscribe: cart.subscribe,
  addToCart: newItem => {
    cart.update(items => {
      console.log(`[cart-store]`, items);
      return [...items, newItem];
    });
  },
  removeFromCart: id => {
    console.log('[cart-store] removing item with id =', id);
    cart.update(items => {
      let data = items.filter(d => {
        return d.id !== id;
      });
      return data;
    });
  }
};
