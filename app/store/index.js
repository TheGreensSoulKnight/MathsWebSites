import Vue from 'vue'
import Vuex from 'vuex'
import ftp from './modules/ftp'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		ftp
	}
})