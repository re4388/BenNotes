<template>
  <div class="total-repo-container mt-3">
    <div>
      <h6 class="sub-title">My Repo in Order</h6>
    </div>
    Use <b>Dropdown Menu</b> to filter; <br />
    Use <b>Search Bar </b> to filter out you want to check <br />
    Currently, the number of repositories is :
    <span class="badge badge-light"> {{ repoNumber }}</span>
    <br />
    Actually, you can also <b>search anyone's GitHub repo </b>by typing
    <b>user name </b> <br />
    (The defualt my a/c, <b> re4388 </b>).
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
