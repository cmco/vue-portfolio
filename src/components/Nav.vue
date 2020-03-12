<template>
  <b-navbar toggleable="lg" type="dark" sticky="true" variant="dark">
    <b-navbar-brand id="navbar" href="/">ced.co</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#aboutTitle">About Me</b-nav-item>
        <b-nav-item href="#educationTitle">Education</b-nav-item>
        <b-nav-item href="#languagesTitle">Languages</b-nav-item>
        <b-nav-item href="#projectsTitle">Projects</b-nav-item>
        <b-nav-item href="#workTitle">Work Experience</b-nav-item>
        <b-nav-item href="#activitiesandskillsTitle"
          >Other Activities and Skills</b-nav-item
        >
        <b-nav-item href="#contactsTitle">Contact Me</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-nav-item href="https://github.com/cmco/vue-portfolio"
      >Documentation</b-nav-item
    >
  </b-navbar>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style>
.nav {
  height: 5vh;
}

.item {
  color: red;
}
</style>
