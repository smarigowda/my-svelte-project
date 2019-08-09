<script>
  import { createEventDispatcher } from "svelte";
  import MeetupItem from "./MeetupItem.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";
  import Button from "../UI/Button.svelte";

  export let meetups;

  let dispatch = createEventDispatcher();
  let favOnly = false;
  let filtered = [];

  $: if (favOnly) {
    filtered = meetups.filter(d => d.isFavourite === true);
  } else {
    filtered = meetups;
  }
</script>

<style>
  #meetup-controls {
    margin: 1rem;
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;
  }
</style>

<section id="meetup-controls">
  <MeetupFilter
    on:select-all={() => (favOnly = false)}
    on:select-fav={() => (favOnly = true)} />
  <Button
    type="button"
    on:click={() => {
      dispatch('new-meetup');
    }}>
    New Meetup
  </Button>
</section>
{#each filtered as meetup}
  <MeetupItem {...meetup} on:togglefavourite on:show-details on:edit-meetup />
{/each}
