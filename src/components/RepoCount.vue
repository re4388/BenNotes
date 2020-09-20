<template>
  <div class="total-repo-container mt-3">
    <div>
      <h6 class="sub-title">My Repo in Order / repo number:{{ repoNumber }}</h6>
    </div>
    Use <b>Search Bar </b> to filter what you want to check; also can
    <b>Search anyone's GitHub repo </b>by typing <b>User Name </b> <br />
    (The defualt is mine: <b> re4388 </b>).
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
