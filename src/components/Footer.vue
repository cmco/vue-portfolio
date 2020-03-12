<template>
  <div id="footerDiv">
    <div class="footerColumn">
      <h4>Clients</h4>
      <p>Sign Up</p>
      <p>Perks</p>
      <p>FAQs</p>
    </div>
    <div class="footerColumn">
      <h4>Partners</h4>
      <p>Partner with Us</p>
      <p>Testimonials</p>
      <p>FAQs</p>
    </div>
    <div class="footerColumn">
      <h4>Support</h4>
      <p>About Us</p>
      <p>Contact Us</p>
      <p>Creator</p>
    </div>
    <div class="footerColumn" id="socialMediaColumn">
      <h4>Social Media</h4>
      <div class="socialMediaIconContainer">
        <a href="https://www.google.com">
          <img
            class="socialMediaIcons"
            src="Icons/fontawesome-free-5.10.1-web/svgs/brands/facebook-f.svg"
            alt=""
          />
        </a>
        <img
          class="socialMediaIcons"
          src="Icons/fontawesome-free-5.10.1-web/svgs/brands/twitter.svg"
          alt=""
        />
      </div>
      <div class="socialMediaIconContainer">
        <img
          class="socialMediaIcons"
          src="Icons/fontawesome-free-5.10.1-web/svgs/brands/instagram.svg"
          alt=""
        />
        <img
          class="socialMediaIcons"
          src="Icons/fontawesome-free-5.10.1-web/svgs/brands/linkedin.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
#footerDiv {
  clear: both;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  background-color: gray;
}

#footerDiv :last-child {
  border: 0;
}

.footerColumn {
  font-family: "Roboto";
  margin: 2rem;
  margin-bottom: 0;
  width: 8rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
}

.footerColumn h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.footerColumn p {
  margin: 0.25rem;
  padding: 0;
}

.socialMediaIconContainer {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

#socialMediaColumn {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

#socialMediaColumn img {
  width: 2rem;
  height: 2rem;
}

#copyright {
  font-family: "Roboto";
  text-align: center;
  margin: 0.5rem;
}
</style>
