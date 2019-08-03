<script>

  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
  import Button from "./UI/Button.svelte";
  import { timer } from './Store/timer-store.js';
  
  let showCart = true;
  const toggleCart = () => {
    showCart = !showCart;
  };

  timer.subscribe(data => {
    console.log('[App]',data);
  })
</script>

<Button on:click={toggleCart} mode="">Toggle Cart</Button>
{#if showCart}
  <Cart />
{/if}
<Products />
