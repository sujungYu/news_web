import ListView from './ListView.vue'
import bus from '../utils/bus.js'
export default function createListVuew(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: 'HOC Component',
        created() {
            bus.$emit('start:spinner');
        setTimeout(() => {
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner')
            })
            .catch((err) => {
                console.log(err);
            })
        }, 3000)
        },
        render(createElement) {
            return createElement(ListView)

        }
    }
}