<script>
  import Button from "../UI/Button.svelte";
  import Badge from "../UI/Badge.svelte";
  import { createEventDispatcher } from "svelte";
  export let imageUrl;
  export let title;
  export let subtitle;
  export let description;
  export let email;
  export let address;
  export let id;
  export let isFavourite;

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  article {
    display: inline-block;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
    width: 45%;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .content {
    height: 6rem;
  }

  .image {
    width: 100%;
    height: 14rem;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;

    &.is-favorite {
      background: #01a129;
      color: white;
      padding: 0 0.5rem;
      border-radius: 5px;
    }
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  .meetup-item {
    & + & {
      margin-top: 2rem;
    }
  }
</style>

<article class="meetup-item">
  <header>
    <h1>
      {title}
      {#if isFavourite}
        <Badge>Favourite</Badge>
      {/if}
    </h1>
    <h2>{subtitle}</h2>
    <p>{address}</p>
  </header>
  <div class="image">
    <img src={imageUrl} alt="" />
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <Button type="button" on:click={() => {
      dispatch('show-details');
    }}>Show Details</Button>
    <Button
      type="button"
      mode="outline {isFavourite ? 'success' : null}"
      on:click={() => dispatch('togglefavourite', { id })}>
      Favourite
    </Button>
    <Button href="mailto:{email}">{email}</Button>
  </footer>
</article>
