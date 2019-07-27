<script>
  import { createEventDispatcher } from "svelte";
  export let title;
  let dispatch = createEventDispatcher();

  function cancelModal() {
    dispatch("cancelmodal");
  }
</script>

<style lang="scss">
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
  .modal {
    z-index: 100;
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    overflow: scroll;
    & > h1 {
      text-align: center;
      margin: 0;
      padding: 3rem;
      border-bottom: 1px solid #ccc;
    }
  }
  .content {
    padding: 1rem;
  }
  footer {
      padding: 3rem;
      text-align: center;
  }
</style>

<div class="backdrop" on:click={cancelModal} />
<div class="modal">
  <h1>{title}</h1>
  <div class="content">
    <slot />
  </div>
  <footer>
    <slot name="footer" />
  </footer>
</div>
