import { writable } from "svelte/store";

const cart = writable([], () => {
  console.log('Got a subscriber....');
  return () => {
    console.log('No more subs...');
  }
});

export default cart;
