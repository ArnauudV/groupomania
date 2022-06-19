
<script>


export default {
  name: "PostCardMin",
  data() {
    return {
      file_name: "",
      file_type: "",
      file_upload: "",
      fileChosen: false,
    };
    
  },
  props: [
    "count_post",
    "id_post",
    "post_title",
    "user_picture",
    "nickname",
    "post_image"
  ],

  methods: {},
};
</script>


<template>
<router-link :to="`/post/${id_post}`">
  <div class="post_card" :data-id_post="id_post">
    <div class="post_title">
      
        <h2>{{ post_title }}</h2>
      
    </div>
    <div>
      <img alt="oui" src="../assets/Groupomania-logo-red.png"/>
    </div>
    <div class="posted">
      <div class="posted__by_user">
        <h3>{{ nickname }}</h3>
      </div>
    </div>
  </div>
  </router-link>
</template>

<style scoped lang="scss">
.post_card {

  margin-top: 10px;
  border-radius: 10px;
  background-color: white;
}
.post_title {
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 15px;
  h2 {
    color: black;
    margin: 0;
  }
}
a {
  text-decoration: none;

  &:visited {
    color: #fd2d01;
  }
}
h3 {
  margin-left: 5px;
}
.posted {
  border-top:1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 10px;
  height: 60px;

  &__by_user {
    display: flex;
    margin-left:85%;
    height: 100%;
  }
}


span {
  margin-left: 5px;
}
</style>
