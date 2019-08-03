import { readable } from "svelte/store";
let count = 0;
export const timer = readable(count, set => {
  console.log("[timer-store] Subscribing to timer...");
  console.log('[timer-store] Initial value = ', count);
  const interval = setInterval(() => {
    set(count);
    count++;
  }, 1000);
  // this is the un-subscribe function
  // which gets called when there are no more subscribers ?
  return () => {
    console.log("[timer-store] un-subscribe function called...");
    count = 0;
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
