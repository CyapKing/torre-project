<template>
  <HomeComponent />
</template>

<script>
import HomeComponent from '@/components/Home'

export default {
  name: 'HomeView',
  components: {
    HomeComponent
  }
}
</script>
<style lang="scss">
#home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);

  #home-header {
    margin: 15px;
    font-size: 50px;
  }

  #home-container {
    flex: 1;
    display: flex;
    justify-content: space-around;

    #user-card {
      .description-container {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
  }
}
</style>
