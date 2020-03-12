<template>
  <div class="ActivitiesAndSkills">
    <div id="activitiesandskillsTitle">
      <h1>Other Activities and Skills</h1>
    </div>

    <div data-aos="fade-left" id="skillsDiv">
      <ul id="skills">
        <h3 v-for="skill in skills" :key="skill">{{ skill }}</h3>
      </ul>
    </div>

    <div id="orgDiv">
      <div data-aos-delay="100" data-aos="zoom-out" id="orgTile">
        <div>
          <img id="logo" src="@/assets/Icons/cursorLogo.png" alt="" />
        </div>
        <h2>
          UP Association of <br />
          Computer Science Majors
        </h2>
        <h3>
          Membership Committee Head <br />
          and Internal Vice President
        </h3>
        <h4>2018 - 2019</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivitiesAndSkills",
  data: function() {
    return {
      skills: [
        "Public Speaking",
        "Organizational Management",
        "HR Management",
        "Writing Proficiency",
        "Critical Thinking",
        "Conflict Resolution",
        "Code Refactoring",
        "Group Facilitiation",
        "Writing Proficiency",
        "Quick Learner"
      ]
    };
  }
};
</script>

<style>
.ActivitiesAndSkills {
  overflow: hidden;
  color: #eab9c9;
  background: linear-gradient(90deg, #413c69, #4a47a3);
}

#activitiesandskillsTitle {
  clear: both;
  display: block;
  float: left;
  text-align: left;
  color: orange;
  margin: 1em;
  padding-top: 4em;
}

#orgTile {
  margin: 2em;
  width: 100%;
  height: auto;
  text-align: center;
  border-radius: 1em;
  padding: 1em;
  color: #eab9c9;
  box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.75);
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
}

#orgDiv {
  clear: left;
  width: 40%;
}

#activitiesTitle {
  text-align: center;
}

#logo {
  width: 10em;
  height: auto;
  margin: 1em;
}

#skillsDiv {
  width: 50%;
  /* clear: both; */
  float: right;
  text-align: center;
}

#skills {
  margin: 9em;
}
</style>
