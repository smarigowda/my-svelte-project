import { readable } from "svelte/store";

let count = 0;

export const timer = readable(count, set => {
  console.log("[timer-store] Subscribing to timer...");
  const interval = setInterval(() => {
    count++;
    set(count);
  }, 1000);
  // this is the un-subscribe function
  // which gets called when there are no more subscribers ?
  return () => {
    console.log("[timer-store] un-subscribe function called...");
    clearInterval(interval);
  };
});

// let times = 0;

// const unsubscribe = timer.subscribe(value => {
//     console.log(value);
// });

// setTimeout(() => {
//     unsubscribe();
// }, 15000);
