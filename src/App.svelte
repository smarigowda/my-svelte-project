<script>
  let value = '';
  $: console.log('value = ', value);
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
  <input type="text" bind:value />
</div>
