<template>
  <div>
       <!-- <div v-for="item in fetchedAsk">{{ item.title }}</div> -->
       <p v-for="item in fetchedAsk">
         <a :href="item.url">
             {{ item.title }}
        </a>
        <small>{{ item.time_ago }}{{ item.user }}</small>
     </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
    // #3
    // ...mapGetters({
    //   askItems: 'fetchedAsk'
    // })
    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })
    // #1
    // ask() {
    //   return this.$store.state.ask
    // }
  },
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }

}
</script>

<style>

</style>