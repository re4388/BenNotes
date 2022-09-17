<template>
  <div class="total-repo-container mt-3">
    <div>
      <h3>GitHub Repo Fast Look</h3>
    </div>
    Use <b>Search Bar </b> to filter
    <br>
    <b>You can search anyone's GitHub repo as well!</b>
    <br />
    (The default is mine: <b> re4388 </b>).
  </div>
</template>

<script>
export default {
  name: "RepoCount",
  props: {
    repoNumber: Number
  }
};
</script>

<style scoped>
.sub-title {
  display: inline-block;
  border-bottom: 3px solid black;
  text-transform: uppercase;
}

.total-repo-container {
  margin-left: 30px;
  margin-top: 20px;
  text-decoration-color: bisque;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
