

<script>
import ModifyPost from "@/components/ModifyPost";
import ButtonForPosts from "@/components/ButtonForPosts";
import { requestDeletePostFromAPI } from "@/functions/fetchPost";
export default {
  name: "PostPanel",
  data() {
    return {
      show_modify_post: false,
    };
  },
  props: ["id_post", "post_id_user", "post_title", "post_text", "post_image"],
  components: {
    ButtonForPosts,
    ModifyPost,
  },
  methods: {
    requestDeletePostFromAPI,
      async deletePost() {
      let reponse = await requestDeletePostFromAPI(this.id_post);
      if (!reponse.error) {
        this.$router.push(`/allPosts/`);
      }
    },
    confirm_deletePost() {
      this.deletePost();
    },
    toggleModifyPost() {
      if (!this.show_modify_post) {
        this.show_modify_post = true;
      } else {
        this.show_modify_post = false;
      }
    },
    requestUpdatePostInfosInView() {
        this.$emit("requestUpdatePostInfosInView");
    }
  },
};
</script>
<template>
  <div id="post_panel">
    <ButtonForPosts post_button_name="Modifier" @click="toggleModifyPost" />
    <ButtonForPosts post_button_name="Supprimer" @click="confirm_deletePost" />
    
    <ModifyPost
      v-if="show_modify_post"
      @cancelPost="toggleModifyPost"
      @postUpdated="requestUpdatePostInfosInView"
      :id_post="id_post"
      :post_id_user="post_id_user"
      :post_title="post_title"
      :post_text="post_text"
      :post_image="post_image"
    />

  </div>
</template>
<style scoped lang="scss">
#post_panel {
  border: 2px solid  #FD2D01;
  border-radius: 1.5rem;
  background-color:  #FD2D01;
  width: 30%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  column-gap: 10px;
  margin-left:35%;
  height: 4rem;
  margin-bottom: 5rem;
}
</style>
