<script>
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Meetups/MeetupItem.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Input from "./UI/Input.svelte";
  import Button from "./UI/Button.svelte";

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

  function addMeetup() {
    console.log("add meetup function...");
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subtitle,
      address,
      imageUrl,
      email,
      description
    };
    meetups = [...meetups, newMeetup];
  }

  const handleToggleFavourite = event => {
    console.log(event);
    meetups = meetups.map(meetup=> {
      if(meetup.id === event.detail.id) {
        meetup.isFavourite = !meetup.isFavourite;
      }
      return meetup;
    });
    console.log('handleToggleFavourite', meetups);
  };
  
</script>

<style>
  #meetups {
    margin-top: 5rem;
  }
  form {
    max-width: 90%;
    margin: auto;
    width: 45rem;
  }
</style>

<Header />
<main id="meetups">
  <form on:submit|preventDefault={addMeetup}>

    <Input
      id="title"
      label="Title of Meetup"
      value={title}
      type="text"
      on:input={event => (title = event.target.value)} />

    <Input
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      type="text"
      on:input={event => (subtitle = event.target.value)} />

    <Input
      id="address"
      label="Address"
      value={address}
      type="text"
      on:input={event => (address = event.target.value)} />

    <Input
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      type="text"
      on:input={event => (imageUrl = event.target.value)} />

    <Input
      id="email"
      label="E-Mail"
      value={email}
      type="email"
      on:input={event => (email = event.target.value)} />

    <Input
      id="description"
      label="Description"
      value={description}
      rows="3"
      type="textarea"
      on:input={event => (description = event.target.value)} />

    <Button type="submit" caption="Save" />

  </form>
  <MeetupGrid {meetups} on:togglefavourite={handleToggleFavourite} />
</main>
