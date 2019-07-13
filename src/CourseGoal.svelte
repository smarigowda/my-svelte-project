<script>
  export let courseGoal;

  function containsExcalmation(value) {
    return value && value.indexOf("!") > 0;
  }
</script>

<style>
  .red {
    color: red;
  }
</style>

<hr />
<h1>Section 2 Assignment</h1>
<hr />
<label for="goad">Enter Course Goal.</label>
<input type="text" name="goal" bind:value={courseGoal} />
<h1 class:red={containsExcalmation(courseGoal)}>{courseGoal}</h1>
