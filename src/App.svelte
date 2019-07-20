<script>
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Meetups/MeetupItem.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";

  function reject(obj, keys) {
    return Object.keys(obj)
      .filter(k => !keys.includes(k))
      .map(k => Object.assign({}, { [k]: obj[k] }))
      .reduce((res, o) => Object.assign(res, o), {});
  }

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
      email: "code@test.com"
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
      email: "swim@test.com"
    }
  ];

  meetups = meetups.map(d => reject(d, ["id"]));

  let title;

  $: console.log(title);

  function addMeetup() {
    console.log("adding meetup to meetups array of objects...");
  }
</script>

<style>
  #meetups {
    margin-top: 5rem;
  }
</style>

<Header />
<main id="meetups">
  <form on:submit|preventDefault={addMeetup}>
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" bind:value={title} />
    </div>
    <div class="form-control">
      <label for="subtitle">Subtitle</label>
      <input type="text" id="subtitle" />
    </div>
    <div class="form-control">
      <label for="address">Address</label>
      <input type="text" id="address" />
    </div>
    <div class="form-control">
      <label for="imageurl">Image URL</label>
      <input type="text" id="imageurl" />
    </div>
    <div class="form-control">
      <label for="email">E-Mail</label>
      <input type="email" id="email" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea rows="3" type="text" id="description" />
    </div>
    <button type="submit">Save</button>
  </form>
  <MeetupGrid {meetups} />
</main>
