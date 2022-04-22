import axios from "axios";
 
const http = axios.create({
    baseURL: '/api',
    timeout: 5000,
    withCredentials: true,
  headers:{
    "Cookie": "BAIDUID_BFESS=5A4B0B8D4F5FA1A473F46786224877A2:FG=1",
    "sec-ch-ua": ' Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100',
"sec-ch-ua-mobile": "?0",
"sec-ch-ua-platform": "macOS",
"Sec-Fetch-Dest": "empty",
"Sec-Fetch-Mode": "cors",
"Sec-Fetch-Site": "cross-site",
"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"
  }
})
 
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;

}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
 
// 添加响应拦截器
http.interceptors.response.use(function (response) {
    if(response.data.code !== 0){
        // alert(response.data.msg);
    }else{
        return response.data
    }
}, function (error) {
    return Promise.reject(error);
});
 
export default http