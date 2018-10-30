<template>
  <vs-row>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <read-comic-book/>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <readed-comic-book/>
    </vs-col>
  </vs-row>
</template>

<script>
import ReadComicBook from '@/domains/comic-books/components/ReadComicBook'
import ReadedComicBook from '@/domains/comic-books/components/ReadedComicBook'
export default {
  components: {
    ReadComicBook,
    ReadedComicBook
  },
  props: {
    service: {
      required: true
    }
  }
}
</script>

<style>

</style>
