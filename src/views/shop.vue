<template>
    
		<el-container>
		  <el-aside width="200px">
			    <el-menu
			        default-active="2"
			        class="el-menu-vertical-demo"
			        @open="handleOpen"
			        @close="handleClose">
			 
			        <el-menu-item index="2">
			          <i class="el-icon-menu"></i>
			          <span slot="title">订单管理</span>
			        </el-menu-item>
			       
			        <el-menu-item index="4">
			          <i class="el-icon-setting"></i>
			          <span slot="title">发票管理</span>
			        </el-menu-item>
			      </el-menu>
		  </el-aside>
		  <el-main>Main</el-main>
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
