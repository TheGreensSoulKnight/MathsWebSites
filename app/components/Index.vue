<template>

    <div class="row main-container-index">
        <ftp-view></ftp-view>
    </div>

</template>

<script>
    import FtpView from './FtpView.vue'

    export default {
    	name: 'Index',
        components: {
			FtpView
        },
        watch: {
    		'$route' (to, from) {
    			this.$store.dispatch('registerNextRoute', to)
            }
        }
    }

</script>

<style lang="scss">

    a {
        color: var(--link-color);
        text-decoration: none;
        &:visited {
            color: var(--link-color)
        }
    }

    .mg-t-10 {
        margin-top: 10px
    }
    .mg-b-10 {
        margin-bottom: 10px
    }
    .mg-l-10 {
        margin-left: 10px
    }
    .mg-r-10 {
        margin-right: 10px
    }
    .mg-t-15 {
        margin-top: 15px
    }
    .mg-b-15 {
        margin-bottom: 15px
    }
    .mg-l-15 {
        margin-left: 15px
    }
    .mg-r-15 {
        margin-right: 15px
    }
    .mg-t-15 {
        margin-top: 15px
    }
    .mg-b-15 {
        margin-bottom: 15px
    }
    .mg-l-15 {
        margin-left: 15px
    }
    .mg-r-15 {
        margin-right: 15px
    }
    .pdg-t-10 {
        padding-top: 10px
    }
    .pdg-b-10 {
        padding-bottom: 10px
    }
    .pdg-l-10 {
        padding-left: 10px
    }
    .pdg-r-10 {
        padding-right: 10px
    }
    .pdg-t-15 {
        padding-top: 15px
    }
    .pdg-b-15 {
        padding-bottom: 15px
    }
    .pdg-l-15 {
        padding-left: 15px
    }
    .pdg-r-15 {
        padding-right: 15px
    }
    .pdg-t-15 {
        padding-top: 15px
    }
    .pdg-b-15 {
        padding-bottom: 15px
    }
    .pdg-l-15 {
        padding-left: 15px
    }
    .pdg-r-15 {
        padding-right: 15px
    }
    .mg-t-20 {
        margin-top: 20px
    }
    .mg-b-20 {
        margin-bottom: 20px
    }
    .mg-l-20 {
        margin-left: 20px
    }
    .mg-r-20 {
        margin-right: 20px
    }
    .mg-t-25 {
        margin-top: 25px
    }
    .mg-b-25 {
        margin-bottom: 25px
    }
    .mg-l-25 {
        margin-left: 25px
    }
    .mg-r-25 {
        margin-right: 25px
    }
    .mg-t-25 {
        margin-top: 25px
    }
    .mg-b-25 {
        margin-bottom: 25px
    }
    .mg-l-25 {
        margin-left: 25px
    }
    .mg-r-25 {
        margin-right: 25px
    }
    .pdg-t-20 {
        padding-top: 20px
    }
    .pdg-b-20 {
        padding-bottom: 20px
    }
    .pdg-l-20 {
        padding-left: 20px
    }
    .pdg-r-20 {
        padding-right: 20px
    }
    .pdg-t-25 {
        padding-top: 25px
    }
    .pdg-b-25 {
        padding-bottom: 25px
    }
    .pdg-l-25 {
        padding-left: 25px
    }
    .pdg-r-25 {
        padding-right: 25px
    }
    .pdg-t-25 {
        padding-top: 25px
    }
    .pdg-b-25 {
        padding-bottom: 25px
    }
    .pdg-l-25 {
        padding-left: 25px
    }
    .pdg-r-25 {
        padding-right: 25px
    }
    .main-container-index {
        height: calc(100vh - 71px);
    }
    .ps-re {
        position: relative
    }
    .pointer {
        cursor: pointer
    }

</style>