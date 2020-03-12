<template>
  <div class="Projects">
    <div id="projectsTitle">
      <h1>Projects</h1>
    </div>
    <div id="descriptionContainer">
      <div
        data-aos="fade-left"
        v-if="slide === 0"
        class="projectDescriptionContainer"
      >
        <h1 class="projectTitle">
          {{ descriptions[slide].title }}
        </h1>
        <h3 class="projectDescription">
          {{ descriptions[slide].body }}
        </h3>
        <h4>Languages</h4>
        <div class="languageListContainer">
          <li v-for="language in descriptions[slide].languages" :key="language">
            {{ language }}
          </li>
        </div>
      </div>

      <div
        data-aos="fade-left"
        v-if="slide === 1"
        class="projectDescriptionContainer"
      >
        <h1 class="projectTitle">
          {{ descriptions[slide].title }}
        </h1>
        <h3 class="projectDescription">
          {{ descriptions[slide].body }}
        </h3>
        <h4>Languages</h4>
        <div class="languageListContainer">
          <li v-for="language in descriptions[slide].languages" :key="language">
            {{ language }}
          </li>
        </div>
      </div>

      <div
        data-aos="fade-left"
        v-if="slide === 2"
        class="projectDescriptionContainer"
      >
        <h1 class="projectTitle">
          {{ descriptions[slide].title }}
        </h1>
        <h3 class="projectDescription">
          {{ descriptions[slide].body }}
        </h3>
        <h4>Languages</h4>
        <div class="languageListContainer">
          <li v-for="language in descriptions[slide].languages" :key="language">
            {{ language }}
          </li>
        </div>
      </div>

      <div
        data-aos="fade-left"
        v-if="slide === 3"
        class="projectDescriptionContainer"
      >
        <h1 class="projectTitle">
          {{ descriptions[slide].title }}
        </h1>
        <h3 class="projectDescription">
          {{ descriptions[slide].body }}
        </h3>
        <h4>Languages</h4>
        <div class="languageListContainer">
          <li v-for="language in descriptions[slide].languages" :key="language">
            {{ language }}
          </li>
        </div>
      </div>
    </div>

    <div>
      <div data-aos="slide-up" id="carouselContainer">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000;"
          v-model="slide"
          controls
          indicators
        >
          <a href="https://github.com/cmco/foodscape">
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="@/assets/vlogsitePreview.png"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </a>
          <a href="https://github.com/cmco/gobook">
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="@/assets/gobookPreview.png"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </a>
          <a href="https://github.com/cmco/react-hangman">
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="@/assets/hangmanPreview.png"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </a>
          <a href="https://github.com/cmco/react-pokedex">
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="@/assets/pokedexPreview.png"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </a>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      slide: 0,
      descriptions: [
        {
          id: 1,
          title: "Foodscape",
          body:
            "Food Blog Site made for me and my girlfriend's food vlog. One of the first sites I developed, serving as practice for image src handling.",
          languages: ["Vanilla JS", "HTML", "CSS"]
        },
        {
          id: 2,
          title: "GoBook",
          body:
            "Vacation Booking Site (think Airbnb). Made using a minimalist style, with the main color palette used being only black and white, thus focusing on clarity.",
          languages: ["Vanilla JS", "HTML", "CSS"]
        },
        {
          id: 3,
          title: "React Hangman",
          body:
            "React App of Hangman. Takes in a random word from an array and sets as prop (on every page reload or game reset) and keeps track of wrong guesses (state).",
          languages: ["ReactJS", "HTML", "CSS"]
        },
        {
          id: 4,
          title: "React Pokédex",
          body:
            "React App of Pokédex. Done as a practice of mapping default props and rendering them using tempalte literals.",
          languages: ["ReactJS", "HTML", "CSS"]
        }
      ]
    };
  }
};
</script>

<style scoped>
.Projects {
  overflow: hidden;
  background: linear-gradient(90deg, #413c69, #4a47a3);
  padding-bottom: 4em;
}

#projectsTitle {
  clear: both;
  display: block;
  float: left;
  text-align: left;
  color: orange;
  margin: 1em;
  padding-top: 4em;
}

#carouselContainer {
  float: left;
  margin: 2em;
  width: 50%;
  box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.75);
}

.projectTitle {
  color: orange;
}

#descriptionContainer {
  width: 40%;
  float: right;
  clear: both;
}

.projectDescriptionContainer {
  float: right;
  margin: 1em;
  width: 100%;
  color: #eab9c9;
}

.projectDescription {
  clear: both;
  height: 5em;
}
</style>
