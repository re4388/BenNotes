<template>
  <div id="app">
    <b-container>
      <header>
        <a href="https://github.com/">
          <img src="./assets/github_small.png" alt="Github" small logo />
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" href="#" :to="{ name: 'Hello' }"
              >Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Filter Repos
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" @click="getAllRepo()"> All Repos</a>
              <a class="dropdown-item" @click="getForkdRepo()">
                Show only Forked Repos</a
              >
              <a class="dropdown-item" @click="getMyRepo()"> Show my Repos</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" @click="getRepoByOrder()"
                >Show my Repos in Created Order</a
              >
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >My Angular Project
            </a>
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                href="https://code-train-2ba48.web.app/sign-in"
              >
                Calorines Awareness
              </a>
              <a
                class="dropdown-item"
                href="https://drag-drop-to-watch.web.app/yt-link-v2"
              >
                My Informatica
              </a>
              <!-- <a
                class="dropdown-item"
                href="https://bens-initial-project-e97e61.webflow.io/"
              >
                webflow DEMO</a
              > -->

              <div class="dropdown-divider"></div>
              <a class="dropdown-item" disabled href="#">To add..</a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link disabled" href="#">To add..</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Vue 3 App</a>
          </li>
          <!-- <li class="nav-item"> <a class="nav-link disabled" href="#">xx</a> </li> -->
          <!-- <li class="nav-item"> <a class="nav-link disabled" href="#">xx</a> </li> -->
        </ul>
      </header>
      <main>
        <router-view />
      </main>
    </b-container>
  </div>
</template>

<script>
import { EventBus } from './event_bus';


export default {
  name: "app",
  data() {
    return {
      // userId: ""
    };
  },
  methods: {
    getAllRepo() {
      EventBus.$emit("update: all repo", `get all repo event`);
    },
    getForkdRepo() {
      EventBus.$emit("update: all forked repo", `get all forked repo event`);
    },
    getMyRepo() {
      EventBus.$emit("update: all my repo", `get all my repo event`);
    },
    getRepoByOrder() {
      EventBus.$emit(
        "update: all repo by created order",
        `get all repo by created order event`
      );
    }
  },
  mounted() {
    // console.log(process.env.VUE_APP_GITHUB_USER_NAME);
    // console.log(process.env.VUE_APP_GITHUB_PASSWROD);
    // console.log();
  }

  // watch: {
  //   $route: function() {
  //     this.userId = this.$router.history.current.params.id
  //   }
  // }
};
</script>

<style lang="scss" scoped>
html {
  height: 100%;
  background: #63d0ff;
}
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  background: #63d0ff;
  height: 100%;
}
</style>
