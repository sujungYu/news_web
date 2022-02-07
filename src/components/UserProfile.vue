<template>
  <div>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>

        <div class="user-description">
            <!-- <template v-if="this.$route.name === 'item' ">
                <div>
                    {{ info.id }}
                 </div>
            </template>
            <template v-else>
                <div>
                    {{ info.user }}
                </div>
            </template> -->
            <!-- <div>
                {{ info.id }}
            </div> -->
            <slot name="username">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>

          <!-- <router-link :to="`/user/${userInfo.id}`">
          {{ userInfo.id }}
          </router-link> -->
          <div class="time">

          <!-- {{ info.created }} -->
          <slot name="time">
              <!--  -->
          </slot>
        </div>
        <slot name="karma"></slot>
        </div>

      </div>
  </div>
</template>

<script>
export default {
//     computed: {
//     userInfo() {
//       return this.$store.state.user
//     }
//   },
  props: {
      info: Object
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