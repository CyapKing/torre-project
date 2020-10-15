<template>
  <div id="user-profile">
    <vs-navbar center-collapsed color="#00aae4">
      <template #left>
        <img style="width: 50px; height: 50px" src="../assets/user.png" alt="" />
      </template>
      <template #default>
        <vs-input v-model="username" placeholder="Nombre" />
      </template>
    </vs-navbar>
    <div class="user-row">
      <vs-avatar size="400">
        <img :src="userData.picture" alt="" />
      </vs-avatar>
      <vs-card style="width: 400px; height:400px; margin-left:15px">
        <template #title>
          <h2>{{userData.name}}</h2>
        </template>
        <template #text>
          <div style="height: 340px; margin-top:5px">
            <span>{{userData.username}}</span>
            <br>
            <br>
            <span>{{`Idiomas: ${languaguesDescription}`}}</span>
            <br>
            <br>
            <span>{{`Proyectos: ${userData.projects}`}}</span>
            <br>
            <br>
            <span style="white-space:break-spaces">{{`Experiencias: \n${experienceDescription}`}}</span>
            <br>
            <br>
          </div>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
import UserImage from '@/assets/user.png'
import Request from '@/api/request'

export default {
  name: 'UserProfileComponent',
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      UserImage,
      username: '',
      lastInput: null
    }
  },
  computed: {
    languaguesDescription () {
      let languajes = ''
      this.userData.languages.forEach((languaje, index) => {
        languajes += `${languaje.language}${index === this.userData.languages.length - 1 ? '' : ', '}`
      })
      return languajes
    },
    experienceDescription () {
      let experiences = ''
      this.userData.experiences.forEach((experience, index) => {
        experiences += `Categoria: ${experience.category}\n Nombre: ${experience.name}\n Desde: ${experience.fromMonth || ''} ${experience.fromYear || ''} - ${experience.toMonth || ''} ${experience.toYear || ''}${index === this.userData.experiences.length - 1 ? '' : '\n\n'}`
      })
      return experiences
    }
  },
  watch: {
    username (val) {
      clearTimeout(this.lastInput)
      this.lastInput = setTimeout(() => {
        this.searchByName(val)
      }, 1000)
    }
  },
  methods: {
    searchByName (username) {
      if (username) {
        const loading = this.$vs.loading()
        Request.getUser(username)
          .then((request) => {
            this.$store.commit('User/setUserData', request.data)
            loading.close()
            this.$router.push({ name: 'UserProfile' })
          })
          .catch(() => {
            this.$vs.notification({
              color: 'danger',
              position: 'top-right',
              title: 'Error de petición',
              text: 'Hubo un error inesperado realizando la busqueda'
            })
          })
          .finally(() => {
            loading.close()
          })
      }
    }
  }
}
</script>
<style lang="scss">
#user-profile {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  .user-row {
    display: flex;
    margin-top: 60px;
    height: 400px;
  }
}
</style>
