<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile :info="fetchedItem">
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
          </router-link>
        <template slot="time">{{ 'Posted '+ fetchedItem.time_ago }}</template>
      </user-profile>
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>

        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
          </router-link>
          <div class="time">
          {{ fetchedItem.time_ago }}
        </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>
          {{ fetchedItem.title }}
      </h2>
    </section>
    <section>
      <div v-html="fetchedItem.content">{{ fetchedItem.content }}</div>
      <!-- 질문 댓글 -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
   computed: {
    ...mapGetters(['fetchedItem'])
  },
   created() {
    const itemId = this.$route.params.id
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
    this.$store.dispatch('FETCH_ITEM', itemId)
  }

}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>