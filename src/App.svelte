<script>
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Meetups/MeetupItem.svelte";
  import MeetupGrid from './Meetups/MeetupGrid.svelte';

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
      address: "27, Nerd Road, 34567 New Yark",
      email: "swim@test.com"
    }
  ];
</script>

<Header />
<MeetupGrid {meetups}/>

