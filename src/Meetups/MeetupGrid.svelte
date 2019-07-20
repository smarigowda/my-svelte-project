<script>
import MeetupItem from './MeetupItem.svelte';
export let meetups;
</script>

<style>
  #meetups {
    margin-top: 5rem;
  }
</style>

<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem {...meetup} />
  {/each}
</section>