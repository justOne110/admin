<template>
    
		<el-container>
		  <el-aside width="200px">
			    <el-menu
			        default-active="2"
					router
			       >
			 
			        <el-menu-item index="/index/homep/homep1">
			          <i class="el-icon-menu"></i>
			          <span slot="title">后台首页</span>
			        </el-menu-item>
			        <el-menu-item index="/index/homep/homep2">
			          <i class="el-icon-document"></i>
			          <span slot="title">相册管理</span>
			        </el-menu-item>
			        <el-menu-item index="/index/homep/homep3">
			          <i class="el-icon-setting"></i>
			          <span slot="title">商品列表</span>
			        </el-menu-item>
			      </el-menu>
		  </el-aside>
		  <el-main>
			  <router-view></router-view>
		  </el-main>
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

    },
    computed:{

    }
};
</script>

<style lang="scss" scoped>
.el-container{
	background-color: #dddddd;
	width: 100%;
	height: 100%;
	.el-aside{
		background-color: #ffffff;
		box-sizing: 15px 15px 5px #dddddd;
	}
}
</style>
