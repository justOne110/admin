<template>
	<el-container>
		<el-header>
			<h3>UNI-ADMIN</h3>
			<el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
				<el-menu-item index="/index/homep">首页</el-menu-item>
				<el-menu-item index="/index/shop">商品</el-menu-item>
				<el-menu-item index="/index/order">订单</el-menu-item>
				<el-menu-item index="/index/vip">会员</el-menu-item>
				<el-submenu >
					<template slot="title">admin</template>
					<el-menu-item index="/" @click="out">退出</el-menu-item>
					<el-menu-item index="2">修改</el-menu-item>

				</el-submenu>

			</el-menu>
		</el-header>
		<el-container>
			<router-view></router-view>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		created() {

		},
		mounted() {

		},
		methods: {
		out(){
			sessionStorage.removeItem('drltoken')
		}
		},
		computed: {

		}
	};
</script>

<style lang="scss" scoped>
	.el-container {
		width: 100%;
		height: 100%;

		.el-header {
			width: 100%;
			background-color: #545c64;
			display: flex;
			justify-content: space-between;
			align-items: center;

			h3 {
				color: #ffffff;
			}
		}
		.el-aside{
			background-color: #0088dd;
		}
	}
</style>
