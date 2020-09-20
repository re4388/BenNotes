<template lang="pug">
  div
    repo-count(:repoNumber="numberOfRepo")
    .center.d-flex.m-4
      .d-flex.m-2
        b-form-input(v-model='userId', debounce='500', placeholder='Enter your Github username')
        b-form-input(v-model='searchWords', debounce='500', placeholder='Enter keyword to search')

    div(v-if='validUsername')
      //-  when we have search word...we show only filter result
      .center.d-flex.flex-wrap(v-if='searchWords')
        ul(v-for='i in filterSearch', :key='i.id')
          li
            a(:href='`${i.html_url}`', target='_blank', class="h5")
              | {{ i.name }} {{ i.fork?'/ forked':'' }}

      //- when state is not filter, we show all repos
      .center.d-flex.flex-wrap(v-if="searchWords === ''")
        ul(v-for='i in repo', :key='i.id')
          li
            a(:href='`${i.html_url}`', target='_blank', class="h5")
              | {{ i.name }} {{ i.fork?'/ forked':'' }}
    div(v-else='')
      .d-flex.m-5
        strong Loading...
        b-spinner.ml-4


</template>

<script>
import { GET_USER } from "@/store/actions.type";
import { mapGetters } from "vuex";
import RepoCount from "./RepoCount";
import { EventBus } from "../event_bus";

export default {
  name: "Repos",
  components: {
    RepoCount
  },
  data() {
    return {
      searchWords: "",
      userId: "re4388",
      repo: {}
      // repoNumber: 0,
    };
  },

  //   getForkdRepo() {
  //   this.$bus.$emit("update: all forked repo", `get forked event`);
  // },
  // getMyRepo() {
  //   this.$bus.$emit("update: all my repo", `get all my event`);
  // },

  mounted() {
    /* 4 listenner to listen event from app.vue via Event Bus registered in main.js */
    EventBus.$on("update: all repo", msg => {
      console.log(msg);
      this.showAllRepo();
    });

    EventBus.$on("update: all forked repo", msg => {
      console.log(msg);
      this.showForkedRepo();
    });

    EventBus.$on("update: all my repo", msg => {
      console.log(msg);
      this.showNotForkedRepo();
    });

    EventBus.$on("update: all repo by created order", msg => {
      console.log(msg);
      this.showRepoByCreatedDate();
    });
  },
  created() {
    this.init();
  },

  computed: {
    ...mapGetters(["fetchRepo", "validUsername", "numberOfRepo"]),
    filterSearch() {
      return this.repo.filter(i => i.name.match(this.searchWords));
    }
  },
  watch: {
    userId: async function() {
      await this.$store.dispatch(GET_USER, this.userId);
      this.repo = this.fetchRepo;
      // console.log('from watch', this.repo);
    }
  },

  methods: {
    async init() {
      await this.$store.dispatch(GET_USER, this.userId);
      this.repo = this.fetchRepo;

      // we get repo first and in next event loop, we filter to
      // `showRepoByCreatedDate` which is the default filgter I want to show
      setTimeout(() => {
        console.log("run showRepoByCreatedDate");
        this.showRepoByCreatedDate();
      }, 0);
    },
    showAllRepo() {
      this.repo = this.fetchRepo;
    },
    showRepoByCreatedDate() {
      this.repo = this.fetchRepo.sort(function(a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
    },
    showForkedRepo() {
      this.repo = this.fetchRepo.filter(i => {
        return i.fork === true;
      });
    },
    showNotForkedRepo() {
      this.repo = this.fetchRepo.filter(i => {
        return i.fork === false;
      });
    }
  },

  beforeDestroy() {
    // 元件銷毀前要註銷監聽事件
    this.$bus.$off("update: all repo");
  }
};
</script>

<style scoped>
ol,
ul {
  list-style: none;
}

/* .news p {
  font-size: 10px;
} */
</style>
