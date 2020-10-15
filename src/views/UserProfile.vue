<template>
  <div />
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserProfile',
  computed: {
    ...mapGetters({
      userData: 'User/getUserData'
    })
  },
  mounted () {
    console.log(this.userData)
  }
}
</script>
<style lang="scss">
</style>
