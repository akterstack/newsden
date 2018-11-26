<template>
  <v-card color="purple" dark>
    <v-img v-bind:src="getLeadNews.imgUrl" aspect-ratio="2.75"></v-img>
    <v-card-title primary class="title">Lorem</v-card-title>
    <v-card-text>{{ lorem }}</v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'lead-news',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'getLeadNews'
    ])
  }
}
</script>
