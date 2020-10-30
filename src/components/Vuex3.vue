<template>
	<div>
		<!-- 这个数在减小，快看。。。{{$store.state.count}} -->
		这个数在减小，快看。。。{{ count }}
		<button @click="tt">减</button>
		<h2 @click="add001">{{ m }}</h2>
		<button @click="sub0">enen</button>
	</div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
	data() {
		return {
			fef: 1,
			b: 2,
			c: 3
		};
	},
	computed: {
		...mapState(["count"]),
		m() {
			return this.b + this.c;
		}
	},
	watch: {
		// 新 老 数据打印
		b(xin, old) {
			console.log(xin);
			console.log(old);
		}
	},
	methods: {
		...mapMutations(["sub"]),
		sub0() {
			this.sub();
		},
		add001() {
			this.b++;
		},
		tt() {
			this.$store.commit("increment03");
		}
	}
};
</script>
