

<script>
import ChechUserLog from "./components/ChechUserLog.vue";
import IfUserNotLog from "./components/IfUserNotLog.vue";
export default {
  data() {
    return {
      pictureChange: 0,
    };
  },
  components: {
    IfUserNotLog,
    ChechUserLog,
  },
  methods: {
    toggleHeaderOnScroll() {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("header").style.top = "0";
        } else {
          document.getElementById("header").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
      };
    },
  },
  beforeCreate() {
    this.$store.dispatch("changeLogState");
  },
  mounted() {
    this.toggleHeaderOnScroll();
  },
};
</script>
<template>
  <div id="main_vue">
    <div name="toggleNavBar">
      <header id="header">
        <div id="nav_bar">
          <div id="logo_not_logged" v-if="$store.state.logState == false">
            <img id="logo"
              alt="Groupomania logo"
              src="./assets/Groupomania-logo-red.png"
            />
          </div>
          <div id="logo_logged" v-if="$store.state.logState == true">
          </div>
          <IfUserNotLog v-if="$store.state.logState == false" />
          <ChechUserLog v-if="$store.state.logState == true" :key="pictureChange" />
        </div>
      </header>
    </div>
    <main>
      <router-view />
    </main>

  </div>
</template>
<style lang="scss">
#logo {
  width: 100px;
}
body {
  margin: 0;
  margin-top: 60px;
}
#main_vue {
  background-color: white;
}
main {
  min-height: 100%;
  max-width: 1000px;
  margin: auto;
  margin-top: 5rem;
  padding-bottom: 100px;
}
header {
  display: flex;
  height: 60px;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  border-bottom: 2px solid #FD2D01;
  z-index: 5;
  background-color:  white;

}
#nav_bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 950px;
  margin: auto;
}
#logo_not_logged {
  height: 50px;
}

#logo_logged {
  img {
    width: 50px;
  }
}

#app {
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

footer {
  height: 160px;
  width: 100%;
  background-color: #4E5166;
}
</style>
