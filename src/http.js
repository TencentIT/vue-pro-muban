import axios from 'axios'
import { router, vue } from '@/main'

axios.defaults.timeout = 600000

axios.interceptors.response.use(
  response => {
    if(BIObj.loading && BIObj.onload) {
      BIObj.onload=false;
      BIObj.loading.close()
    };
    return response
  },
  error => {
    if(BIObj.loading&& BIObj.onload) {
      BIObj.onload=false;
      BIObj.loading.close()
    };    
    if (error.response) {
      if (error.response.data.code) {
        switch (error.response.data.code) {
          case 10001:
            break
          default:
            if (error.response.config.method !== 'get') {
              let msg=error.response.data.msg;
              if(error.response.data.errors&& error.response.data.errors.length){
                msg='';
              }
              if(error.response.data.errors){
                for(let i in error.response.data.errors){
                  if(error.response.data.errors[i]&& error.response.data.errors[i].message){
                    msg+=` ${error.response.data.errors[i].message}`;
                  }
                }
              }
              vue.$toast.error({
                title: 'Error',
                message: msg,
                time: 3500,
              })
            }
        }
      } else if(error.response.status==401){
        vue.$router.push({ path: '/login' });        
        // vue.$message.error({
        //   title: 'Error',
        //   message: 'Server disconnected',
        //   duration: 3500
        // })
      }else if(error.response.status==403){
        vue.$toast.error({
          title: 'Error',
          message: 'No Permission !',
          time: 3500
        })
      }else {
        if(!token&& url.indexOf('login')==-1){
          Vue.$router.push({ path: BIObj.host+'/login' });
        }
        vue.$message.error({
          title: 'Error',
          message: 'Server disconnected',
          time: 3500
        })
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)

export default axios
