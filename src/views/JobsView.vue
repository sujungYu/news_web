<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="jobs-list">
          <li v-for="item in this.$store.state.jobs" class="post">
              포인트 영역
              <div class="points">
                {{ item.points || 0}}
              </div>
              기타정보 영역
              <div>
                <p class="jobs-title">
                    <a :href="item.url">
                    {{ item.title }}
                    </a>
                </p>
                <small class="link-text">
                  {{ item.time_ago }} by
                  <a :href="item.url">{{ item.domain }}</a>
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
export default {
  components: {
        ListItem
    },
    // mounted() {
    //    bus.$emit('end:spinner')
    // },
    mixins: [ListMixin],
  // data() {
  //   return {

  //   }
  // },
  created() {
        // bus.$emit('start:spinner');
        // setTimeout(() => {
        //     this.$store.dispatch('FETCH_JOBS')
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

  // created() {

  //   this.$store.dispatch('FETCH_JOBS')
  // }

}
</script>

