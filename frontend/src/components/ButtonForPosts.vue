<script>
export default {
  name: "ButtonForPosts",
  data() {
    return {};
  },
  props: {
    post_button_name: String,
  },
};
</script>

<template>
  <button>{{ post_button_name }}</button>
</template>



<style scoped lang="scss">
button {
  background-color: #fd2d01;
  padding: 10px;
  opacity: 1;
  cursor: pointer;
  font-size: 22px;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: bolder;

}
</style>
