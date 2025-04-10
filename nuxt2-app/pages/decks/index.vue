<template>
  <div class="main-wrapper">
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-sm-end">
                <b-button
                  type="button"
                  class="btn-label bg-color mb-2 me-2"
                  size="sm"
                  @click="showModal = true"
                >
                  <i class="mdi mdi-plus me-1 label-icon"></i> Thêm mới
                </b-button>
                <b-modal
                  v-model="showModal"
                  title="Thông tin"
                  title-class="text-black font-18"
                  body-class="p-3"
                  hide-footer
                  centered
                  no-close-on-backdrop
                  size="lg"
                >
                  <form ref="formContainer" class="login" @submit.prevent="">
                    <div class="row">
                      <div class="col-6">
                        <div class="mb-3">
                          <label class="text-left">Mã Code</label>
                          <span style="color: red">&nbsp;*</span>
                          <input v-model="model.code" type="hidden" />
                          <input
                            id="userName"
                            v-model.trim="model.code"
                            type="text"
                            class="form-control"
                            placeholder="Nhập tài khoản"
                          />
                        </div>
                      </div>

                      <div class="col-6">
                        <div class="mb-3">
                          <label class="text-left">Tên</label>
                          <span style="color: red">&nbsp;*</span>
                          <input v-model="model.name" type="hidden" />
                          <input
                            id="lastName"
                            v-model="model.name"
                            type="text"
                            class="form-control"
                            placeholder="Nhập tên"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="text-right pt-2 mt-3">
                      <b-button
                        variant="light"
                        class="btn si_accept_cancel btn-submit w-md"
                        @click="showModal = false"
                      >
                        Đóng
                      </b-button>
                      <b-button
                        type="submit"
                        variant="success"
                        class="btn-submit w-md ms-1 cs-btn-primary"
                        >Lưu
                      </b-button>
                    </div>
                  </form>
                </b-modal>
              </div>
            </div>
          </div>
          <div class="row blog-grid-row">
            <div
              v-for="(item, index) in 6"
              :key="index"
              class="col-md-4 col-sm-12"
            >
              <!-- Blog Post -->
              <nuxt-link :to="`/decks/${index}`">
                <div class="blog grid-blog">
                  <div class="blog-image">
                    <nuxt-link :to="`/decks/${index}`"
                      ><img
                        class="img-fluid"
                        src="@/assets/img/core/1.png"
                        alt="Post Image"
                    /></nuxt-link>
                  </div>
                  <div class="blog-content">
                    <ul class="entry-meta meta-item">
                      <li>
                        <div class="post-author">
                          <nuxt-link to="/"
                            ><img
                              src="@/assets/img/logo/default.png"
                              alt="Post Author"
                            />
                            <span>Manchester United</span></nuxt-link
                          >
                        </div>
                      </li>
                      <li><i class="far fa-clock me-1"></i>13/05/2025</li>
                    </ul>
                    <h3 class="blog-title">
                      <nuxt-link :to="`/decks/${index}`"
                        >MU Away (2024-2025) Màu xanh + Cộc tay | Bản PLAYER [Có
                        quần]</nuxt-link
                      >
                    </h3>
                    <p class="mb-0">
                      Khách hàng có nhu cầu IN TÊN SỐ, đặt đội hoặc mua số lượng
                      lớn từ 7 bộ vui lòng inbox để SHOP hỗ trợ với giá tốt nhất
                      cùng nhiều ưu đãi quà tặng đặc biệt
                    </p>
                  </div>
                </div>
              </nuxt-link>
              <!-- /Blog Post -->
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      model: [],
      list: []
    }
  },

  created() {
    this.getData()
  },

  methods: {
    async getData() {
      const params = {
        start: 1,
        limit: 10,
        sortBy: 'age'
      }
      await this.$store
        .dispatch('loDatStore/getPagingParams', params)
        .then((res) => {
          if (res != null && res.code === 0) {
            this.list = res.data.data
          }
        })
    }
  }
}
</script>
