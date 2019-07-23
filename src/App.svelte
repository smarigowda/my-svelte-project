<script>
  import { tick } from "svelte";
  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";
  export let name;
  export let age;
  let showModal = false;
  let termsAgreed = false;

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

  let text = "Select some text and hit the tab key to toggle uppercase";

  async function handleKeydown(event) {
    if (event.which !== 9) return;
    console.log("tab key pressed...");
    event.preventDefault();
    console.dir(this);
    const { value, selectionStart, selectionEnd } = this;
    const selection = value.slice(selectionStart, selectionEnd);
    const replacement = /[a-z]/.test(selection)
      ? selection.toUpperCase()
      : selection.toLowerCase();
    console.log(replacement);

    text =
      value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

    // DOM update (which is the next micro task) will be completed when this gets resolved.
    await tick();

    // without tick, the below code runs before the DOM update.
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }
</script>

<style>
  button:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
</style>

{#each products as product}
  <Product {...product} on:add-to-cart={addToCart} on:delete={removeFromCart} />
{/each}

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
  <Modal let:termsAgreed on:cancel={() => (showModal = false)}>
    <h1 slot="header">Hello !</h1>
    <h2>This works !!!</h2>
    <button on:click={() => (showModal = false)} disabled={!termsAgreed}>
      Confirm
    </button>
  </Modal>
{/if}

<textarea rows="10" value={text} on:keydown={handleKeydown} />
