import { writable } from "svelte/store";

let meetupsList = [
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

const store = writable(meetupsList);

export const meetupsStore = {
  subscribe: store.subscribe,
  addMeetup: newMeetup => {
    store.update(data => {
      let meetups = [...data, newMeetup];
      console.log(meetups);
      return meetups;
    });
  },
  removeMeetup: meetupId => {
    store.update(data => {
      return data.filter(d => d.id !== meetupId);
    })
  },
  updateMeetup: updatedMeetup => {
    console.log("updated meetup details =", updatedMeetup);
    store.update(data => {
      let meetups = data.map(d => {
        if (d.id === updatedMeetup.id) {
          return updatedMeetup;
        } else {
          return d;
        }
      });
      console.log(meetups);
      return meetups;
    });
  },
  toggleFavoutite: id => {
    store.update(data => {
      let meetups = data.map(meetup => {
        if (meetup.id === id) {
          meetup.isFavourite = !meetup.isFavourite;
        }
        return meetup;
      });
      return meetups;
    });
  }
};
