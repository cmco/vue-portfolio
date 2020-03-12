<template>
  <div class="Home">
    <div id="profAndName">
      <div>
        <img
          id="ProfileIcon"
          alt="ProfileIcon"
          src="@/assets/sablayCircle.png"
        />
      </div>
      <h1 id="name">Cedrick Co</h1>
      <h2 id="position">Full Stack Web Developer</h2>
      <h3 id="email">cmco@up.edu.ph</h3>
      <div id="Links">
        <a href="https://www.github.com/cmco">
          <b-button class="buttonLink" pill="true" variant="primary">
            <img class="logo" src="@/assets/Icons/github.svg" alt="" />
            Github
          </b-button>
        </a>

        <a href="https://www.linkedin.com/in/cedrick-co-8999671a3">
          <b-button class="buttonLink" pill="true" variant="primary">
            <img class="logo" src="@/assets/Icons/linkedin.svg" alt="" />
            LinkedIn
          </b-button>
        </a>
      </div>
    </div>

    <div id="welcomeContainer">
      <h1 id="welcomeText">
        ced.co is the portfolio site <br />of cedrick co<br />
      </h1>
      <vue-typed-js
        id="typingText"
        :showCursor="false"
        :loop="true"
        :strings="['developer', 'designer', 'student', 'programmer', 'writer']"
      >
        <h1 class="typing"></h1>
      </vue-typed-js>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAndName",
  components: {}
};
</script>

<style scoped>
@-webkit-keyframes GradientRoll {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes GradientRoll {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes GradientRoll {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.typing {
  float: right;
  font-size: 6em;
}

#name {
  padding-top: 0.2em;
  color: wheat;
  text-align: center;
}

#position,
#email {
  padding-bottom: 0.2em;
  color: wheat;
  text-align: center;
}

#Links {
  text-align: center;
}
.logo {
  width: 1em;
  padding: 0;
  margin: 0;
}

.buttonLink {
  margin: 0.75em;
  height: 2em;
  box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.75);
}

#ProfileIcon {
  display: block;
  max-height: 15em;
  max-width: auto;
  margin-left: auto;
  margin-right: auto;
}

.Home {
  height: 91.5vh;
  width: 100%;
  background-color: eab9c9;
}

#typingText {
  float: right;
  color: orange;
}

#profAndName {
  float: left;
  margin-top: 4em;
  margin-left: 6em;
  padding: 1em;
  border-radius: 1em;
  box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.75);
  background: linear-gradient(329deg, #413c69, #4a47a3, #ad62aa);
  -webkit-animation: GradientRoll 2s ease infinite;
  -moz-animation: GradientRoll 2s ease infinite;
  animation: GradientRoll 2s ease infinite;
  background-size: 600% 600%;
}

#welcomeContainer {
  padding-top: 10rem;
  float: right;
  margin: 2rem;
  color: #4a47a3;
  text-align: right;
}

#welcomeText {
  font-size: 3.5em;
}
</style>
