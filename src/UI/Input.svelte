<script>
  export let id;
  export let label;
  export let value;
  export let type;
  export let rows;
</script>

<style>
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 1rem;
    transition: border-color 0.1s ease-out;
  }

  input:focus,
  textarea:focus {
    border-color: #e40763;
    outline: none;
  }

  label {
    display: block;
    margin: 0.5rem 0;
  }

  .form-control {
    padding: .2rem 0;
  }
</style>

<div class="form-control">
  <label for={id}>{label}</label>
  {#if type === 'text' || type === 'email'}
    <input {type} {value} {id} on:input />
  {:else if type === 'textarea'}
    <textarea {rows} {value} {id} on:input />
  {/if}
</div>
