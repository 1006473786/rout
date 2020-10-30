<template>
	<div>
		<h5>table实现增删改查</h5>
		<input type="text" v-model="sear.id"  placeholder="请输入id"/>
		<button @click="search">搜索</button>
		<table>
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>邮箱</th>
				<th>编辑</th>
			</tr>
			<tbody>
				<tr v-for="(item, index) in tables" :key="item.id">
					<td>{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.age }}</td>
					<td>{{ item.email }}</td>
					<td>
						<button @click="change(item, index)">修改</button>
						<button @click="del(index)">删除</button>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="box" v-if="show">
			<form>
				<h2>修改</h2>
				id:<input type="text" v-model="cha.id" /> <br />
				name:<input type="text" v-model="cha.name" /> <br />
				age:<input type="text" v-model="cha.age" /><br />
				email:<input type="text" v-model="cha.email" /><br />
				<button @click="save(cha)">保存</button>
				<button @click="cancel">取消</button>
			</form>
		</div>
		<button @click="addtj" class="addtj">添加</button>
		<div class="box1" v-if="add">
			<form>
				UID:<input type="text" v-model="cha.id" /> <br />
				名字:<input type="text" v-model="cha.name" /> <br />
				年龄:<input type="text" v-model="cha.age" /><br />
				邮箱:<input type="text" v-model="cha.email" /><br />
				<button @click="btntj">保存</button>
				<button @click="cancel02">取消</button>
				<input type="reset" value="重置" @click="reset01" />
			</form>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			show: false,
			add: false,
			tabid: "",
			tables: [
				{
					id: 1,
					name: "张三",
					age: 18,
					email: "163@"
				},
				{
					id: 2,
					name: "张三",
					age: 19,
					email: "164@"
				},
				{
					id: 3,
					name: "张三",
					age: 20,
					email: "165@"
				}
			],
			table: [
				{
					id: 1,
					name: "张三",
					age: 18,
					email: "163@"
				},
				{
					id: 2,
					name: "张三",
					age: 19,
					email: "164@"
				},
				{
					id: 3,
					name: "张三",
					age: 20,
					email: "165@"
				}
			],
			cha: {
			},
			nth: 0,
			sear: {}
		};
	},
	methods: {
		del(index) {
			this.tables.splice(index, 1);
		},
		change(item, i) {
			this.show = !this.show;
			this.cha = Object.assign({}, this.cha, item);
			// var item01 = JSON.parse(JSON.stringify(item));
			// this.cha = item01;
			// console.log(this.cha);
			this.nth = i;
		},
		save(cha) {
			Object.assign(this.tables[this.nth], this.cha);
			this.cha = {};
			this.show = !this.show;
		},
		addtj() {
			this.add = !this.add;
		},
		btntj(cha) {
			this.add = !this.add;
			var item02 = JSON.parse(JSON.stringify(this.cha));
			console.log(item02);
			if (Object.keys(item02).length === 0) {
				alert("请输入添加内容");
			} else {
				this.tables.push(item02);
			}
		},
		cancel() {
			this.show = !this.show;
		},
		cancel02() {
			this.add = !this.add;
		},
		reset01() {
			this.cha = {};
		},
		search() {
			this.tables = JSON.parse(JSON.stringify(this.table));
			console.log(this.table, 'table');
			var that = this;
			this.tables.forEach((item, index) => {
				if (item.id === Number(that.sear.id)) {
					that.tables.splice(0, 3, item);
				}
			});
		}
	}
};
</script>
<style scoped>
table {
	background: #ccc;
	border: 1px solid #000;
	border-collapse: collapse;
	margin-top: 20px;
	position: absolute;
  left: 50%;
	transform: translate(-50%);
}
tr,
th,
td {
	border: 1px solid #000;
}
.box {
	background: #ccc;
	position: absolute;
	top: 230px;
	left: 50%;
	transform: translate(-50%);
	background: #ccc;
	border-radius: 1px solid #000;
	width: 50%;
}
.box input {
	float: right;
}
.box1 {
	position: absolute;
	top: 230px;
	float: left;
	margin-left: 90px;
}
</style>
