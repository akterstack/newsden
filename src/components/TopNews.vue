<template>
  <v-container fluid grid-list-md>
    <v-subheader>Top News</v-subheader>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="purple" dark>
          <v-img :src="imgUrl" aspect-ratio="2.75"></v-img>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>{{ lorem }}</v-card-text>
          <router-link to="/article">
            <v-btn light>Read more</v-btn>
          </router-link>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo" dark>
              <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex v-for="n in 2" :key="n" d-flex xs12>
                <v-card color="red lighten-2" dark>
                  <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="green lighten-2" dark>
          <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="blue lighten-2" dark>
          <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name:'top-news',
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
      imgUrl: 'https://images.dn.no/image/E3wG2bDIPvk5T%2Brd4uCkww%3D%3D/nhst/binary/955f2947f85debae1d7c7ed4d2ae1967'
    }
  }
}
</script>
