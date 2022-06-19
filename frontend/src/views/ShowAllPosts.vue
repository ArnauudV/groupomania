<script>
import { getAllPostsFromAPI } from "@/functions/fetchPost";
import WritePost from "@/components/WritePost";
import PostCardMin from "@/components/PostCardMin";
import ButtonForPosts from "@/components/ButtonForPosts.vue";

export default {
  name: "ShowAllPosts",
  data() {
    return {
      posts: [],
      writePostDisplayed: false,
      sorted: "newest",
    };
  },
  components: {
    PostCardMin,
    WritePost,
    ButtonForPosts,
  },
  methods: {
    getAllPostsFromAPI,
    displayWritePost() {
      if (this.writePostDisplayed == false) {
        this.writePostDisplayed = true;
        document.getElementById("write_post__button").style.visibility =
          "hidden";
        return;
      }
      this.writePostDisplayed = false;
      document.getElementById("write_post__button").style.visibility =
        "visible";
    },
    cancelDisplayWritePost() {
      this.writePostDisplayed = false;
      document.getElementById("write_post__button").style.visibility =
        "visible";
    },
    async showAllPosts() {
      let reponse = await getAllPostsFromAPI();
      this.total_post = reponse.length;
      this.posts = reponse;
      for (let i in this.posts) {
        if (this.posts[i].id_user == localStorage.getItem("userId")) {
          this.posts[i].nickname = "Vous";
        }
      }
    },
    updateallPosts() {
      this.showAllPosts();
    },
  },
  beforeCreate() {
    if (this.$store.state.logState == false) {
      this.$router.push('/Login');
    }
  },
  created() {
    this.showAllPosts();
  },
};
</script>
<template>
  <div id="allPosts">
    <h1>Posts</h1>
    <ButtonForPosts
      id="write_post__button"
      @click="displayWritePost"
      post_button_name="Poster un nouveau message"
    />
    <WritePost
      v-show="writePostDisplayed"
      @cancelPost="cancelDisplayWritePost"
      @postPublished="updateallPosts"
    />
    <div id="cards_container">
      <div class="no_posts" v-if="posts.length == 0">
        <h2>Rien à afficher, n'hésitez pas à poster en cliquant sur le bouton au dessus !</h2>
      </div>

        <PostCardMin
          :id_post="post.id_post"
          :post_title="post.title"
          :nickname="post.nickname"
          v-for="post in posts"
          :key="post.id_post"
          @postPublished="updateallPosts"
        />

    </div>
  </div>
</template>



<style scoped lang="scss">
#allPosts {
  margin: auto;
  margin-bottom: 40px;
  padding-top: 1px;

  h1 {
    margin-bottom: 40px;
  }
}

#cards_container {
  width: 95%;
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
.no_posts {
  margin-top: 150px;
}

.fade-enter-active,

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
