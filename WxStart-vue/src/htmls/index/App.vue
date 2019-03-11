<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!-- <Loading v-show="loading"></Loading> -->
    </div>
</template>
<script>

import Loading from "components/Loading";
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'App',
    components: {

        Loading
    },
    computed: {
         ...mapState([ 'loading' ]),
        loading() {
            let load = this.loading;
            return load;
        }
    },
}
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
	}
</style>
