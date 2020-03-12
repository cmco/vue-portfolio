<template>
  <div class="Education">
    <div id="educationTitle">
      <h1>Education</h1>
    </div>
    <div
      data-aos-delay="100"
      data-aos="flip-down"
      id="bpa"
      class="courseContainer"
    >
      <div>
        <img class="logo" src="@/assets/Icons/NCPAGLogo.png" alt="" />
        <img class="logo" src="@/assets/Icons/UPLogo.png" alt="" />
      </div>
      <h2>B Public Administartion</h2>
      <h3>UP Diliman</h3>
      <h4>August 2017 - May 2020</h4>
      <a href="https://ncpag.upd.edu.ph">
        <b-button pill="true" block variant="primary"
          >ncpag.upd.edu.ph</b-button
        >
      </a>
    </div>
    <div
      data-aos-delay="200"
      data-aos="flip-down"
      id="bcs"
      class="courseContainer"
    >
      <div>
        <img class="logo" src="@/assets/Icons/DCSLogo.png" alt="" />
        <img class="logo" src="@/assets/Icons/UPLogo.png" alt="" />
      </div>
      <h2>BS Computer Science</h2>
      <h3>UP Diliman</h3>
      <h4>August 2014 - July 2017</h4>
      <a href="https://dcs.upd.edu.ph">
        <b-button pill="true" block variant="primary">dcs.upd.edu.ph</b-button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education"
};
</script>

<style scoped>
.Education {
  overflow: hidden;
  color: #eab9c9;
  background: linear-gradient(180deg, #4a47a3, #413c69);
}

#educationTitle {
  clear: both;
  display: block;
  float: left;
  text-align: left;
  width: auto;
  color: orange;
  margin: 1em;
  padding-top: 4em;
}

.courseContainer {
  margin: 4em;
  width: 40%;
  height: auto;
  text-align: center;
  border-radius: 1em;
  padding: 1em;
  color: #eab9c9;
}

#bpa {
  clear: both;
  float: left;
  box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.75);
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
}

#bcs {
  float: right;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.75);
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
}

.logo {
  max-width: 10em;
  height: auto;
  margin: 1em;
}

.collegeLink {
  border-radius: 1em;
  background-color: #eab9c9;
}
</style>
