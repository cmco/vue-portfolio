<template>
  <div class="Contacts">
    <div id="contactsTitle">
      <h1>Contact Me</h1>
    </div>

    <div id="tilesContainer">
      <div data-aos="fade-right" class="tileContainer">
        <img class="images" src="@/assets/Icons/envelope.svg" alt="" />
        <h2>Email</h2>
        <h3 class="links">cmco@up.edu.ph</h3>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=cmco@up.edu..ph&su=RE: Vue Portfolio Site"
        >
          <b-button pill="true" block variant="primary"
            >Send me an email!</b-button
          >
        </a>
      </div>
      <div data-aos="fade-in" class="tileContainer">
        <img class="images" src="@/assets/Icons/github.svg" alt="" />
        <h2>GitHub</h2>
        <h3 class="links">gitub.com/cmco</h3>
        <a href="https://github.com/cmco">
          <b-button pill="true" block variant="primary"
            >Check out my repos!</b-button
          >
        </a>
      </div>
      <div data-aos="fade-left" class="tileContainer">
        <img class="images" src="@/assets/Icons/linkedin.svg" alt="" />
        <h2>LinkedIn</h2>
        <h3 class="links">Cedrick Co</h3>
        <a href="https://www.linkedin.com/in/cedrick-co-8999671a3">
          <b-button pill="true" block variant="primary"
            >View my profile!</b-button
          >
        </a>
      </div>
      <div data-aos="slide-up" class="tileContainer">
        <img class="images" src="@/assets/Icons/facebook.svg" alt="" />
        <h2>Facebook</h2>
        <h3 class="links">fb.com/cedrick.co</h3>
        <a href="https://fb.com/cedrick.co">
          <b-button pill="true" block variant="primary">Add me!</b-button>
        </a>
      </div>
      <div data-aos="slide-up" class="tileContainer">
        <img class="images" src="@/assets/Icons/phone-square.svg" alt="" />
        <h2>Mobile Number</h2>
        <h3 class="links">09275354320</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts"
};
</script>

<style scoped>
.Contacts {
  overflow: hidden;
  width: 100%;
  background: linear-gradient(180deg, #4a47a3, #413c69);
  padding-bottom: 4em;
}

#contactsTitle {
  float: left;
  text-align: left;
  color: orange;
  margin: 1em;
  padding-top: 4em;
}

.tileContainer {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
  box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.75);
  text-align: center;
  margin: 3em;
  margin-bottom: 1em;
  width: 20%;
  height: 16em;
  text-align: center;
  border-radius: 1em;
  padding: 1em;
  align-items: center;
  color: #eab9c9;
  margin-top: 1em;
}

#tilesContainer {
  clear: both;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 2;
  vertical-align: middle;
}

.images {
  width: 5em;
  height: 5em;
}

.links {
  color: orange;
}

button {
  margin-top: 1em;
}
</style>
