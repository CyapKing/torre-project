<template>
  <vs-card id="user-card" type="3">
    <template #title>
      <h3>Usuarios</h3>
    </template>
    <template #img>
      <div style="background-color: #00aae4; border-radius: 15px">
        <img :src="UserImage" alt="" />
      </div>
    </template>
    <template #text>
      <div class="description-container" />
      <p>Busca a un usuario por su nombre</p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class="bx bx-heart"></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class="bx bx-chat"></i>
        <span class="span"> 54 </span>
      </vs-button>
    </template>
  </vs-card>

  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import UserImage from '@/assets/user.png'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      UserImage
    }
  }
}
</script>
<style lang="scss">
#user-card {
  .description-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
