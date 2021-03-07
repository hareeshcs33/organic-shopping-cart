<template>
  <div class="w-100 footer-content">
    <div class="container">
      <div
        class="d-flex flex-column align-items-center justify-content-between p-5 mt-5"
      >
        <section class="about-section" id="about">
          <h3 class="text-center">Why Choose Us?</h3>
          <p>
            The supermarkets are crowded with all the brands and still if you
            are looking for pure unprocessed honey, it is difficult to find. It
            was this search for pure products away from the factory farms that
            led us to start our store.
          </p>
          <p>
            Today the world is crowded with lifestyle and food-related diseases.
            Heart diseases, diabetes and cancer have become part of our lives.
            What worries us is that these diseases have gradually crept into our
            children as well. Obesity and early maturity in kids are growing.
            Even the cases of diabetes and food allergy in kids are coming up.
            With this store, we want to provide options to you to access good
            food at the right price.
          </p>
        </section>
        <section class="contact-section w-100 mx-5 my-3 my-md-5" id="contact">
          <h3 class="text-center mb-3">Contact us</h3>
          <div class="d-flex flex-column flex-md-row m-0">
            <div class="">
              <div class="img-box mx-auto mb-5 mb-md-0">
                <img src="../assets/myc2pic.jpg" alt="image" class="item-img" />
              </div>
            </div>
            <div class="m-0 ml-md-5">
              <p>Hareesh Sapparad</p>
              <p>
                <i class="fas fa-envelope"></i
                ><a class="link pl-2">hareesh_sapparad@gmail.com</a>
              </p>
              <p>
                <i class="fas fa-phone-alt"></i>
                <a class="link pl-2">012-345-6789</a>
              </p>
            </div>
          </div>
        </section>
        <footer class="footer">
          <div
            class="d-flex align-items-center justify-content-center social-icons flex-wrap mb-3"
          >
            <a class="d-flex align-items-center mr-3 mb-3 link">
              <i class="fab fa-facebook-square icon"></i>Facebook
            </a>
            <a class="d-flex align-items-center mr-3 mb-3 link">
              <i class="fab fa-twitter icon"></i>Twitter
            </a>
            <a class="d-flex align-items-center mr-3 mb-3 link">
              <i class="fab fa-instagram icon"></i>Instagram
            </a>
            <a class="d-flex align-items-center mr-3 mb-3 link">
              <i class="fab fa-youtube icon"></i>Youtube
            </a>
            <a class="d-flex align-items-center mr-3 mb-3 link">
              <i class="fab fa-whatsapp icon"></i>Whatsapp
            </a>
          </div>
          <div class="text-center">
            <div class="mb-2">
              &copy; 2021
              <a class="link">hareesh_sapparad_organicshopping.com </a>
              All rights reserved.
            </div>
            <p class="mb-0">
              The content and images used on this site are copyright protected
              and copyrights vests with the respective owners. The usage of the
              content and images on this website is intended to promote the
              works and no endorsement of the artist shall be implied.
              Unauthorized use is prohibited and punishable by law.
            </p>
          </div>
        </footer>
      </div>
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
.img-box {
  border-radius: 100%;
}
</style>
