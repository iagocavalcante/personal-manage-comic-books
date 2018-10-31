<template>
  <div id="app">
    <sidebar :active.sync="active"/>
    <div id="nav">
      <span @click="showSidebar"><i class="cursor fa fa-3x fa-bars"></i></span>
    </div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xl="12" vs-xs="12">
        <router-view/>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  components: {
    Sidebar
  },
  data: () => ({
    active: false
  }),
  methods: {
    showSidebar () {
      this.active = !this.active
    }
  }
}
</script>


<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab')
body
  font-family 'Roboto Slab', serif

#nav
  text-align right
  color #2c3e50
  padding 10px
  background-color #cecece

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

.cursor
  cursor pointer
</style>
