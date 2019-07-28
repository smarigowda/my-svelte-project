<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";
  let value = "";
  let number;
  let selectedOption = 2;
  let fruitsChecked = [];
  let fruits = ["apple", "orange", "banana"];
  $: console.log("value = ", value);
  $: console.log("number =", number);
  $: console.log("selectedOption =", selectedOption);
  $: console.log("fruitsChecked =", fruitsChecked);
</script>

<style lang="scss">
  .container {
      outline: none;
      & input {
        color: blue;
      }
  }
</style>

<div class="container">
  <h1>Hello...</h1>
  <!-- <input type="text" bind:value /> -->
  <hr />
  <label for="custominput">Custom Input</label>
  <CustomInput bind:value />
  <Toggle bind:choosenOption={selectedOption} />
  <hr />
  <label for="">Number Input</label>
  <input type="number" bind:value={number} />
  <hr />
  <h1>Checkboxes in Groups</h1>
  {#each fruits as fruit}
    <label for="">
      <input
        type="checkbox"
        name={fruit}
        value={fruit}
        bind:group={fruitsChecked} />
      {fruit}
    </label>
  {/each}
</div>
