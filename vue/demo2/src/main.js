import Vue from 'vue'
import todolist from './todolist.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(todolist),
}).$mount('#app')

//老版本的写法：
// new Vue({
// 	el: '#app',
// 	components:{todolist},
// 	template:'<todolist/>'
// })