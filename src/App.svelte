<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";
  let value = "";
  let number;
  let selectedOption = 2;
  let orangeChecked = true;
  $: console.log("value = ", value);
  $: console.log("number =", number);
  $: console.log("selectedOption =", selectedOption);
  $: console.log("orangeChecked =", orangeChecked);
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
  <CustomInput bind:value />
  <Toggle bind:choosenOption={selectedOption} />
  <hr />
  <label for="">Number Input</label>
  <input type="number" bind:value={number} />
  <hr />
  <h1>Checkbox</h1>
  <label for="">
    <input type="checkbox" bind:checked={orangeChecked}/>
    Check Orange
  </label>
</div>
