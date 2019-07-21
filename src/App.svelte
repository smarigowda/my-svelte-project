<script>
  import Product from "./Product.svelte";
  export let name;
  export let age;
  let productTitle = "A Book";
</script>

<Product
  {productTitle}
  on:add-to-cart={() => {
    alert('add to cart button clicked...  ');
  }}
  on:delete={() => alert('delete button clicked...')} />
