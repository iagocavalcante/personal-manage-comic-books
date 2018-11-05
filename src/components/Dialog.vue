<template>
  <vs-popup classContent="popup-example"  title="Save comic book" :active.sync="active">
    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-input 
        :danger="false"
        danger-text="The title is required"
        class="inputx"
        placeholder="Title*"
        v-model="comicBook.title"/>
      <vs-input
        :danger="false"
        danger-text="The title is required"
        class="inputx"
        placeholder="Slug"
        v-model="comicBook.slug"/>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-input
        :danger="false"
        danger-text="The title is required"
        class="inputx"
        type="number"
        placeholder="Pages"
        v-model="comicBook.pages"/>
      <vs-input
        :danger="false"
        danger-text="The title is required"
        class="inputx"
        placeholder="Saga"
        v-model="comicBook.saga"/>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-input
        :danger="false"
        danger-text="The title is required"
        class="inputx"
        placeholder="Published Date"
        v-model="comicBook.published_date"/>
      <vs-select
        label="Publisher"
        v-model="comicBook.publisher_id">
      <vs-select-item :key="publisher._id" :value="publisher._id" :text="publisher.name" v-for="publisher in publishers" />
      </vs-select>
    </vs-col>
    <vs-col v-if="hasCamera" style="margin-bottom: 10px" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-lg="12" vs-xs="12">
      <p style="margin-right: 5px">Capture comic book picture</p>
      <vs-button @click="showCamera = !showCamera" radius type="filled" icon="photo_camera"></vs-button>
    </vs-col>
    <vs-col v-else style="margin-bottom: 10px" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-input
        type="url"
        :danger="false"
        danger-text="The title is required"
        class="inputx"
        placeholder="Url Image"
        v-model="comicBook.image"/>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-textarea label="Description Here" class="inputx" placeholder="" v-model="comicBook.description"/>
    </vs-col>
    <vs-col style="margin-bottom: 10px" vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-button @click="saveComicBook" type="filled" icon="send">Save</vs-button>
    </vs-col>
    <camera-modal :activePromptCamera="showCamera"></camera-modal>
  </vs-popup>
</template>

<script>
import axios from 'axios'
import ComicBooks from '@/domains/comic-books/service/ComicBooks'
import CameraModal from '@/components/CameraModal'
import { notifications } from '@/support/notifications/notification'

const service = ComicBooks.build({})

export default {
  name: 'Dialog',
  mixins: [notifications],
  components: {
    CameraModal
  },
  props: {
    activePrompt: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    showCamera: false,
    comicBook: {
      title: '',
      slug: '',
      description: '',
      pages: '',
      saga: '',
      published_date: '',
      publisher_id: '',
      image: '',
      read: false
    },
    hasCamera: false,
    publishers: []
  }),
  computed: {
    active: {
      get () { return this.activePrompt },
      set (value) { this.$emit('update:activePrompt', value) },
    }
  },
  mounted () {
    axios.get('http://localhost:3000/api/publisher')
      .then(response => {
        this.publishers = [...response.data]
      })
      .catch(error => {
        this.showNotification('Publisher', `Não foi possível carregar as editoras \n erro: ${error}`, 'danger')
      })
    this.checkCamera()
  },
  methods: {
    saveComicBook () {
      service.create(this.comicBook)
        .then(() => {
          this.active = false
          this.resetData()
          this.showNotification('Comic Book', 'Comic book created', 'success', this)
          setTimeout(() => {
            this.$router.go('comic-books')
          }, 2500)
        })
        .catch(error => this.showNotification('Publisher', `Não foi possível salvar quadrinho \n erro: ${error}`, 'danger'))
    },
    checkCamera () {
      navigator.getMedia = ( navigator.getUserMedia || // use the proper vendor prefix
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

      navigator.getMedia({video: true}, this.success, this.error)
    },
    success () {
      this.hasCamera = true
    },
    error () {
      this.hasCamera = false
    },
    resetData () {
      Object.assign(this.$data, this.$options.data.apply(this))
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