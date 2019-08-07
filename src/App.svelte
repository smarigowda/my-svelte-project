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
  import MeetupFilter from "./Meetups/MeetupFilter.svelte";

  // function reject(obj, keys) {
  //   return Object.assign(
  //     {},
  //     ...Object.keys(obj)
  //       .filter(k => !keys.includes(k))
  //       .map(k => ({ [k]: obj[k] }))
  //   );
  // }

  let meetups = [];
  let filtered = []

  let favOnly = false;

  $: console.log("favOnly =", favOnly);

  meetupsStore.subscribe(data => {
    meetups = data;
    console.log("meetups", meetups);
  });

  $: if (favOnly) {
    filtered = meetups.filter(d => d.isFavourite === true);
  } else {
    filtered = meetups;
  }
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

  function handleUpdateMeetup(event) {
    editMeetup = !editMeetup;
    editMeetupId = null;
    meetupsStore.updateMeetup(event.detail);
  }
  function handleDeleteMeetup() {
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
  .meetup-controls {
    margin: 1rem;
  }
  #meetup-filter {
    margin: 1rem;
    margin-top: 5rem;
  }
</style>

<Header />
<section id="meetup-filter">
  <MeetupFilter
    on:select-all={() => (favOnly = false)}
    on:select-fav={() => (favOnly = true)} />
</section>
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
        on:updatemeetup={handleUpdateMeetup}
        on:delete-meetup={handleDeleteMeetup}
        on:cancelmodal={() => {
          editMeetup = false;
          editMeetupId = null;
        }}
        {editMeetupId} />
    {/if}
    <MeetupGrid
      meetups={filtered}
      on:togglefavourite={handleToggleFavourite}
      on:show-details={handleShowDetails}
      on:edit-meetup={handleEditMeetup} />
  {/if}
</main>
