// import cloud from 'mpcloud-sdk';
// cloud.init();
const app = getApp();

Page({
  data: {
    user: {}
  },
  async invokeCloudApp (){
    const {cloud} = getApp();
    try {
      const res = await cloud.application.httpRequest({
        //不需要完整域名，只需要http接口访问路径即可  
        'path' : 'hello',  
        'method':'GET',
        'headers':{  "mc-dd":"test",  },
        'params':{  "name":"cx",  "age": 18,  },
        'body':{  "xftest":"hhh",  "id":"1234",  },
        'exts':{  "extends":"自定义123",  }  }
        );

      my.alert({
        title:"调用结果",
        content:res
      });
      } catch(e) {
          my.alert({
            content: 'error ' + e.message  
          });  
      }       
  } 

});

// 'mc-timestamp': Date.now(),
// 'mc-network': '',
// 'mc-device-id': '',
// 'mc-platform': '',
// 'mc-version': '',
// 'mc-app-name': '',
// 'mc-session': '',
// 'mc-appKey': '25374671',
// 'mc-sign': '',
// 'mc-env': '',
// 'mc-openId': '',
// 'mc-requestId': ''