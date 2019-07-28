<script>
  export let choosenOption = 1;
  $: console.log('choosenOption =', choosenOption);
</script>

<style>
[disabled] {
    color: gray;
}

</style>

<div>
  <button disabled={choosenOption !== 1} on:click={ () => { choosenOption = 2}}>Choose Option 2</button>
  <button disabled={choosenOption !== 2} on:click={ () => { choosenOption = 1}}>Choose Option 1</button>
  <label>Choosen Option = {choosenOption}</label>
</div>
