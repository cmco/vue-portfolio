<template>
  <div id="app">
    <ProfileAndName />
    <Nav />
    <About />
    <Education />
    <Projects />
    <Contacts />
  </div>
</template>

<script>
import ProfileAndName from "./components/ProfileAndName.vue";
import Nav from "@/components/Nav.vue";
import About from "./components/About.vue";
import Education from "./components/Education.vue";
import Projects from "@/components/Projects.vue";
import Contacts from "@/components/Contacts.vue";

export default {
  name: "App",
  components: {
    ProfileAndName,
    Nav,
    About,
    Education,
    Projects,
    Contacts
  },
  data() {
    return {
      page: 0
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

#app {
  font-family: Roboto, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}
</style>
