<template>
  <div id="app">
    <b-container>
      <header>
        <!-- <a href="https://github.com/">
          <img src="./assets/github_small.png" alt="Github" small logo />
        </a> -->
        <ul class="nav nav-pills">
          <!-- use mr-auto to push rest tiem to right -->
          <li class="nav-item mr-auto ml-3">
            <router-link class="nav-link" href="#" :to="{ name: 'Hello' }">
              <h4 class="title">BenNotes</h4>
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="text-dark" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
              <i class="fas fa-bars fa-2x bar-icon"></i>
            </a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/about">About</router-link>
              <div class="dropdown-divider"></div>
              <h6 class="dropw-down-subtitle text-black-50">FILTER</h6>
              <!-- <a class="dropdown-item" @click="getForkdRepo()"></a> -->
              <!-- <a class="dropdown-item" @click="getAllRepo()"> All Repos</a> -->
              <!-- <a class="dropdown-item" @click="getForkdRepo()">
                Show Forked Repos
              </a> -->
              <a class="dropdown-item" @click="getMyRepo()"> Show my Repos</a>
              <a class="dropdown-item" @click="getRepoByOrder()">All Repos by Order</a>
              <div class="dropdown-divider"></div>
              <h6 class="dropw-down-subtitle text-black-50">App in Action</h6>
              <a class="dropdown-item" href="https://code-train-2ba48.web.app/sign-in">
                Calorines Awareness
              </a>
              <a class="dropdown-item" href="https://drag-drop-to-watch.web.app/yt-link-v2">
                My Informatica
              </a>
              <div class="dropdown-divider"></div>
            </div>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              XXXX
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
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" disabled href="#">To add..</a>
            </div>
          </li> -->

          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#">To add..</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Vue 3 App</a>
          </li> -->

          <!-- <li class="nav-item"> <a class="nav-link disabled" href="#">xx</a> </li> -->
          <!-- <li class="nav-item"> <a class="nav-link disabled" href="#">xx</a> </li> -->
        </ul>
      </header>
      <hr class="hr-line" />
      <h3 class="recent-work">off-work side projects</h3>
      <div class="d-flex
        justify-content-center flex-wrap bd-highlight m-3">
        <div v-for="work in recentWork" :key="work.id">
          <work :work="work" />
        </div>
      </div>

      <hr class="hr-line" />
      <!-- <main>
        <router-view />
      </main> -->
    </b-container>
  </div>
</template>

<script>
import { EventBus } from "./event_bus";
import recentWork from "./assets/recentWork";

export default {
  name: "app",
  components: {
    // lazy loading
    Work: () => import("./components/Work")
  },
  data() {
    return {
      recentWork: recentWork.data
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
.recent-work {
  margin-left: 30px;
}

.sub-title {
  display: inline-block;
  border-bottom: 3px solid black;
  text-transform: uppercase;
}

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

.title {
  color: #000000;
}

.hr-line {
  margin-top: 0%;
  width: 94%;
  border-width: 2px 0 0 0;
  border-style: solid;
  border-color: #000000;
}

.dropw-down-subtitle {
  margin-left: 25px;
}

.bar-icon {
  margin-top: 10px;
  margin-right: 35px;
}
</style>
