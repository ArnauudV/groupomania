<script>

import PostsLike from "@/components/PostsLike";
import PostUnique from "@/components/PostUnique.vue";
import PostPanel from "@/components/PostPanel";
import { getPostFromAPI } from "@/functions/fetchPost.js";
import { requestDeletePostFromAPI } from "@/functions/fetchPost";


export default {
  name: "PostUniqueUsersView",
  data() {
    return {
      userId: localStorage.getItem("userId"),
      privilege: localStorage.getItem("privilege"),
      id_post: "",
      post_id_user: "",
      post_user_picture: "",
      post_title: "",
      post_image: "",
      post_text: "",
      post_user_nickname: "",
      sameUser: false,
      requestedUserliked: "",
      requestedNumLikes: "",
    };
  },
  components: {
    PostsLike,
    PostUnique,
    PostPanel,

  },
  methods: {
    getPostFromAPI,
    requestDeletePostFromAPI,
    // Récupère les informations du post de l'API pour les afficher
    async assignPostInformations() {
      let post = await getPostFromAPI(this.$route.params.id);
      if (!post.error) {
        this.requestedNumLikes = post.numLikes;
        this.requestedUserliked = post.isLiked;
        this.id_post = post.id_post;
        this.post_id_user = post.id_user;
        if (post.id_user == this.userId) {
          this.post_user_nickname = "Vous";
        } else {
          this.post_user_nickname = post.nickname;
        }
        this.post_title = post.title;
        this.post_user_picture = post.picture;
        this.post_image = post.image;
        this.post_text = post.post_text;
        this.modify_title = this.post_title;
        this.modify_text = this.post_text;
        this.post_date_created = post.date_created;
        this.post_date_updated = post.date_updated;
        if (parseInt(this.userId) == parseInt(this.post_userId)) {
          this.sameUser = true;
          return;
        }
        return;
      }
      //this.$router.push("/allPosts"); // Redirection lorsque le post n'existe pas
    },
    updatePostPage() {
      this.assignPostInformations();
    },
  },
  beforeCreate() {
    if (this.$store.state.logState == false) {
      this.$router.push("/LoginForm");
    }
  },
  created() {
    this.assignPostInformations();
  },
};
</script>

<template>
  <div id="post_section" :data-id_post="id_post" :data-id_user="post_id_user">
    <div class="nav">

      <router-link to="/allPosts" nav_button_name="Retour">Back</router-link>
    </div>
    <div class="title_container">
      <h1>{{ post_title }}</h1>
    </div>
      <PostPanel
      v-if="post_id_user == userId || privilege == 'admin'"
      :id_post="id_post"
      :post_id_user="post_id_user"
      :post_title="post_title"
      :post_text="post_text"
      :post_image="post_image"
      @requestUpdatePostInfosInView="assignPostInformations"
      @show_confirm_delete="ShowConfirmDelete"
    />
    <PostUnique
      :id_post="id_post"
      :post_id_user="post_id_user"
      :post_user_picture="post_user_picture"
      :post_title="post_title"
      :post_image="post_image"
      :post_text="post_text"
      :post_user_nickname="post_user_nickname"
    />
    <PostsLike
      :id_post="id_post"
      :post_id_user="post_id_user"
      :liked="requestedUserliked"
      :num_likes="requestedNumLikes"
      @likeUpdated="assignPostInformations"
    />



  </div>
</template>



<style scoped lang="scss">
#post_section {
  margin: auto;
  width: 95%;
  margin-top: 30px;
  padding-top: 40px;
  height:100%;
}
#post_card {
  background-color: white;

  border-radius: 10px;
}
.title_container {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 40px;

  margin-bottom: 20px;
  border-radius: 50px;
  background-color: white;
  h1 {
    margin: 0;
  }
}
</style>
