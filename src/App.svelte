<script>
  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";
  export let name;
  export let age;
  let showModal = false;

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
  <Product {...product} on:add-to-cart={addToCart} on:delete={removeFromCart} />
{/each}

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
  <Modal on:cancel={() => (showModal = false)}>
    <h1 slot="header">Hello !</h1>
    <h2>This works !!!</h2>
    <button on:click={() => (showModal = false)}>Confirm</button>
  </Modal>
{/if}
