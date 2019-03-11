<template>
	<div id="home">
        home
	</div>
</template>

<script>
    import { EventBus } from 'common'
    import { mapState, mapMutations } from 'vuex'
    import { getServerConfig, getToken } from 'http/app'
    import { getUserInfo, getUserStorage } from 'http/user'


	export default {
		name: 'Home',
		components: {

		},

    }
</script>

<style scoped lang="less">
    @import '~styles/variables.less';
    @import '~styles/mixins.less';
    *{
        box-sizing: border-box;
    }
    html{
        font-size: 20px;
		width: 100%;
        height: 100%;
    }

</style>
