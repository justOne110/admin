<template>
    <div class="box">
		<div class="item">
			<p>UNI-ADMIN</p>
			<el-form :model="login" :rules="loginRules" ref="loginRef">
				<el-form-item prop="username">
					<el-input v-model="login.username" placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="login.password" type="password" placeholder="密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="drlLogin">立即登录</el-button>
				</el-form-item>
			</el-form>
		</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
			// input的双向绑定
			login:{
				username:'',
				password:'',
			},
			// 表单校验规则
			loginRules:{
				username:[
					{ required: true, message: '请输入用户名', trigger: 'blur' },
				],
				password:[
					{ required: true, message: '请输入密码', trigger: 'blur' },
				],
			}
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
		// 登录事件
		drlLogin(){
			this.$refs.loginRef.validate(async val=>{
				// console.log(val)
				if(!val) return
				const res = await this.$axios.post('http://ceshi5.dishait.cn/admin/login',this.login)
				
				console.log(res)
				if(res.msg != 'ok') return this.$message.erroe('用户名或密码错误')
				
				this.$message.success('登录成功')
				// 存储token
				sessionStorage.setItem('drltoken',res.data.token)
				
				// 跳转到home
				this.$router.push('/index')
			})
			
		}
    },
    computed:{

    }
};
</script>

<style lang="scss" scoped>
.box{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.item{
		// margin: auto;
		box-sizing: border-box;
		padding: 10px 20px;
		width: 30%;
		border: solid 1px #dddddd;
		border-radius: 5px;
		box-shadow: 5px 5px 5px #dddddd;
	}
	P{
		width: 100%;
		line-height: 60px;
		font-size: 20px;
		text-align: center;
	}
	.el-button{
		width: 100%;
		background-color: tan;
		color: #ffffff;
	}
	
}
</style>

