<template>
	<div id="app">
		<keep-alive include="list,login">
			<router-view></router-view>
		</keep-alive>
		<!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
		<Foot :itemss="items" />
	</div>
</template>
<script>
import Foot from "./components/Foot.vue";
export default {
	name: "app",
	data() {
		return {
			items: [
				{ name: "首页", href: "/" },
				{ name: "列表", href: "/List" },
				{ name: "详情", href: "/Detials" },
				{ name: "购物车", href: "/Card" },
				{ name: "我的", href: "/My" },
				{ name: "登陆123", href: "/Login" }
			]
		};
	},
	components: {
		Foot
	}
};
</script>
