<template>
  <div class="Languages">
    <div>
      <h1 id="languagesTitle">Languages</h1>
    </div>

    <div id="languageContainer" text-center>
      <div data-aos="zoom-in">
        <b-img class="language" src="@/assets/Icons/html5.svg" fluid></b-img>
      </div>
      <div data-aos="zoom-in">
        <b-img class="language" src="@/assets/Icons/css3.svg" fluid></b-img>
      </div>
      <div data-aos="zoom-in">
        <b-img class="language" src="@/assets/Icons/sass.svg" fluid></b-img>
      </div>
      <div data-aos="zoom-in">
        <b-img class="language" src="@/assets/Icons/js.svg" fluid></b-img>
      </div>
      <div data-aos="zoom-in">
        <b-img class="language" src="@/assets/Icons/react.svg" fluid></b-img>
      </div>
      <div data-aos="zoom-in">
        <b-img class="language" src="@/assets/Icons/vuejs.svg" fluid></b-img>
      </div>
      <div data-aos="zoom-in">
        <b-img class="language" src="@/assets/Icons/node.svg" fluid></b-img>
      </div>
      <div data-aos="zoom-in">
        <b-img class="language" src="@/assets/Icons/java.svg" fluid></b-img>
      </div>
      <div data-aos="zoom-in">
        <b-img class="language" src="@/assets/Icons/python.svg" fluid></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Languages"
};
</script>

<style>
.Languages {
  overflow: hidden;
  width: 100%;
  background: linear-gradient(90deg, #4a47a3, #413c69);
}

#languagesTitle {
  clear: both;
  display: block;
  float: left;
  text-align: left;
  width: auto;
  color: orange;
  margin: 0.5em;
  padding-top: 1.5em;
}

#languageContainer {
  padding-top: 0;
  clear: both;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.language {
  width: 10em;
  height: 8em;
  margin: 2em;
}
</style>
