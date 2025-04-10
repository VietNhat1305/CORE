<template>
  <div class="container" style="padding-top: 100px">
    <div id="page">
      <div class="nav">
        <ul>
          <li>
            <nuxt-link to="/settings">
              Settings
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/settings/deck">
              Deck
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/settings/schedule">
              Schedule
            </nuxt-link>
          </li>
        </ul>
      </div>
      <nuxt-child />
    </div>
  </div>
</template>

<script></script>

<style lang="css">
#page {
  display: flex;
}
.main {
  margin-left: 30px;
}
</style>
