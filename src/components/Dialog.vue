<template>
  <vs-popup classContent="popup-example"  title="Save comic book" :active.sync="active">
    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-input class="inputx" placeholder="Title"/>
      <vs-input  class="inputx" placeholder="Slug"/>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-input class="inputx" placeholder="Pages"/>
      <vs-input  class="inputx" placeholder="Saga"/>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-input class="inputx" placeholder="Published Date"/>
      <vs-input  class="inputx" placeholder="publiser"/>
    </vs-col>
    <vs-col style="margin-bottom: 10px" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-lg="12" vs-xs="12">
      <p style="margin-right: 5px">Capture comic book picture</p>
      <vs-button radius type="filled" icon="photo_camera"></vs-button>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-textarea label="Description Here" class="inputx" placeholder=""/>
    </vs-col>
    <vs-col style="margin-bottom: 10px" vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-button type="filled" icon="send">Save</vs-button>
    </vs-col>
  </vs-popup>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    activePrompt: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    active: {
      get () { return this.activePrompt },
      set (value) { this.$emit('update:activePrompt', value) },
    }
  }
}
</script>

<style lang="stylus">
.popup-example
  .vs-input
    float left
    width 50%
    margin 10px
    margin-top 5px
  .con-select
    margin-left 10px
    width 50%
    margin-bottom 10px
</style>