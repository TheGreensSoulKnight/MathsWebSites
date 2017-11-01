import Vue from 'vue'
import Touch from 'vue-touch'
import App from './App.vue'
import router from './router'
import store from './store'
import "vueify/lib/insert-css" // required for .vue file <style> tags

Vue.config.productionTip = false

Vue.use(Touch)

/* eslint-disable no-new */

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})

