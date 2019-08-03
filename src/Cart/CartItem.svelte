<script>
  import Button from "../UI/Button.svelte";
  import cartItems from "../Cart/cart-store.js";
  import productsStore from "../Products/products-store.js";

  export let title;
  export let price;
  export let id;
  export let description;

  let showDescription = false;

  function displayDescription() {
    showDescription = !showDescription;
    let unsubscribe;
    if (showDescription) {
      // subscribe
      unsubscribe = productsStore.subscribe(data => {
        console.log('data....', data);
        console.log('id = ', id);
        description = data.find((item) => item.id === id).description;
        console.log('description = ', description);
      });
    } else {
      unsubscribe && unsubscribe();
      // un-subscribe
    }
  }

  function removeFromCart() {
    cartItems.update(data => {
      data = data.filter(d => {
        return d.id !== id;
      });
      return data;
    });
  }
</script>

<style>
  li {
    margin: 1rem 0;
    border-radius: 5px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }

  h1,
  h2 {
    font-size: 1rem;
    margin: 0;
  }

  h2 {
    color: #494949;
    margin-bottom: 1rem;
  }
</style>

<li>
  <h1>{title}</h1>
  <h2>{price}</h2>
  <Button mode="outline" on:click={displayDescription}>
    {showDescription ? 'Hide Description' : 'Show Description'}
  </Button>
  <Button on:click={removeFromCart} mode="outline">Remove from Cart</Button>
  {#if showDescription}
    <p>{description}</p>
  {/if}
</li>
