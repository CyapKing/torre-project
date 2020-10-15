<template>
  <UserProfileComponent :userData="this.userData"/>
</template>
<script>
import UserProfileComponent from '@/components/UserProfile'
import { mapGetters } from 'vuex'

export default {
  name: 'UserProfile',
  components: {
    UserProfileComponent
  },
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
