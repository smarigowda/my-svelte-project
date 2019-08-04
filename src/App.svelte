<script>
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Meetups/MeetupItem.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Input from "./UI/Input.svelte";
  import Button from "./UI/Button.svelte";
  import Modal from "./UI/Modal.svelte";
  import { meetupsStore } from "./Meetups/meetups-store.js";

  // function reject(obj, keys) {
  //   return Object.assign(
  //     {},
  //     ...Object.keys(obj)
  //       .filter(k => !keys.includes(k))
  //       .map(k => ({ [k]: obj[k] }))
  //   );
  // }

  let meetups = [];

  meetupsStore.subscribe(data => {
    meetups = data;
    console.log("meetups", meetups);
  });

  let title = "";
  let subtitle = "";
  let address = "";
  let imageUrl = "";
  let email = "";
  let description = "";
  let id = "";
  let editMeetup = false;

  function addMeetup(event) {
    console.log("add meetup function...");
    const newMeetup = {
      id: Math.random().toString(),
      ...event.detail
    };
    meetupsStore.addMeetup(newMeetup);
    editMeetup = !editMeetup;
  }

  const handleToggleFavourite = event => {
    console.log(event);
    meetups = meetups.map(meetup => {
      if (meetup.id === event.detail.id) {
        meetup.isFavourite = !meetup.isFavourite;
      }
      return meetup;
    });
    console.log("handleToggleFavourite", meetups);
  };
</script>

<style>
  #meetups {
    margin-top: 5rem;
  }
  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />
<main id="meetups">
  {#if !editMeetup}
    <div class="meetup-controls">
      <Button
        type="button"
        on:click={() => {
          editMeetup = !editMeetup;
        }}>
        {editMeetup ? 'Close Form' : 'New Meetup'}
      </Button>
    </div>
  {/if}
  {#if editMeetup}
    <EditMeetup
      on:addmeetup={addMeetup}
      on:cancelmodal={() => (editMeetup = false)} />
  {/if}
  <MeetupGrid {meetups} on:togglefavourite={handleToggleFavourite} />
</main>
