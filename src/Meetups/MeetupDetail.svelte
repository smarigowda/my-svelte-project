<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { meetupsStore } from "../Meetups/meetups-store.js";
  import Button from '../UI/Button.svelte';
  export let detailsId;
  let unsubscribe;
  let imageUrl;
  let title;
  let subtitle;
  let address;
  let description;
  let contactEmail;


  onMount(() => {
    console.log("[Meetup Detail] component mounted...");
    console.log("[Meetup Detail] component ...", detailsId);
    unsubscribe = meetupsStore.subscribe(meetups => {
      console.log("[Meetup Detail]", meetups);
      let meetupItemData = meetups.find(d => d.id === detailsId);
      console.log(meetupItemData);
      ({imageUrl, title, subtitle, address, description, contactEmail } = meetupItemData); 
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

<style>
  section {
    margin-top: 4rem;
  }

  .image {
    width: 100%;
    height: 25rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image {
    background: #e7e7e7;
  }

  .content {
    text-align: center;
    width: 80%;
    margin: auto;
  }

  h1 {
    font-size: 2rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1.25rem;
    color: #6b6b6b;
  }

  p {
    font-size: 1.5rem;
  }
</style>

<section>
  <div class="image">
    <img src={imageUrl} alt={title} />
  </div>
  <div class="content">
    <h1>{title}</h1>
    <h2>{subtitle} - {address}</h2>
    <p>{description}</p>
    <Button href="mailto:{contactEmail}">Contact</Button>
    <Button type="button" mode="outline" on:click={handleClick}>
      Close
    </Button>
  </div>
</section>