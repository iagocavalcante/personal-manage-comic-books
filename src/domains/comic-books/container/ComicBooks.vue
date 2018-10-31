<template>
  <vs-row>
    <h1>TEste</h1>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <read-comic-book/>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <readed-comic-book/>
    </vs-col>
  </vs-row>
</template>

<script>
import ReadComicBook from './../components/ReadComicBook'
import ReadedComicBook from './../components/ReadedComicBook'
export default {
  components: {
    ReadComicBook,
    ReadedComicBook
  },
  props: {
    service: {
      required: true
    }
  },
  mounted () {
    this.service.getall()
      .then(data => {
        console.log(data) //eslint-disable-line
      })
      .catch(error => {
        console.log(error) //eslint-disable-line
      })
  }
}
</script>

<style>

</style>
