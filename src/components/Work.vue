<template>
  <div class="about-container">
    <div class="card" style="width: 18rem;">
      <h5 class="card-title m-auto p-3">{{ work.name }}</h5>
      <img :src="work.picLink" class="card-img-top m-auto p-3" alt="..." />
      <div class="card-body">
        {{ work.desc }}
      </div>
      <div class="m-auto pb-3">
        <a :href="work.link" class="card-link pr-3">See Code</a>
        <span v-if="work.DemoLink">
          <a :href="work.DemoLink" class="card-link">Demo link</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    work: Object
  }
};
</script>

<style scoped>
.about-container {
  margin-left: 30px;
  margin-top: 20px;
  text-decoration-color: bisque;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}
</style>
