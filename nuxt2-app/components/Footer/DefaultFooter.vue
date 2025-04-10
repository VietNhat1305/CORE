<template>
  <!-- Footer -->
  <footer class="footer footer-one">
    <div class="footer-top aos" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4">
            <div class="footer-widget footer-about">
              <div class="footer-logo">
                <img src="@/assets/img/logo/default.png" alt="logo" />
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">For Patients</h2>
                  <ul>
                    <li>
                      <router-link to="/search">Search for Doctors</router-link>
                    </li>
                    <li><router-link to="/login">Login</router-link></li>
                    <li><router-link to="/register">Register</router-link></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">For Doctors</h2>
                  <ul>
                    <li>
                      <router-link to="/appointments">Appointments</router-link>
                    </li>
                    <li><router-link to="/chat">Chat</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="footer-widget footer-contact">
                  <h2 class="footer-title">Contact Us</h2>
                  <div class="footer-contact-info">
                    <div class="footer-address">
                      <p>
                        <i class="feather-map-pin"></i> 3556 Beech Street, USA
                      </p>
                    </div>
                    <div class="footer-address">
                      <p><i class="feather-phone-call"></i> +1 315 369 5943</p>
                    </div>
                    <div class="footer-address mb-0">
                      <p><i class="feather-mail"></i> doccure@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <!-- Copyright -->
        <div class="copyright">
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <div class="copyright-text text-center">
                <p class="mb-0">
                  Copyright © {{ new Date().getFullYear() }}
                  <a href="javascript:;" target="_blank">Nguyễn Việt Nhật.</a>
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- /Copyright -->
      </div>
    </div>
  </footer>
  <!-- /Footer -->
</template>
