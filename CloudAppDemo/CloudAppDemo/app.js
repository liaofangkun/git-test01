import {Cloud} from '@tbmp/mp-cloud-sdk';
const cloud = new Cloud();
cloud.init({
  env: 'online'
});
App({
  cloud,
  todos: [
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning 淘宝小程序', completed: false }
  ],
  userInfo: null,
  alert(content, delay = 0, title) {
    setTimeout(() => {
      my.alert({
        title,
        content: typeof content === 'string' ? content : typeof content === 'object' ? JSON.stringify(content) : 'null'
      })
    }, delay)
  },
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) {
        resolve(this.userInfo);
      } else {
        // mock api
        this.userInfo = {
          nickName: 'TaobaoApp',
          avatar:
            'https://gw.alicdn.com/tfs/TB14FsZkyqAXuNjy1XdXXaYcVXa-238-276.png'
        };
        resolve(this.userInfo);
      }
    });
  }
});
