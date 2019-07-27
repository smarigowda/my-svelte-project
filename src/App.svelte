<script>
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Meetups/MeetupItem.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Input from "./UI/Input.svelte";
  import Button from "./UI/Button.svelte";
  import Modal from "./UI/Modal.svelte";

  // function reject(obj, keys) {
  //   return Object.assign(
  //     {},
  //     ...Object.keys(obj)
  //       .filter(k => !keys.includes(k))
  //       .map(k => ({ [k]: obj[k] }))
  //   );
  // }

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup we will have some experts who will be teachig how to code",
      imageUrl:
        "https://insights.dice.com/wp-content/uploads/2019/05/Coding-Bootcamp-Ratings-Dice.png",
      address: "27, Nerd Road, 34567 New Yark",
      email: "code@test.com",
      isFavourite: false
    },
    {
      id: "m2",
      title: "Swimming Bootcamp",
      subtitle: "Learn to swim in 2 months",
      description:
        "In this session we will have some experts who will be teachig how to Swim",
      imageUrl:
        "https://s3-us-west-1.amazonaws.com/swimstrongfoundation/wp-content/uploads/2017/10/12141903/freestyle.jpg",
      address: "14, Fulmer Close, 34567 New Yark",
      email: "swim@test.com",
      isFavourite: false
    }
  ];

  // $: meetups = meetups.map(d => reject(d, ["id"]));

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
    meetups = [...meetups, newMeetup];
    console.log(meetups);
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
    <EditMeetup on:addmeetup={addMeetup} on:cancelmodal={() => editMeetup = false}/>
  {/if}
  <MeetupGrid {meetups} on:togglefavourite={handleToggleFavourite} />
</main>
