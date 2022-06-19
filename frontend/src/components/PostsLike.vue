

<script>
import { requestDeleteLikeFromAPI } from "@/functions/fetchLike.js";
import { requestInsertLikeFromAPI } from "@/functions/fetchLike.js";

export default {
  name: "PostsLike",
  data() {
    return {
      like_word: "",
      userId: localStorage.getItem("userId"),
      notSameUser: "",
    };
  },
  computed: {
    likeOrLikes() {
      if (this.num_likes == 1 || this.num_likes == 0) {
        return "like";
      } else {
        return "likes";
      }
    },
  },
  props: ["id_post", "post_id_user", "liked", "num_likes"],
  methods: {
    // Récupère le nombre de likes du post ainsi que si l'utilisateur connecté a liké ce post
    async updateLike() {
      if (this.liked == true) {
        let reponse = await requestDeleteLikeFromAPI(this.$route.params.id);
        if (reponse.message == "Annulation du like") {
          this.$emit("likeUpdated");
        }
        return;
      }
      if (this.liked == false) {
        let reponse = await requestInsertLikeFromAPI(this.$route.params.id);
        if (reponse.message == "Post liké") {
          this.$emit("likeUpdated");
        }
        return;
      }
    },
  },
};
</script>
<template>
  <div
    class="like_section"
    :data-id_post="id_post"
    :data-id_user="post_id_user"
  >
    <div class="like" v-if="post_id_user != userId">
      <div class="like_icons" @click="updateLike">

          <i id="empty_heart" class="far fa-heart" v-if="!liked"></i>

          <i id="filled_heart" class="fas fa-heart" v-if="liked"></i>

      </div>
      <span>J'aime</span>
    </div>
    <span class="num_likes">{{ num_likes }} {{ likeOrLikes }}</span>
  </div>
</template>
<style scoped lang="scss">
.like_section {
  border-radius: 10px;
  background-color: white;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80px;

}
.like {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;

  span {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
  }
}

.like_icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 30px;
  width: 30px;
  cursor: pointer;

  i {
    color: #fd2d01;
    font-size: 25px;
    background: #fd2d01;
    background-clip: text;
    -webkit-background-clip: text;
    position: absolute;
  }
  #empty_heart {
    color: black;
  }
}

.num_likes {
  font-size: 20px;
  font-weight: bold;
}

// Animation des coeurs
.display_like-enter-from,
.display_like-leave-to {
  transform: scale(0);
}

</style>
