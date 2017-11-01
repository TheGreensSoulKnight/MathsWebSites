<template>

    <div class="row pdg-t-20 pdg-b-20 nav-bar">
        <div class="col-xs-12 col-md-10 col-md-offset-1">
            <div class="row">
                <div class="col-xs-4 col-lg-3 center-xs">
                    <router-link to="/">
                        <div @click="$store.dispatch('transitioningFtpView', { route: $route, routerLink: '/' })">
                            DOCS
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
    	name: 'NavBar'
    }

</script>

<style lang="scss">

    .nav-bar {
        background-color: var(--nav-bar-background-color);
        color: var(--nav-bar-color);
        font-size: var(--high-font-size);
        & a {
            color: var(--nav-bar-color)
        }
    }

</style>