import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
		path: '/:year?/:class?/:dir?/:udir?',
		name: 'Index',
		component: Index
	}
]
})
