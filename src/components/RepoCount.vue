<template>
  <div class="total-repo-container mt-3">
    <button type="button" class="btn btn-primary">
      Total Work <span class="badge badge-light"> {{ repoNumber }}</span>
    </button>
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
.total-repo-container {
  margin-left: 30px;
  margin-top: 20px;
  text-decoration-color: bisque;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
