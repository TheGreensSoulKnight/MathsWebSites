<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
		name: 'app'
	}

</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Dosis');

    // must be completed

    :root {
        --nav-bar-background-color: #3D546E;
        --font-color: white;
        --font-family: 'Dosis', sans-serif;
        --default-font-size: 1rem;
        --high-font-size: 1.5rem;
        --medium-font-size: 1.25rem
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