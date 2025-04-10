<template>
  <div class="main-wrapper">
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="blog-view">
                <div class="blog blog-single-post">
                  <div class="blog-image">
                    <a href="javascript:void(0);"
                      ><img
                        alt="blog-image"
                        src="@/assets/img/core/1.png"
                        class="img-fluid"
                    /></a>
                  </div>
                  <h3 class="blog-title">
                    Doccure – Making your clinic painless visit?
                  </h3>
                  <div class="blog-info clearfix">
                    <div class="post-left">
                      <ul>
                        <li>
                          <div class="post-author">
                            <nuxt-link to="/"
                              ><img
                                src="@/assets/img/logo/default.png"
                                alt="Post Author"
                              />
                              <span>Dr. Darren Elder</span></nuxt-link
                            >
                          </div>
                        </li>
                        <li><i class="far fa-calendar"></i>4 Jan 2023</li>
                        <li><i class="far fa-comments"></i>12 Comments</li>
                        <li><i class="fa fa-tags"></i>Health Tips</li>
                      </ul>
                    </div>
                  </div>
                  <div class="blog-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </p>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus. Temporibus autem quibusdam
                      et aut officiis debitis aut rerum necessitatibus saepe
                      eveniet ut et voluptates repudiandae sint et molestiae non
                      recusandae. Itaque earum rerum hic tenetur a sapiente
                      delectus, ut aut reiciendis voluptatibus maiores alias
                      consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                  </div>
                </div>

                <!-- <div class="card blog-share clearfix">
                  <div class="card-header">
                    <h4 class="card-title">Share the post</h4>
                  </div>
                  <div class="card-body">
                    <ul class="social-share">
                      <li>
                        <a href="javascript:;" title="Facebook"
                          ><i class="fab fa-facebook"></i
                        ></a>
                      </li>
                      <li>
                        <a href="javascript:;" title="Twitter"
                          ><i class="fab fa-twitter"></i
                        ></a>
                      </li>
                      <li>
                        <a href="javascript:;" title="Linkedin"
                          ><i class="fab fa-linkedin"></i
                        ></a>
                      </li>
                      <li>
                        <a href="javascript:;" title="Google Plus"
                          ><i class="fab fa-google-plus"></i
                        ></a>
                      </li>
                      <li>
                        <a href="javascript:;" title="Youtube"
                          ><i class="fab fa-youtube"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div> -->
                <div class="card author-widget clearfix">
                  <div class="card-header">
                    <h4 class="card-title">About Author</h4>
                  </div>
                  <div class="card-body">
                    <div class="about-author">
                      <div class="about-author-img">
                        <div class="author-img-wrap">
                          <nuxt-link to="/"
                            ><img
                              class="img-fluid rounded-circle"
                              alt="Darren Elder"
                              src="@/assets/img/logo/default.png"
                          /></nuxt-link>
                        </div>
                      </div>
                      <div class="author-details">
                        <nuxt-link to="/" class="blog-author-name"
                          >Dr. Darren Elder</nuxt-link
                        >
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <div class="stickysidebar">
                <!-- Search -->
                <div class="card search-widget">
                  <div class="card-body">
                    <form class="search-form">
                      <div class="input-group">
                        <input
                          type="text"
                          placeholder="Search..."
                          class="form-control"
                        />
                        <b-button type="submit" variant="primary"
                          ><i class="fa fa-search"></i
                        ></b-button>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- /Search -->

                <!-- Latest Posts -->
                <div class="card post-widget">
                  <div class="card-header">
                    <h4 class="card-title">Latest News</h4>
                  </div>
                  <div class="card-body">
                    <ul class="latest-posts">
                      <li v-for="(item, index) in 4" :key="index">
                        <div class="post-thumb">
                          <nuxt-link to="/blog-details">
                            <img
                              class="img-fluid"
                              src="@/assets/img/core/2.png"
                              alt="blog-image"
                            />
                          </nuxt-link>
                        </div>
                        <div class="post-info">
                          <p>13/05/2025</p>
                          <h4>
                            <nuxt-link to="/blog-details"
                              >MU Home (2024-2025) Màu đỏ + Cộc tay | Bản PLAYER
                              [Có quần]</nuxt-link
                            >
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- /Latest Posts -->

                <!-- Categories -->
                <div class="card category-widget">
                  <div class="card-header">
                    <h4 class="card-title">Blog Categories</h4>
                  </div>
                  <div class="card-body">
                    <ul class="categories">
                      <li>
                        <a href="javascript:;">Cardiology <span>(62)</span></a>
                      </li>
                      <li>
                        <a href="javascript:;">Health Care <span>(27)</span></a>
                      </li>
                      <li>
                        <a href="javascript:;">Nutritions <span>(41)</span></a>
                      </li>
                      <li>
                        <a href="javascript:;">Health Tips <span>(16)</span></a>
                      </li>
                      <li>
                        <a href="javascript:;"
                          >Medical Research <span>(55)</span></a
                        >
                      </li>
                      <li>
                        <a href="javascript:;"
                          >Health Treatment <span>(07)</span></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- /Categories -->

                <!-- Tags -->
                <div class="card tags-widget">
                  <div class="card-header">
                    <h4 class="card-title">Tags</h4>
                  </div>
                  <div class="card-body">
                    <ul class="tags">
                      <li><a href="javascript:;" class="tag">Children</a></li>
                      <li><a href="javascript:;" class="tag">Disease</a></li>
                      <li>
                        <a href="javascript:;" class="tag">Appointment</a>
                      </li>
                      <li><a href="javascript:;" class="tag">Booking</a></li>
                      <li><a href="javascript:;" class="tag">Kids</a></li>
                      <li><a href="javascript:;" class="tag">Health</a></li>
                      <li><a href="javascript:;" class="tag">Family</a></li>
                      <li><a href="javascript:;" class="tag">Tips</a></li>
                      <li><a href="javascript:;" class="tag">Shedule</a></li>
                      <li><a href="javascript:;" class="tag">Treatment</a></li>
                      <li><a href="javascript:;" class="tag">Dr</a></li>
                      <li><a href="javascript:;" class="tag">Clinic</a></li>
                      <li><a href="javascript:;" class="tag">Online</a></li>
                      <li>
                        <a href="javascript:;" class="tag">Health Care</a>
                      </li>
                      <li><a href="javascript:;" class="tag">Consulting</a></li>
                      <li><a href="javascript:;" class="tag">Doctors</a></li>
                      <li><a href="javascript:;" class="tag">Neurology</a></li>
                      <li><a href="javascript:;" class="tag">Dentists</a></li>
                      <li><a href="javascript:;" class="tag">Specialist</a></li>
                      <li><a href="javascript:;" class="tag">Doccure</a></li>
                    </ul>
                  </div>
                </div>
                <!-- /Tags -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
  </div>
</template>
