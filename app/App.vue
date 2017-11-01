<template>
    <div id="app">
        <div class="col-xs-12">
            <nav-bar></nav-bar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
	import NavBar from './components/NavBar.vue'

	export default {
		name: 'app',
        components: {
			NavBar
        }
	}

</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Dosis');

    // must be completed

    :root {
        --nav-bar-background-color: #3D546E;
        --nav-bar-color: white;
        --link-color: white;
        --font-color: black;
        --font-family: 'Dosis', sans-serif;
        --default-font-size: 1rem;
        --high-font-size: 1.5rem;
        --medium-font-size: 1.25rem;
        --similar-white-color: white;
        --border-light-grey-color: #B2B2B2;
        --light-grey-color: #B2B2B2
    }

    .high {
        font-size: var(--high-font-size)
    }

    .medium {
        font-size: var(--medium-font-size)
    }

    .default {
        font-size: var(--default-font-size)
    }

    .light-grey-text {
        color: var(--light-grey-color)
    }

    html,
    body {
        position: absolute;
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        left: 0;
        top: 0;
        font-size: var(--default-font-size)
    }

    #app {
        color: var(--font-color);
        font-family: var(--font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale
    }
</style>