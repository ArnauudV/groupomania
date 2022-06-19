<script>
export default {
  name: "IfUserNotLog",
  data() {
    return {
      show_nav_menu: false,
      rotateIcon: false,
    };
  },


};
</script>

<template>
  <div class="nav_menu" >

    

      
        <router-link to="/Login"><div class="LoginForm">Connexion</div></router-link>
        
        <router-link to="/Signup"><div class="SignupForm">S'inscrire</div></router-link>
     


  </div>
</template>



<style scoped lang="scss">

.LoginForm, .SignupForm {
  margin:1rem;
  border: 1px solid red;
  border-radius:1rem;
  padding:0.5rem;
  background-color: red;
  color:white;
  text-decoration: none;
}
.nav_menu {
  display: flex;
  position: relative;
  cursor: pointer;
  h3 {
    margin-right: 15px;
  }
  &__icon {
    font-size: 25px;
    display: flex;
    width: 50px;
    justify-content: center;
    height: 60px;
    padding-top: 15px;
    border-bottom: 2px solid #FD2D01;
    i {
      position: absolute;
    }
  }
}

nav {
  padding: 10px;
  right: 0px;
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

    /* &.router-link-exact-active {
      color: #e72113;
    } */
  }
}




</style>
