import { writable } from "svelte/store";

const products = writable([
  {
    id: "p3",
    title: "A Book p3",
    price: 9.99,
    description: "A great book!"
  },
  {
    id: "p4",
    title: "A Carpet p4",
    price: 99.99,
    description: "Red and green."
  },
  {
    id: "p1",
    title: "Test p1",
    price: 9.99,
    description: "A Violin."
  },
  {
    id: "p2",
    title: "Test p2",
    price: 9.99,
    description: "A Guitar."

  }
]);

export default products;
