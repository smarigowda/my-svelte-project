<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { meetupsStore } from "../Meetups/meetups-store.js";
  export let detailsId;
  let unsubscribe;

  onMount(() => {
    console.log("[Meetup Detail] component mounted...");
    console.log("[Meetup Detail] component ...", detailsId);
    unsubscribe = meetupsStore.subscribe(meetups => {
      console.log("[Meetup Detail]", meetups);
      let meetupItemData = meetups.find(d => d.id === detailsId);
      console.log(meetupItemData);
    });
  });

  onDestroy(() => {
    console.log("[Meetup Detail] component destroyed...");
    unsubscribe();
  });
  const dispatch = createEventDispatcher();

  const handleClick = () => {
    console.log("dispatching close-details event...");
    dispatch("close-details");
  };
</script>

<button on:click={handleClick}>Close</button>
