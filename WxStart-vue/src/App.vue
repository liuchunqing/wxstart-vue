<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>
<script>
import Home from '@/pages/Home'

export default {
    name: 'App',
    components: {
        Home
    },
    computed: {

    },
}
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
	}
</style>
