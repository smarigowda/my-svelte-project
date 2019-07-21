<script>
  import { createEventDispatcher } from "svelte";
  export let title;
  export let price;
//   export let bestseller = false;
  export let bestseller = true;
  const dispatch = createEventDispatcher();
</script>

<article>
  <h1>{title}</h1>
  <p>${price}</p>
  {#if bestseller}
  <h1>BEST SELLER ICON</h1>
  {/if}
  <button
    on:click={() => {
      dispatch('add-to-cart', { id: '789-987-987' });
    }}>
    Add To Cart
  </button>
  <button
    on:click={() => {
      dispatch('delete', { id: '787-565-987' });
    }}>
    Delete
  </button>
</article>
