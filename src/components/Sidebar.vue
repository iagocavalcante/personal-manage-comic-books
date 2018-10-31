<template>

  <div id="parentx">

    <vs-sidebar default-index="1" color="primary" class="sidebarx" spacer v-model="activeWrapper">

      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h4>
          PM Comic Books
        </h4>

      </div>

      <vs-sidebar-item :to="item.route" :index="item.index" :icon="item.icon" :key="item.index" v-for="item in items">
        {{item.title}}
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>

    </vs-sidebar>
  </div>

</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    activeWrapper: {
      get: function() {
        return this.active;
      },
      set: function(value) {
        this.$emit("update:active", value);
      }
    }
  },
  data: () => ({
    items: [
      {
        icon: 'book',
        index: '1',
        title: 'Comic Books',
        route: '/comic-books'
      },
      {
        icon: 'gavel',
        index: '2',
        title: 'Books',
        route: 'books'
      }
    ]
  }),
  created () {
    this.$nextTick(() => {
      this.$parent.$on('control-sidebar', this.menuControl)
    })
  },
  methods: {
    goToRoute (route) {
      this.$router.replace(route)
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
    border 0px solid rgba(0,0,0,0) !important
    border-left 1px solid rgba(0,0,0,.07) !important
    border-radius 0px !important
</style>