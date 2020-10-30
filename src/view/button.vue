<template>
	<div>
		<button @click="btndj">点击44</button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			flag: true
		};
	},
	methods: {
		btndj() {
			if (this.flag === true) {
				console.log(111);
				this.flag = false;
				setTimeout(() => {
					this.flag = true;
				}, 2000);
			}
		}
	}
};
</script>
