<template>

    <div class="col-xs-12 col-sm-4 ftp-view ps-re" :class="{ 'fade': transition }" @animationend="disableTransitioning">
        <div class="row">
            <div class="col-xs-12 header-ftp-view center-xs pdg-t-15 pdg-b-15">
                <div class="row">
                    <div class="col-xs-2 center-xs pointer" v-show="!isBaseRoute">
                        <i class="fa fa-chevron-left fa-lg" aria-hidden="true"></i>
                    </div>
                    <div class="col-xs-8 center-xs medium" :class="{ 'col-xs-offset-2': isBaseRoute }" v-text="$store.state.ftp.currentDirectory.name"></div>
                    <div class="col-xs-2 center-xs"></div>
                </div>
            </div>
            <div class="col-xs-12 main-ftp-view">
                <div class="row">
                    <div class="col-xs-12 ftp-cell medium pdg-t-15 pdg-b-15 pointer" v-for="(dir, i) in $store.state.ftp.currentDirectory.subdirectories">
                        <router-link :to="$store.getters.generateRouterLinkPath(i)">
                            <div class="row" @click="enableTransitioning(i)">
                                <div class="col-xs-10" v-text="$store.getters.generateRouterLinkName(i)"></div>
                                <div class="col-xs end-xs light-grey-text">
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
    	name: 'FtpView',
        computed: {
    		isBaseRoute () {
    			return this.$route.path === '/'
            },
            transition () {
				return this.$store.state.ftp.canTransition
            }
        },
        methods: {
    		enableTransitioning (i) {
    			this.$store.dispatch('transitioningFtpView', { i, route: this.$route })
            },
			disableTransitioning () {
    			this.$store.dispatch('disableTransitioning')
            }
        }
    }

</script>

<style lang="scss">

    .ftp-view {
        border-right: 1px solid black
    }

    .header-ftp-view {
        background-color: #63768B;
        color: var(--similar-white-color);
    }

    .main-ftp-view {
        max-height: calc(100% - 56px);
        overflow: scroll
    }

    /*
    remove comments to disable border-bottom for the last
    .ftp-cell:not(.ftp-cell:last-child) {
        border-bottom: 1px solid var(--border-light-grey-color)
    }
    */

    .ftp-cell {
        border-bottom: 1px solid var(--border-light-grey-color);
        & > a {
            color: var(--font-color) !important
        }
    }

    .fade {
        animation: fade 1s
    }

    @keyframes fade {
        from {
            opacity: 1
        }
        50% {
            opacity: 0
        }
        to {
            opacity: 1
        }
    }

</style>