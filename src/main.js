import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 配置axios
import axios from './uilts/request.js'
Vue.prototype.$axios = axios

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 路由守卫
router.beforeEach((to,form,next)=>{
	
	var token = sessionStorage.getItem('drltoken')
	// 登录鉴权
	if(to.path == '/'){
		token != null ? next('/index') :''
	}else{
		token == null ?next('/'):''
	}
	
	// if(token == null ){
	// 	next('/')
	// }else{
	// 	next('/index')
	// }
		
	
	next()
})
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
