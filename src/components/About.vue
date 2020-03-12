<template>
  <div class="About">
    <div id="columnContainer">
      <div class="columns" id="leftColumn">
        <div data-aos="zoom-in" id="aboutTitle">
          <h1>Biography</h1>
          <h2>
            "Success is the sum of small efforts, <br />
            repeated day in and day out."
          </h2>
        </div>
        <h5
          class="fadeContainer"
          data-aos-delay="250"
          data-aos="fade-right"
          id="firstParagraph"
        >
          For as long as I can remember, I have been tied closely to tech. The
          very first gift I remember asking from my parents for my birthday was
          a PlayStation 2. About 5 years later, I asked for a PlayStation
          Portable. 9 years after that, a desktop PC for me to play games on
          (with the ruse of using it for school.) <br /><br />
          And just as consistent as my wishes, was my desire to study it. I
          spent numerous hours reading about the latest tech news. While my
          other friends were busy obsessing over the fastest cars or watching
          their favorite teams in the NBA, I was busy watching videos on how to
          build a PC.
        </h5>
      </div>
      <div class="fadeContainer" data-aos-delay="250" data-aos="fade-left">
        <div class="columns" id="rightColumn">
          <h5 id="secondParagraph">
            It came as no surprise to anyone that when I entered college, I
            chose Computer Science as my degree. And while things didn't exactly
            work out for me in there, my passion for dev and tech was stronger
            than ever before.<br /><br />
            Driven by my dreams to become a Web Developer, I self-studied and
            continously applied what I learned during my free time.
            <br /><br />And now, here I am...
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.About {
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background: linear-gradient(90deg, #413c69, #4a47a3);
}

#aboutTitle {
  float: left;
  text-align: left;
  color: #eab9c9;
  margin: 1em;
  padding-top: 4em;
  color: orange;
}

.columnContainer {
  width: 100%;
}

.columns {
  width: 45%;
  text-align: left;
  margin: 1em;
  color: #eab9c9;
}

#leftColumn {
  clear: both;
  float: left;
}

#rightColumn {
  float: right;
  padding-top: 4em;
}

#firstParagraph {
  clear: both;
}

#secondParagraph {
  margin: 1em;
}
</style>
