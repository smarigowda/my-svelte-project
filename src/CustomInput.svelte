<script>
  export let value;
//   export let customInputReference;
  export function log () {
    console.log("logger function......");
  };
</script>

<input type="text" bind:value on:input />
