<template>
  <div class="w-100 footer-content">
    <div class="container">
      <div
        class="d-flex flex-column align-items-center justify-content-between py-3 px-2 p-md-5 mt-5"
      >
        <section class="about-section" id="about">
          <h3 class="text-center">Why Choose Us?</h3>
          <p>
            {{ whyChooseUsText[0].text }}
          </p>
          <p>
            {{ whyChooseUsText[1].text }}
          </p>
        </section>
        <section class="contact-section w-100 mx-5 my-3 my-md-5" id="contact">
          <h3 class="text-center mb-3">Contact us</h3>
          <div class="d-flex flex-column flex-md-row align-items-md-center m-0">
            <div class="">
              <div class="img-box mx-auto mb-5 mb-md-0">
                <img src="../assets/myc2pic.jpg" alt="image" class="item-img" />
              </div>
            </div>
            <div class="m-0 ml-md-5">
              <p>Hareesh Sapparad</p>
              <p class="d-flex align-items-center">
                <i class="fas fa-envelope"></i
                ><a class="link pl-2 ellipsis-email-text"
                  >hareesh_sapparad@organicshopping.com</a
                >
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
              <a class="link">hareesh_sapparad@organicshopping.com </a>
              All rights reserved.
            </div>
            <p class="mb-0">
              {{ copyrightsText }}
            </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import { whyChooseUsText, copyrightsText } from "../data/footer-data";

export default {
  data() {
    return {
      whyChooseUsText,
      copyrightsText
    };
  }
};
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
@media (max-width: 480px) {
  .ellipsis-email-text {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
