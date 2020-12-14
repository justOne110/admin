    //1. 先导入axios对象
    import axios  from 'axios';
    // 引入loding
    import { Loading } from 'element-ui';
    //2. 创建axios的对象
    const Server = axios.create({
        // baseURL:"https://www.liulongbin.top:8888/api/private/v1/", //基础url地址
        timeout: 3000,//超时时间
    });
    var loadingInstance
    //3. 请求拦截器配置
    Server.interceptors.request.use((config)=>{
        //  loadingInstance = Loading.service({ fullscreen: true });
        // 先获取本地存储
        // let token = sessionStorage.getItem('drl_admin')
        // if(token){
        //     config.headers['Authorization'] = token
        // }

        return config;

    },(error)=>{
        return Promise.reject(error);
    });

    //4. 相应拦截器
    Server.interceptors.response.use((response)=>{

        // loadingInstance.close();
        // console.log(response);
        //过滤返回的data值
        if(response.status == 200){
            return response.data;
        }

        return response;
    },(error)=>{

        return Promise.reject(error);
    });

    //5. 抛出对象接口
    export default Server;
    