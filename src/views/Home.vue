<template>
  <div id="home">
    <div id="home-header">Bienvenido</div>
    <div id="home-container">
      <vs-card id="user-card" type="3">
        <template #title>
          <h3>Usuarios</h3>
        </template>
        <template #img>
          <div style="background-color: #00aae4; border-radius: 15px">
            <img :src="UserImage" alt />
          </div>
        </template>
        <template #text>
          <div class="description-container">
            <p>Busca a un usuario por su nombre</p>
            <vs-input v-model="username" placeholder="Nombre" />
          </div>
        </template>
      </vs-card>
    </div>
  </div>

  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import UserImage from '@/assets/user.png'
import Request from '@/api/request'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      UserImage,
      username: ''
    }
  },
  watch: {
    username (val) {
      this.searchByName(val)
    }
  },
  methods: {
    searchByName (username) {
      Request.getUser(username)
        .then((request) => {
          console.log(request)
        })
        .catch((error) => {
          console.log(error)
        })
    }
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
