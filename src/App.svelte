<script>
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Meetups/MeetupItem.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Input from "./UI/Input.svelte";
  import Button from "./UI/Button.svelte";
  import Modal from "./UI/Modal.svelte";
  import { meetupsStore } from "./Meetups/meetups-store.js";
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";

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
  let showMeetupDetail = false;
  let detailsId = null;
  let editMeetupId = null;

  function handleAddMeetup(event) {
    console.log("add meetup function...");
    const newMeetup = {
      id: Math.random().toString(),
      ...event.detail
    };
    meetupsStore.addMeetup(newMeetup);
    editMeetup = !editMeetup;
    editMeetupId = null;
  }

  const handleToggleFavourite = event => {
    meetupsStore.toggleFavoutite(event.detail.id);
  };

  const handleCloseDetails = () => {
    showMeetupDetail = !showMeetupDetail;
  };
  const handleShowDetails = event => {
    console.log(event);
    detailsId = event.detail.id;
    showMeetupDetail = true;
  };
  const handleEditMeetup = event => {
    console.log(event);
    editMeetupId = event.detail.id;
    editMeetup = true;
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
  {#if showMeetupDetail}
    <MeetupDetail on:close-details={handleCloseDetails} {detailsId} />
  {:else}
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
        on:addmeetup={handleAddMeetup}
        on:cancelmodal={() => { 
          editMeetup = false;
          editMeetupId = null;
        }}
        {editMeetupId} />
    {/if}
    <MeetupGrid
      {meetups}
      on:togglefavourite={handleToggleFavourite}
      on:show-details={handleShowDetails}
      on:edit-meetup={handleEditMeetup} />
  {/if}
</main>
