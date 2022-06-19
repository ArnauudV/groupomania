<script>
// @ is an alias to /src
import { userLogged } from "@/functions/fetchUser.js";
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";

export default {
  name: "UserForm",
  components: {
    LoginForm,
    SignupForm,
  },
  beforeCreate() {
    if (userLogged()) this.$router.push("/allPosts");
  },
};
</script>

<template>
  <div id="user_form">
    <div class="title">
      <h1>Groupomania</h1>
    </div>
    <LoginForm v-if="$route.path == '/Login' || $route.path == '/Login/'" />
    <SignupForm v-if="$route.path == '/Signup' || $route.path == '/Signup/'" />
  </div>
</template>



<style scoped lang="scss">
#user_form{
  padding-top: 1px;
}
.title {
  margin-top: 20px;
}
h1 {
  margin-top: 0;
  color: #FD2D01;
  font-size: 25px;
}

button {
  height: 30px;
  width: 100px;
}
img {
  width: 200px;
}
</style>
