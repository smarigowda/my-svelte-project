<script>
  export let name;
  export let age;
  function incAge() {
    age++;
  }
  const decAge = () => age--;
</script>

<style>
  h1 {
    display: block;
    color: purple;
    font-weight: 200;
    margin-top: 50px;
  }
  .container {
    margin: 0 auto;
    text-align: center;
  }
</style>

<div class="container">
  <h1>Hello... {name}, {age}!</h1>
  <h1>Welcome to Svelte...!</h1>
  <button on:click={incAge}>Increase</button>
  <button on:click={decAge}>Decrease</button>
</div>
