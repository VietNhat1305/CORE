<template>
  <div>
    <DefautHeader></DefautHeader>
    <nuxt />
    <DefautFooter></DefautFooter>
  </div>
</template>

<script>
import DefautHeader from '@/components/Header/DefautHeader.vue'
import DefautFooter from '@/components/Footer/DefaultFooter.vue'
export default {
  components: {
    DefautHeader,
    DefautFooter
  }
}
</script>

<style></style>
