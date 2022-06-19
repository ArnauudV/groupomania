

<script>
import UserButtonLog from "./UserButtonLog.vue";
import { checkValidityMail } from "../functions/formCheck.js";
import { checkValidityPW } from "../functions/formCheck.js";
import { sendLoginForm } from "../functions/fetchUser.js";
import { userLogged } from "../functions/fetchUser.js";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      confirmLoginForm: "",
      showErrorLoginForm: "",
      errorLoginForm: "",
      password_showed: false,
    };
  },
  components: {
    UserButtonLog,
  },
  methods: {
    checkValidityMail,
    checkValidityPW,
    sendLoginForm,
    userLogged,
    toggleShowPassword() {
      if (!this.password_showed) {
        this.password_showed = true;
        document.getElementById("password").setAttribute("type", "text");
      } else {
        this.password_showed = false;
        document.getElementById("password").setAttribute("type", "password");
      }
    },
    async LoginForm() {
      this.showErrorLoginForm = false;
      let reponse = await sendLoginForm(this.email, this.password);
      if (!reponse.error) {
        localStorage.clear();
        localStorage.setItem("userId", reponse.userId);
        localStorage.setItem("token", `BEARER ${reponse.token}`);
        localStorage.setItem("nickname", reponse.nickname);
        localStorage.setItem("privilege", reponse.privilege);
        this.showErrorLoginForm = false;
        this.confirmLoginForm = true;
        setTimeout(() => {
          this.$store.dispatch("changeLogState"); 
          this.$router.push(`/allPosts/`);
        });
      } else {
        this.showErrorLoginForm = true;
        this.errorLoginForm = reponse.error;
        return;
      }
      return reponse;
    },
  },
};
</script>
<template>
  <div class="LoginForm">
    <h1>Veuillez vous connecter</h1>
    <form id="LoginForm" v-on:submit.prevent="LoginForm">
      <label for="nickname">E-Mail</label>
      <input
        @input="checkValidityMail(this.email, 'email')"
        class="input_form"
        id="email"
        type="text"
        v-model="email"
      />
      <div class="password_box">
        <label for="password">Mot de passe</label>
        <input
          @input="checkValidityPW(this.password, 'password')"
          class="input_form"
          id="password"
          type="password"
          v-model="password"
        />
        <div id="show_password" @click="toggleShowPassword">
          <i class="fas fa-eye-slash" v-if="!password_showed"></i>
          <i class="fas fa-eye" v-if="password_showed"></i>
        </div>
      </div>
      <div class="form_sub">

          <UserButtonLog
            v-if="!confirmLoginForm"
            buttonClass="formButton"
            buttonText="Se Connecter"
            disabled
          />

        <div class="LoginForm_result">
            <span class="logged" v-if="confirmLoginForm">Connecté</span>
            <span class="errorForLog" v-if="showErrorLoginForm">{{ errorLoginForm }}</span>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">


i {
  position: absolute;
}
h1 {
  font-size: 22px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  width: 94%;
  margin: auto;

  &::after {
    background-color: lightgrey;
    content: "";
    display: block;
    height: 1px;
    margin-top: 2px;
    width: 100%;
  }
}




input {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  padding-left: 5px;

  &:focus {
    background-color: lightblue;
  }
}
label {
  display: flex;
  margin-top: 20px;
  margin-bottom: 2px;
  font-weight: bold;
  font-size: 17px;
}
.form_sub {
  position: relative;
  width: 80%;
  margin: auto;
  height: 50px;
}

button {
  width: 50px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.LoginForm_result {
  height: 30px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
#LoginForm {
  margin: auto;
    margin-left:30%;
  margin-right:30%;
}

.logged {
  color: green;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 13px;
  font-weight: bold;
  font-size: 20px;
}

.errorForLog {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fd2d01;
  font-size: 20px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  left: 0;
  right: 0;
  bottom: -65px;
}
.LoginForm {
  margin-top: 3rem;

}
.password_box {
  position: relative;
}
#show_password {
  font-size: 20px;
  position: absolute;
  right: 20px;
  width: 30px;
  bottom: 25px;
}


</style>
