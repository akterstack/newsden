<template>
  <v-layout>
    <v-flex>
      {{ whoIam }}
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'sidebar',
  data() {
    return {
      whoIam: 'Who I am?'
    }
  }
}
</script>
