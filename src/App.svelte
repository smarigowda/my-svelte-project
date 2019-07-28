<script>
  import CustomInput from "./CustomInput.svelte";
  let value = "";
  $: console.log("value = ", value);
</script>

<style lang="scss">
  .container {
    & > input {
      outline: none;
    }
  }
</style>

<div class="container">
  <h1>Hello...</h1>
  <!-- <input type="text" bind:value /> -->
  <hr />
  <label for="custominput">Custom Input</label>
  <CustomInput bind:value/>
</div>
