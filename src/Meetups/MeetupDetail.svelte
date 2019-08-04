<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
</script>

<button on:click={() => {
    console.log('dispatching close-details event...');
    dispatch('close-details')
}}>Close</button>