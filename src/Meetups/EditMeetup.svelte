<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import Input from "../UI/Input.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";
  import { isEmpty, isValidEmail } from "../helpers/validation";

  export let editMeetupId;
  let title = "";
  let subtitle = "";
  let address = "";
  let imageUrl = "";
  let email = "";
  let description = "";

  $: isTitleValid = !isEmpty(title);
  $: isSubTitleValid = !isEmpty(subtitle);
  $: isAddressValid = !isEmpty(address);
  $: isImageUrlValid = !isEmpty(imageUrl);
  $: isEmailValid = isValidEmail(email);
  $: isDescriptionValid = !isEmpty(description);

  $: isFormValid =
    isTitleValid &
    isSubTitleValid &
    isAddressValid &
    isImageUrlValid &
    isEmailValid &
    isDescriptionValid;

  let dispatch = createEventDispatcher();

  onMount(() => {
    console.log('meetup mounted');
    console.log(`editMeetupId = ${editMeetupId}`)
  })

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
      valid={isTitleValid}
      errorMessage="Enter valid title"
      on:input={event => (title = event.target.value)} />
    <Input
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      valid={isSubTitleValid}
      errorMessage="Enter valid sub title"
      type="text"
      on:input={event => (subtitle = event.target.value)} />

    <Input
      id="address"
      label="Address"
      value={address}
      valid={isAddressValid}
      errorMessage="Enter valid address"
      type="text"
      on:input={event => (address = event.target.value)} />

    <Input
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      valid={isImageUrlValid}
      errorMessage="Enter valid image url"
      type="text"
      on:input={event => (imageUrl = event.target.value)} />

    <Input
      id="email"
      label="E-Mail"
      value={email}
      valid={isEmailValid}
      errorMessage="Enter valid email address"
      type="email"
      on:input={event => (email = event.target.value)} />

    <Input
      id="description"
      label="Description"
      value={description}
      valid={isDescriptionValid}
      errorMessage="Enter valid description"
      rows="3"
      type="textarea"
      on:input={event => (description = event.target.value)} />

    <!-- <Button type="submit">Save</Button> -->
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={dispatchCancelModal}>
      Cancel
    </Button>
    <!-- SAVE works outside form, because 2 way binding -->
    {#if isFormValid}
      <Button type="button" on:click={addMeetup}>SAVE</Button>
    {/if}
  </div>
</Modal>
