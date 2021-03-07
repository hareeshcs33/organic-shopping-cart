<template>
  <div>
    <div
      class="d-flex flex-column align-items-center justify-content-between footer-content p-5"
    >
      <section class="about-section" id="about">
        <h3 class="text-center">About Us</h3>
        <p>About content goes here...</p>
      </section>
      <section class="contact-section" id="contact">
        <h3 class="text-center">Contact us</h3>
        <p>Contact details goes here...</p>
      </section>
      <footer class="footer">
        <div
          class="d-flex align-items-center justify-content-center social-icons mb-3"
        >
          <a class="d-flex align-items-center mr-3 link">
            <i class="fab fa-facebook-square icon"></i>Facebook
          </a>
          <a class="d-flex align-items-center mr-3 link">
            <i class="fab fa-twitter icon"></i>Twitter
          </a>
          <a class="d-flex align-items-center mr-3 link">
            <i class="fab fa-instagram icon"></i>Instagram
          </a>
          <a class="d-flex align-items-center mr-3 link">
            <i class="fab fa-youtube icon"></i>Youtube
          </a>
          <a class="d-flex align-items-center mr-3 link">
            <i class="fab fa-whatsapp icon"></i>Whatsapp
          </a>
        </div>
        <div class="footer-text text-center">
          <div class="mb-2">
            <a class="link"
              >&copy; 2021 hareesh_sapparad_organicshopping.com
            </a>
            All rights reserved.
          </div>
          <p class="mb-0">
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer-content {
  background-color: #efefef;
  min-height: 75vh;
}
.footer {
  background-color: #efefef;
}
.icon {
  font-size: 22px;
  margin-right: 5px;
}
</style>
