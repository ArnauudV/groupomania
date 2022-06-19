<script>
import UserButtonLog from "./UserButtonLog.vue";
import { checkValidityPW } from "../functions/formCheck.js";

import { checkValidityMail } from "../functions/formCheck.js";
import { sendSignupForm } from "../functions/fetchUser.js";

export default {
  name: "SignupForm",
  data() {
    return {
      nickname: "",
      last_name: "",
      first_name: "",
      email: "",
      password: "",
      confirmSignupForm: false,
      showErrorSignupForm: false,
      errorSignupForm: "Placeholder",
      password_showed: false,
    };
  },
  components: {
    UserButtonLog,
  },
  methods: {

    checkValidityMail,
    checkValidityPW,
    sendSignupForm,
    toggleShowPassword() {
      if (!this.password_showed) {
        this.password_showed = true;
        document.getElementById("password").setAttribute("type", "text");
      } else {
        this.password_showed = false;
        document.getElementById("password").setAttribute("type", "password");
      }
    },
    async goToLoginForm() {
      this.showErrorSignupForm = false;
      let reponse = await sendSignupForm(
        this.nickname,
        this.last_name,
        this.first_name,
        this.email,
        this.password
      );
      if (!reponse.error) {
        this.showErrorSignupForm = false;
        this.confirmSignupForm = true;
        setTimeout(() => {
          this.$router.push(`/Login`);
        }, 2000);
        return;
      }
      this.showErrorSignupForm = true;
      this.errorSignupForm = reponse.error;
      return;
    },
  },
};
</script>

<template>
  <div class="SignupForm">
    <h2>Veuillez créer un compte</h2>
    <form id="SignupForm" v-on:submit.prevent="goToLoginForm">

      <label for="last_name">Nom</label>
      <input
        @input="isLastNameValid(this.last_name, 'last_name')"
        class="input_form"
        id="last_name"
        type="text"
        v-model="last_name"
      />
      <label for="first_name">Prénom</label>
      <input
        @input="isFirstNameValid(this.first_name, 'first_name')"
        class="input_form"
        id="first_name"
        type="text"
        v-model="first_name"
      />
      <label for="nickname">Pseudo</label>
      <input
        @input="CheckValidName(this.nickname, 'nickname')"
        class="input_form"
        id="nickname"
        type="text"
        v-model="nickname"
      />
      <label for="email">E-Mail</label>
      <input
        @input="checkValidityMail(this.email, 'email')"
        class="input_form"
        id="email"
        type="email"
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

      <div class="submitForm">

          <UserButtonLog
            v-show="!confirmSignupForm"
            buttonClass="formButton"
            buttonText="Valider"
            disabled
          />

        <div class="SignupForm_result">

            <span class="signed" v-if="confirmSignupForm">
              <p>Création du compte réussie</p>
              <p>Veuillez vous connecter avec vos identifiants</p>
            </span>

            <span class="errorSign" v-if="showErrorSignupForm">{{
              errorSignupForm
            }}</span>
   
        </div>
      </div>
    </form>
  </div>
</template>



<style scoped lang="scss">
.SignupForm {
  margin-top: 40px;
  padding: 1rem;
}
.password_box {
  position: relative;
}
#show_password {
  font-size: 20px;
  position: absolute;
  right: 20px;
  width: 30px;
  bottom: 24px;
}
#password_infos {
  text-align: left;
  margin: 0;
  margin-top: 5px;
}
i {
  position: absolute;
}
h2 {
  font-size: 22px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: right;
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

#SignupForm {
  width: 40%;
  
  margin: auto;
}

label {
  display: flex;
  margin-top: 20px;
  margin-bottom: 2px;
  font-weight: bold;
  font-size: 17px;
}

input {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  padding-left: 5px;

  &:focus {
    background-color: lightblue;
    color: black;
  }
}

.submit_form {
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

.SignupForm_result {
  height: 30px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.signed {
  color: green;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 300px;
  height: 100px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 0;
  }
}

.errorSign {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fd2d01;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  margin-top: 70px;
}


.successAppear-enter-from {
  opacity: 0;
}

.errorAppear-enter-from {
  opacity: 0;
}


.fadeButton-leave-to {
  opacity: 0;
}
</style>
