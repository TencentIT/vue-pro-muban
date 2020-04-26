基于vue封装的项目的基础模板

前端页面UI使用的是 muse-ui

CSS编译器 使用的是 sass 

HTTP请求： 使用的是自己封装的基于axios的一套请求，

封装了一个公共对象 BIObj , 上面放了基本上页面所有的公共方法以及公共API

例如：
把 所有的URL 对象都放在了BIObj对象上，BIObj是一个全局的对象，可以直接调用，

对页面上的URL  都进行了封装 ，封装成一个url.js 文件，后面掉接口直接去url.js里面添加操作，方便统一维护

搭建好了 vuex 

组件里面发请求直接这么写：

post请求：

      BIObj.request("post", BIObj.URL.login, this.loginForm)
        .then(res => {
          this.loading = false
          // 数据处理
          ...
        })
        .catch(error => {
          this.loading = false
          // 报错信息已经在封装的  http.js  里面进行了统一处理
        });


get请求：

      SPOC.request("get", SPOC.URL.ruleEngine.ruleContent(this.seqNum), {
        ruleFileId: this.seqNum
      })
        .then(response => {
          this.loading = false;
          let { data } = response;
          this.ruleContent = data;
        })
        .catch(error => {
          this.loading = false;
        });



