<template>
  <div>
    <h1>Readed comic books</h1>
    <vs-row vs-justify="center">
      <vs-col class="mr-20" type="flex" vs-justify="center" vs-align="center" vs-w="4" vs-lg="4" vs-sm="6" vs-xs="12" :key="comicBook.id" v-for="comicBook in comicBooks">
        <vs-card>
          <div slot="header">
            <h3>
              {{comicBook.title}}
            </h3>
          </div>
          <div slot="media">
            <img :src="comicBook.image">
          </div>
          <div>
            <vs-row vs-justify="flex-start">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <h3>{{comicBook.saga}}</h3>
              </vs-col>
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <p>{{comicBook.description}}</p>
              </vs-col>
            </vs-row>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button class="mr-10" color="danger" icon="favorite"></vs-button>
              <vs-button class="mr-10" color="primary" icon="turned_in_not"></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'ReadComicBooks',
  props: {
    comicBooks: {
      type: Array,
      required: true
    }
  }
}
</script>


<style lang="stylus" scoped>
img
  height 16.5em
  width 12.5em
  margin 0 auto

.mr-20
  margin-right 20px

.mr-10
  margin-right 10px

h1
  margin 10px
</style>
