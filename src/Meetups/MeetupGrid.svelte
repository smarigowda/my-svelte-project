<script>
  import MeetupItem from "./MeetupItem.svelte";
  export let meetups;
</script>

{#each meetups as meetup}
  <MeetupItem {...meetup} />
{/each}
