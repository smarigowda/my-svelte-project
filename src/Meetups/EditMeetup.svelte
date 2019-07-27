<script>
  import { createEventDispatcher } from "svelte";
  import Input from "../UI/Input.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";

  let title = "";
  let subtitle = "";
  let address = "";
  let imageUrl = "";
  let email = "";
  let description = "";

  let dispatch = createEventDispatcher();

  const addMeetup = () => {
    const newMeetup = {
      title,
      subtitle,
      address,
      imageUrl,
      email,
      description
    };
    dispatch("addmeetup", newMeetup);
  };

  const dispatchCancelModal = () => {
    dispatch("cancelmodal");
  };
</script>

<style>
  form {
    max-width: 90%;
    margin: auto;
    width: 45rem;
  }
</style>

<Modal on:cancelmodal title="New Meetup">
  <form on:submit|preventDefault={addMeetup}>
    <Input
      id="title"
      label="Meetup Title"
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

    <!-- <Button type="submit">Save</Button> -->
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={dispatchCancelModal}>Cancel</Button>
    <!-- SAVE works outside form, because 2 way binding -->
    <Button type="button" on:click={addMeetup}>SAVE</Button>
  </div>
</Modal>
