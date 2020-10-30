<template>
	<div>
		<h1>欢迎来到我的世界</h1>
		<div>
			<el-carousel :interval="1000" arrow="always">
				<el-carousel-item v-for="item in items" :key="item.id">
					<img :src="item.picture" class="image" />
				</el-carousel-item>
			</el-carousel>
		</div>
			<el-row>
				<el-button plain> 朴素按钮</el-button>
				<el-button type="primary" @click="btnps" plain>防抖</el-button>
				<router-link to="./table" tag="el-button" type="success" plain
					>跳转搜索页面</router-link
				>
			</el-row>
		<router-view></router-view>
		<div class='picture'>
			<h1>446646</h1>
          <ul>
            <li v-for="(item,index) in phoneList" :key="index.id">
               <router-link to="/detail">
                <a href='#'>
                      <img :src='item.src'>
                </a>
                <h2>{{item.name}}</h2>
                <p>{{item.explain}}</p>
                <p style="color:red;font-size:.16rem;">{{item.money}}</p>
                </router-link>
            </li>
          </ul>
          <!-- <div><button>加载更多</button></div> -->
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import Vue from "vue";
import { Button, Carousel } from "element-ui";
Vue.use(Button);
Vue.use(Carousel);
export default {
	data() {
		return {
			items: [
				{
					id: 0,
					picture:
						"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586287566771&di=d5e15514e98dc45f8337f545c4b8bf2f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F1%2F30%2F7a09511517.jpg"
				},
				{
					id: 1,
					picture:
						"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586287566870&di=fb632e76073e74657a415e55dbc1f740&imgtype=0&src=http%3A%2F%2Fwww.mangowed.com%2Fuploads%2Fallimg%2F130510%2F1-130510213Q2209.jpg"
				},
				{
					id: 2,
					picture:
						"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586288640812&di=9ff35ccbc43ab42e5949bdaf9cf51302&imgtype=0&src=http%3A%2F%2Fimg.hairbobo.com%2Fuploadimg%2F16%2F08%2F19%2F160819200849417.jpg"
				},
				{
					id: 3,
					picture:
						"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586288640812&di=9ff35ccbc43ab42e5949bdaf9cf51302&imgtype=0&src=http%3A%2F%2Fimg.hairbobo.com%2Fuploadimg%2F16%2F08%2F19%2F160819200849417.jpg"
				}
			],
     phoneList: []
		};
	},
	name: "HelloWorld",
	methods: {
		btnps() {
			this.$router.push({ path: "button" });
		},
		home () {
			console.log(1);
    axios.get("/static/home.json").then(res => {
				this.phoneList = res.data;
      });
    }
	},
	created() {
		this.home();
	}
};
</script>
<style scoped>

* {
	margin: 0;
	padding: 0;
}
img {
	width: 100%;
	float: left;
}
li {
	list-style: none;
}
 .picture ul li {
  float: left;
  width: 50%;
  box-sizing: border-box;
  padding: 2px;
}

 .picture ul li img {
  display: block;
  width: 100%;
  float: left;
}
 .picture ul li:nth-child(1) {
  width: 100%;
}

.picture ul li:nth-child(1) img {
  width: 100%;
}

</style>
