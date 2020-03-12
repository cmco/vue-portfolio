<template>
  <b-navbar toggleable="lg" type="dark" sticky="true" variant="dark">
    <b-navbar-brand id="navbar" href="/">ced.co</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#aboutTitle">About Me</b-nav-item>
        <b-nav-item href="#educationTitle">Education</b-nav-item>
        <b-nav-item href="#projectsTitle">Projects</b-nav-item>
        <b-nav-item href="#contactsTitle">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-nav-item href="#">Documentation</b-nav-item>
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
