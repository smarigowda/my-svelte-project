<script>
  import Product from "./Product.svelte";
  export let name;
  export let age;
  let productTitle = "A Book";
  function addToCart(event) {
    console.log(event);
  }
  function removeFromCart(event) {
    console.log(event);
  }
  const products = [
    {
      id: "676-987-654-876",
      title: "A Book",
      price: 9.99
    }
  ];
</script>

{#each products as product}
  <Product
    {...product}
    on:add-to-cart={addToCart}
    on:delete={removeFromCart} />
{/each}
