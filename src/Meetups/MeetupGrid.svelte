<script>
  import MeetupItem from "./MeetupItem.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";
  export let meetups;
  let favOnly = false;
  let filtered = [];
  
  $: if (favOnly) {
    filtered = meetups.filter(d => d.isFavourite === true);
  } else {
    filtered = meetups;
  }
</script>

<section id="meetup-filter">
  <MeetupFilter
    on:select-all={() => (favOnly = false)}
    on:select-fav={() => (favOnly = true)} />
</section>
{#each filtered as meetup}
  <MeetupItem {...meetup} on:togglefavourite on:show-details on:edit-meetup />
{/each}
