<template>
	<div class="inputs">
		<div class="enter logins" v-show="isShow">
			<h1>请登录</h1>
			<input type="text" placeholder="请输入账号(手机号）" ref="uname" />

			<input type="password" placeholder="请输入密码" ref="upwd" />

			<!-- <input type="text" placeholder="请输入验证码" /> -->
			<input type="submit" value="登录" @click="submit" />
			<button>忘记密码</button>
			<button @click="login">没有账户，注册账户</button>
		</div>

		<div class="login logins" v-show="isShow2">
			<h1>请注册</h1>
			<input type="text" placeholder="请输入手机号" />
			<input type="text" placeholder="输入验证码" />
			<input type="password" placeholder="密码" />
			<input @click="sub" type="submit" placeholder="提交" />
		</div>
	</div>
</template>
<script>
export default {
	name: "login",
	data() {
		return {
			user: [
				{
					name: "111",
					pwd: "111"
				},
				{
					name: "222",
					pwd: "222"
				},
				{
					name: "333",
					pwd: "333"
				}
			],
			user_0: [
				{
					name: "",
					pwd: ""
				}
			],
			isShow: true,
			isShow2: false
		};
	},
	methods: {
		login: function () {
			this.isShow = !this.isShow;
			this.isShow2 = !this.isShow2;
		},
		sub() {
			this.isShow = !this.isShow;
			this.isShow2 = !this.isShow2;
		},
		submit() {
			this.getdata();
			console.log(this.user);
			for (var i = 0; i < this.user.length; i++) {
				if (this.user[i].name === this.user_0.name) {
					if (this.user[i].pwd === this.user_0.pwd) {
						var str = JSON.stringify(this.user_0);
						console.log(str);
						// document.cookie = "token=" + escape(str) + ";";
						sessionStorage.setItem("token", str);
						this.$router.push("/");
						// this.$router.go(-1);

						break;
					} else {
						alert("密码错误");
						break;
					}
				} else {
					alert("账号不存在");
					break;
				}
			}
		},
		getdata() {
			this.user_0.name = this.$refs.uname.value;
			(this.user_0.pwd = this.$refs.upwd.value);
			console.log(this.user_0);
		}
	}
};
</script>
<style>
</style>
<style lang="postcss" scoped>
@import "../styles/Login.css";
</style>
