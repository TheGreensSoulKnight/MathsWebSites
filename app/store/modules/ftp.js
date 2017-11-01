export default {
	state: {
		currentDirectory: {
			name: '/',
			path: '/',
			subdirectories: [
				{
					name: '1ère S',
					path: '/1S'
				},
				{
					name: '1ère ES',
					path: '/1ES'
				},
				{
					name: '1ère STI2D',
					path: '/1STI2D'
				},
				{
					name: 'TS',
					path: '/TS'
				},
				{
					name: 'TES',
					path: '/TES'
				},
				{
					name: 'TSTI2D',
					path: '/TSTI2D'
				}
			]
		},
		canTransition: false
	},
	getters: {
		//path: state => state.path
		generateRouterLinkPath: state => i => {
			const linkInformations = state.currentDirectory.subdirectories[i]
			return linkInformations.path
		},
		generateRouterLinkName: state => i => {
			const linkInformations = state.currentDirectory.subdirectories[i]
			return linkInformations.name
		},
		ftpTransitionClass: state => state.transitionClass
	},
	mutations: {
		setPath (state, path) {
			state.path = path
		}
	},
	actions: {
		transitioningFtpView ({ state, getters: { generateRouterLinkPath } }, { i, route, routerLink }) {
			const path = routerLink || generateRouterLinkPath(i)
			if (route.path !== path)
				state.canTransition = true
		},
		disableTransitioning ({ state }) {
			state.canTransition = false
		},
		registerNextRoute ({ state: { currentDirectory } }, route) {
			if (currentDirectory.subdirectories.some(sub => sub.path === route.path)) {
				currentDirectory.path = route.path
				// GraphQL to get route informations
			} else {
				// redirect to / ?
			}
		}
	}
}