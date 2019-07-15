<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Max";
  let title = "Software Developer";
  let imageUrl =
    "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg";
  let description = "Develop Automated Tests";
  let formState = "empty";
  let contacts = [];
  let password = "";
  let passwordsList = [];

  function removePassword(index) {
    console.log("index = ", index);
    passwordsList = passwordsList.filter((d, i) => i !== index);
  }
  function addPasswordToList() {
    passwordsList = [...passwordsList, password];
    password = "";
    console.log(passwordsList);
  }
  const isZero = length => {
    return length === 0;
  };

  function deleteFirst() {
    contacts = contacts.splice(1);
  }

  function deleteLast() {
    contacts = contacts.slice(0, -1);
  }

  function addContact() {
    let formElementsLength = [name, title, imageUrl, description].map(field => {
      return field.trim().length;
    });
    if (formElementsLength.some(isZero)) {
      formState = "invalid";
    } else {
      formState = "valid";
      let newContact = {
        id: Math.random(),
        name,
        title,
        imageUrl,
        description
      };
      contacts = [...contacts, newContact];
    }
  }
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
    width: 30rem;
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
  input[type="text"] {
    padding: 15px;
  }
  input[type="password"] {
    padding: 15px;
    width: 30rem;
  }
  .hidden {
    display: none;
  }
</style>

<div class="container">
  <h1>
    <strong>Section 3</strong>
    - Conditionals and Loops !
  </h1>
  <hr />

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
      <input type="text" bind:value={imageUrl} id="image" />
    </div>
    <div class="form-control">
      <label for="desc">Description</label>
      <textarea rows="3" bind:value={description} id="desc" />
    </div>
  </div>

  <button on:click={addContact}>Add a Contact Card</button>
  <button on:click={deleteFirst} class:hidden={contacts.length === 0}>
    Delete First
  </button>
  <button on:click={deleteLast} class:hidden={contacts.length === 0}>
    Delete Last
  </button>

  {#if formState === 'invalid'}
    <p>Some fields are empty</p>
  {/if}
  {#each contacts as contact, index (contact.id)}
    <h1>Contact # {index}</h1>
    <ContactCard
      userName={contact.name}
      jobTitle={contact.title}
      imageUrl={contact.imageUrl}
      jobDescription={contact.description} />
  {:else}
    <p>Add some contacts...</p>
  {/each}

  <h1>End of Section Assignment:</h1>
  <hr />
  <label for="password">Enter Password</label>
  {#if password.length > 0 && password.length < 5}
    <p>Too Short</p>
  {:else if password && password.length > 0 && password.length > 10}
    <p>Too Long</p>
  {:else if password && password.length > 0}
    <button on:click={addPasswordToList}>Add Password to list</button>
  {/if}

  {#if password && password.length > 5 && password.length <= 10}
    <p>Password = {password}</p>
  {/if}
  <input type="password" bind:value={password} />
  {#if passwordsList.length > 0}
    <h2>List of Passwords:</h2>
  {/if}
  <ul>
    {#each passwordsList as password, index (password)}
      <p on:click={() => removePassword(index)}>{password}</p>
    {/each}
  </ul>
  <hr />
</div>
