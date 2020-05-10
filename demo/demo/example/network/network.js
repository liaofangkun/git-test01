Component({
  mixins: [],
  data: {
    appid: 'aaaaaaaa',
    websocketServer: 'wss://127.0.0.1:8001',
    sendMessageAbility: false,
    toSendMessage: 'test',
    closeLinkAbility: false,
    log: '',
  },
  props: {},
  didMount() { 
    // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
    my.onSocketClose((res) => {
      my.alert({ content: '连接已关闭！' });
      this.setData({
        sendMessageAbility: false,
        closeLinkAbility: false,
      });
    });
    // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
    my.onSocketOpen((res) => {
      my.alert({ content: '连接已打开！' });
      this.setData({
        sendMessageAbility: true,
        closeLinkAbility: true,
      });
    });

    my.onSocketError(function (res) {
      my.alert('WebSocket 连接打开失败，请检查！' + res);
    });

    // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
    my.onSocketMessage((res) => {
      my.alert({ content: '收到数据！' + JSON.stringify(res) });
    });
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    requestHttp() {
      my.httpRequest({
        url: 'http://httpbin.org/post',
        method: 'POST',
        data: {
          from: '支付宝',
          production: 'AlipayJSAPI',
        },
        dataType: 'json',
        success: function (res) {
          my.alert({ content: "httpRequest:" +JSON.stringify(res) });
        },
        fail: function (res) {
          my.alert({ content: "httpRequest:" + JSON.stringify(res) });
        },
        complete: function (res) {
          // my.alert({title: 'complete'});
        }
      });
    },
    uploadFile() {
      my.chooseImage({
        chooseImage: 1,
        success: res => {
          const path = res.apFilePaths[0];
          console.log(path);
          my.uploadFile({
            url: 'http://httpbin.org/post',
            fileType: 'image',
            fileName: 'file',
            filePath: path,
            success: res => {
              my.alert({ title: '上传成功' , content: "上传成功"});
            },
            fail: function (res) {
              my.alert({ title: '上传失败', content: "上传失败" });
            },
          });
        },
      });
    },
    download() {
      my.downloadFile({
        url: 'https://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
        success({ apFilePath }) {
          my.previewImage({
            urls: [apFilePath],
          });
        },
        fail(res) {
          my.alert({
            title: "download",
            content: res.errorMessage || res.error,
          });
        },
      });
    },
    onServerAddressComplete(e) {
      this.setData({
        websocketServer: e.detail.value,
      });
    },

    onSendMessageReady(e) {
      this.setData({
        toSendMessage: e.detail.value,
      });
    },

    connect_start() {
      my.showToast({
        content: '开始连接:' + this.data.websocketServer, // 文字内容
      });

      my.connectSocket({
        url: this.data.websocketServer, // 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
        success: (res) => {
          my.showToast({
            type: 'success',
            content: 'success', // 文字内容
            duration: 3000
          });
        },
        fail: () => {
          my.showToast({
            type: 'fail',
            content: 'fail', // 文字内容
            duration: 3000
          });
        }
      });
    },

    send_start() {
      my.sendSocketMessage({
        data: this.data.toSendMessage, // 需要发送的内容
        success: (res) => {
          my.showToast({
            type: 'fail', 
            content: '数据发送成功！' + this.data.toSendMessage,
            duration: 3000
          });
        },
        fail: (res) => {
          my.showToast({
            type: '失败', 
            content: '数据发送失败！' + this.data.toSendMessage,
            duration: 3000
          });
        }
      });
    },

    close_start() {
      my.closeSocket();
    },
  },
});
