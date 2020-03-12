<template>
  <div class="Work">
    <div id="workTitle">
      <h1>Work Experience</h1>
    </div>

    <div data-aos="fade-left" id="dfaDiv">
      <b-img
        id="dfaGroupImage"
        center
        src="@/assets/DFAGroup.jpg"
        fluid
        alt="Group Picture"
      ></b-img>
    </div>

    <div>
      <div data-aos="fade-right" id="dfaContainer">
        <b-img id="dfaLogo" left src="@/assets/Icons/DFALogo.png" fluid></b-img>
        <h2 id="jobTitle">
          Administrative Intern at the <br />
          Department of Foreign Affairs
        </h2>
        <ul id="responsiblitiesContainer">
          <li>
            <h3>Drafted Office Orders and Memorandums</h3>
          </li>
          <li>
            <h3>
              Updated and maintained office supplier databases
            </h3>
          </li>
          <li>
            <h3>
              Presented the basics of the public procurement process to
              suppliers and bidders
            </h3>
          </li>
          <li>
            <h3>
              Drafted revisions for the DFA Public Procurement Guidebook
            </h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work"
};
</script>

<style>
.Work {
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background: linear-gradient(90deg, #4a47a3, #413c69);
}

#workTitle {
  clear: both;
  display: block;
  float: left;
  text-align: left;
  width: 100%;
  color: orange;
  margin: 1em;
  padding-top: 4em;
}

#dfaContainer {
  width: 50%;
  margin: 2em;
}

#dfaLogo {
  width: 6em;
  height: 6em;
}

#jobTitle {
  float: left;
  padding-left: 0.5em;
  padding-top: 0.25em;
  color: orange;
  width: auto;
}

#responsiblitiesContainer {
  float: left;
  margin-top: 2em;
  color: #eab9c9;
}

#dfaGroupImage {
  width: 35em;
  box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.75);
}

#dfaDiv {
  margin: 2em;
  width: 40%;
  float: right;
}
</style>
