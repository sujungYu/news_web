<template>
  <div>
      <!-- <div v-for="user in this.$store.state.news">
          {{ user.title }}
     </div> -->
     <p v-for="item in this.$store.state.news">
         <a :href="item.url">
             {{ item.title }}
        </a>
        <small>{{ item.time_ago }}{{ item.user }}</small>
     </p>
  </div>
</template>

<script>

export default {
    data() {
        return {
            // users: []
        }
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }

}
</script>

<style>

</style>