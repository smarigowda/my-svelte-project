<script>
  import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { cubicIn } from "svelte/easing";
  import Spring from './Spring.svelte';

  const progress = tweened(0, {
    delay: 2000,
    duration: 700,
    easing: cubicIn
  });

  setTimeout(() => {
    $progress = 0.5;
  }, 0);
</script>

<!-- <progress value={$progress} /> -->
<Spring />
