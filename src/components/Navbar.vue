<template>
  <v-layout white>
    <v-flex lg8>
      <router-link to="/">
        <h1>Rocket</h1>
      </router-link>
    </v-flex>
    <v-layout
      align-center
      justify-end
      row
      fill-height
    >
      <v-flex>
        <v-btn depressed>Source</v-btn>
        <v-menu
          transition="slide-y-transition"
          bottom
        >
          <v-btn
            slot="activator"
            depressed
          >
            Favorites
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(item, i) in favorites"
              :key="i"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
export default {
  name: 'navbar',

  data() {
    return {
      favorites: [
        {
          title: 'BBC'
        },
        {
          title: 'CNN'
        }
      ]
    }
  }
}
</script>
