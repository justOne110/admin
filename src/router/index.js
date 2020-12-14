import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=> import('../views/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: ()=> import('../views/index.vue'),
	children:[
		{
			
			path: 'homep',
			name: 'homep',
			component: ()=> import('../views/homep.vue'),
			children:[
				{
				  path: 'homep1',
				  name: 'homep1',
				  component: ()=> import('../views/homep1.vue')
				},
				{
				  path: 'homep2',
				  name: 'homep2',
				  component: ()=> import('../views/homep2.vue')
				},
				{
				  path: 'homep3',
				  name: 'homep3',
				  component: ()=> import('../views/homep3.vue')
				}
			]
		},
		{
			path: 'shop',
			name: 'shop',
			component: ()=> import('../views/shop.vue')
		},
		{
			path: 'order',
			name: 'order',
			component: ()=> import('../views/order.vue')
		},
		{
			path: 'vip',
			name: 'vip',
			component: ()=> import('../views/vip.vue')
		}
		
	]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
