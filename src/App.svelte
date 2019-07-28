<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";
  let customInputReference;
  let value = "";
  let number;
  let selectedOption = '---select an option from the list ---';
  let fruitsChecked = [];
  let radioOptionSelected = 'banana';
  let fruits = ["---select an option from the list ---", "apple", "orange", "banana"];
  $: console.log("value = ", value);
  $: console.log("radioOptionSelected = ", radioOptionSelected);
  $: console.log("number =", number);
  $: console.log("selectedOption =", selectedOption);
  $: console.log("fruitsChecked =", fruitsChecked);
  $: console.log('customInputReference', customInputReference);
  let inputRef;
  function getValueUsingRef() {
    console.log(inputRef.value);
  }
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
  <CustomInput bind:value bind:this={customInputReference} on:input={() => {
    console.log('--->', customInputReference.log());
  }}/>
  <!-- <Toggle bind:choosenOption={selectedOption} /> -->
  <hr />
  <label for="">Number Input</label>
  <input type="number" bind:value={number} />
  <hr />
  <h1>Checkboxes in Groups</h1>
  {#each fruits as fruit}
    <label for="">
      <input
        type="checkbox"
        name="fruit"
        value={fruit}
        bind:group={fruitsChecked} />
      {fruit}
    </label>
  {/each}
  <h1>Radio Group Input</h1>
  {#each fruits as fruit}
    <label for="">
      {fruit}
      <input type="radio" name="fruits" value={fruit} bind:group={radioOptionSelected}/>
    </label>
  {/each}
  <h1>Select Option Input</h1>
  <select bind:value={selectedOption}>
  {#each fruits as fruit}
    <option value={fruit}>{fruit}</option>
  {/each}
  </select>
  <hr>
  <h1>this binding</h1>
  <input type="text" bind:this={inputRef}>
  <button on:click={getValueUsingRef}>Show</button>
</div>
