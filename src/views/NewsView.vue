<template>
  <div>
      <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin.js'

export default {
    components: {
        ListItem
    },
    // mounted() {
    //    bus.$emit('end:spinner')
    // },
    mixins: [ListMixin],
    created() {
        // bus.$emit('start:spinner');
        // setTimeout(() => {
        //     this.$store.dispatch('FETCH_NEWS')
        //     .then(() => {
        //         console.log('fetched');
        //         bus.$emit('end:spinner')
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        // }, 3000)
        // this.$store.dispatch('FETCH_NEWS')
        //     .then(() => {
        //         console.log('fetched');
        //         bus.$emit('end:spinner')
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        //return res를 함으로써 res를 객체를 계속 반환하고 있기 때문에 .then, .catch를 사용할 수 있다.
        // bus.$emit('end:spinner')
    }
}
</script>

<style scoped>

</style>