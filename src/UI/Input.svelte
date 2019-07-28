<script>
  export let id;
  export let label;
  export let value;
  export let type;
  export let rows = null;
  export let valid = false;
  export let errorMessage = '';
  let touched = false;
  const setTouched = () => {
    touched = true;
  }
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
    padding: 0.5rem 0.2rem;
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
    padding: 0.2rem 0;
  }
  .invalid {
    border-color: red;
    background: #fde3e3;
  }
  .error-message {
    color: red;
    margin: 0.25rem 0;
  }
</style>

<div class="form-control">
  <label for={id}>{label}</label>
  {#if type === 'text' || type === 'email'}
    <input {type} {value} {id} on:input class:invalid={touched && !valid} on:blur={setTouched}/>
  {:else if type === 'textarea'}
    <textarea {rows} {value} {id} on:input class:invalid={touched && !valid} on:blur={setTouched}/>
  {/if}
  {#if touched && !valid}
    <p class='error-message'>{errorMessage}</p>
  {/if}
</div>
