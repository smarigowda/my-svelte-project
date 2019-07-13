<script>
  export let name;
  export let age;
  export let upperName;
  function incAge() {
    age++;
  }
  const decAge = () => age--;
  $: upperName = name.toUpperCase();

  const changeName = () => {
    name = 'Roopa Santosh';
  }
</script>

<style>
  h1 {
    display: block;
    color: blueviolet;
    font-weight: 200;
    margin-top: 50px;
  }
  .container {
    margin: 0 auto;
    text-align: center;
  }
  button {
    outline: none;
    border: none;
    padding: 13px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    color: white;
    background-color: blueviolet;
    font-weight: 100;
    cursor: pointer;
    border: 1px solid blueviolet;
  }
  button:hover {
    background-color: white;
    color: blueviolet;
    border: 1px solid blueviolet;
  }
</style>

<div class="container">
  <h1>Hello... {name.toUpperCase()}, {age}!</h1>
  <h1>Reactive... {upperName}, {age}!</h1>
  <h1>Welcome to Svelte...!</h1>
  <button on:click={incAge}>Increase</button>
  <button on:click={decAge}>Decrease</button>

  <button on:click={changeName}>Change Name</button>
</div>
