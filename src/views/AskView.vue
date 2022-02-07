<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="ask-list">
          <li v-for="item in fetchedAsk" class="post">
              포인트 영역
              <div class="points">
                {{ item.points }}
              </div>
              기타정보 영역
              <div>
                <p class="ask-title">
                    <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                </p>
                <small class="link-text">
                    {{ item.time_ago }} by
                    <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                </small>
              </div>
          </li>
      </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin.js'
// import { mapState, mapGetters } from 'vuex'

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
        //     this.$store.dispatch('FETCH_ASK')
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
  // computed: {
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ])
  //   // #3
  //   // ...mapGetters({
  //   //   askItems: 'fetchedAsk'
  //   // })
  //   // #2
  //   // ...mapState({
  //   //   fetchedAsk: state => state.ask
  //   // })
  //   // #1
  //   // ask() {
  //   //   return this.$store.state.ask
  //   // }
  // },
  // data() {
  //   return {
  //   }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK')
  //   // console.log(this.$store.state.ask);
  // }

}
</script>
