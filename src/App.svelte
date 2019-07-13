<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Max";
  let title = "Software Developer";
  let image = "";
  let description = "Develop Automated Tests";
</script>

<style>
  h1 {
    display: block;
    color: blueviolet;
    font-weight: 200;
    margin-top: 50px;
  }
  .container {
    margin: 0 auto;
    text-align: center;
  }
  button {
    outline: none;
    border: none;
    padding: 13px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    color: white;
    background-color: blueviolet;
    font-weight: 100;
    cursor: pointer;
    border: 1px solid blueviolet;
  }
  button:hover {
    background-color: white;
    color: blueviolet;
    border: 1px solid blueviolet;
  }
  #form {
    width: 30rem;
    max-width: 100%;
    margin: 0 auto;
  }
</style>

<div class="container">
  <h1>
    <strong>Section 3</strong>
    - Conditionals and Loops !
  </h1>
  <div id="form">
    <div class="form-control">
      <label for="userName">User Name</label>
      <input type="text" bind:value={name} id="userName" />
    </div>
    <div class="form-control">
      <label for="jobTitle">Job Title</label>
      <input type="text" bind:value={title} id="jobTitle" />
    </div>
    <div class="form-control">
      <label for="image">Image URL</label>
      <input type="text" bind:value={image} id="image" />
    </div>
    <div class="form-control">
      <label for="desc">Description</label>
      <textarea rows="3" bind:value={description} id="desc" />
    </div>
  </div>

  <ContactCard userName={name} jobTitle={title} jobDescription={description} />

</div>
