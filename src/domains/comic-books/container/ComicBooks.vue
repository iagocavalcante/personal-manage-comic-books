<template>
  <div>
    <Dialog :activePrompt.sync="activePrompt"/>
    <vs-col class="header-comic" vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="12" vs-lg="12" vs-xs="12">
      <vs-button @click="activePrompt = !activePrompt">Manage Comic Books</vs-button>
    </vs-col>
    <vs-divider/>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-lg="6" vs-xs="12">
      <read-comic-book v-if="isLoad" :comicBooks="comicBooksRead" />
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-lg="6" vs-xs="12">
      <readed-comic-book v-if="isLoad" :comicBooks="comicBooksReaded"/>
    </vs-col>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import ReadComicBook from '@/domains/comic-books/components/ReadComicBook'
import ReadedComicBook from '@/domains/comic-books/components/ReadedComicBook'
export default {
  name: 'ComicBooks',
  components: {
    ReadComicBook,
    ReadedComicBook,
    Dialog
  },
  props: {
    service: {
      required: true
    }
  },
  data: () => ({
    isLoad: false,
    comicBooksRead: [],
    comicBooksReaded: [],
    activePrompt: false
  }),
  mounted () {
    this.$service.getAll()
      .then(data => {
        this.isLoad = true
        this.comicBooksRead = [...data.data.filter(comicBook => comicBook.read === false)]
        this.comicBooksReaded = [...data.data.filter(comicBook => comicBook.read !== false)]
      })
      .catch(error => {
        console.log(error) //eslint-disable-line
      })
  }
}
</script>

<style lang="stylus" scoped>
.header-comic {
  padding 10px
}
</style>

