
<script>


export default {
  name: "CheckUserLog",
  data() {
    return {
      nickname: "",

    };
  },

  methods: {
 
    logOut() {
      localStorage.clear();
      this.$store.dispatch("changeLogState");
      this.$router.push("/Login");
    },
  },
};
</script>
<template>

  <div
    class="nav_section"
   
    v-if="$store.state.logState == true"
  >
  
    <div class="nav_section__post">
      <img id="logo" alt="Groupomania logo" src="../assets/icon.png" />
    </div>
    <h1>Groupomania</h1>
    <div class="nav_section__user">
    
          <div class="logout">
            <router-link class="logout__link" to="/Login" @click="logOut"
              >Se déconnecter</router-link>
          </div>
       
    </div>
  </div>
</template>

<style scoped lang="scss">
#logo {
  width: 50px;
}
.nav_section {
  width: 100%;
  max-width: 950px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  position:fixed !important;
    h1{
      margin-left:7rem !important;
      font-size:40px;
      margin-bottom:0 !important;
      margin-top:0;
    }
  &__post {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

  }

  &__post__bar {
    width: 30px;
    font-size: 25px;
    height: 30px;
  }
  &__post__menu {
    padding: 10px;
    left: 0%;
    width: 200px;
    display: flex;
    position: absolute;
    flex-direction: column;
    text-align: start;

    line-height: 30px;

    a {
      font-weight: bold;
      color: white;
      text-decoration: none;
    }
  }

  &__user {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 170px;
    position: relative;
    cursor: pointer;
    h4 {
      margin-right: 10px;
    }
    &__menu {
      padding: 10px;
      right: 0;
      display: flex;
      position: absolute;
      flex-direction: column;
      text-align: start;
      top: 60px;
      line-height: 30px;
      background-color: #333;

      a {
        font-weight: bold;
        color: white;
        text-decoration: none;
      }
    }
  }
}


.logout {
  display: flex;
  align-items: center;
  
  &__link {
    margin-left: 5px;
    border:1px solid #FFD7D7;
    padding:1rem;
    border-radius:2rem;
    background-color: #FFD7D7;
    color: white;
    font-size: 16px;
    font-weight: bolder;
    text-decoration: none;
    &:hover{
      opacity:0.5;
    }
  }
}


</style>
