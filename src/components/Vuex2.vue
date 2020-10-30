<template>
	<div>
		这个数在变化，快看。。。{{ this.$store.state.count }}
		<button @click="add">增加</button>
		<button @click="addN">增加N</button>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	methods: {
		add() {
			this.$store.commit("increment");
		},
		addN() {
			this.$store.commit("increment01", 3);
		}
	}
};
</script>
