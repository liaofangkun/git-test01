Component({
  mixins: [],
  data: {
    systemInfo: {},
    text: '3.1415926',
    copy: '',
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    getSDKVersion() {
      my.alert({
        content: my.SDKVersion,
      });
    },
    getSystemInfo() {
      my.getSystemInfo({
        success: (res) => {
          my.alert({
            content: JSON.stringify(res)
          })
          // this.setData({
          //   systemInfo: res
          // })
        }
      })
    },
    getServerTime() {
      my.getServerTime({
        success: (res) => {
          my.alert({
            content: res.time,
          });
        },
      });
    },
    getSystemInfoSync() {
      // this.setData({
      //   systemInfo: my.getSystemInfoSync(),
      // });
      my.alert({
        content: JSON.stringify(my.getSystemInfoSync())
      })
    },
    handleInput(e) {
      this.setData({
        text: e.detail.value,
      });
    },

    handleCopy() {
      my.setClipboard({
        text: this.data.text,
      });
    },

    handlePaste() {
      my.getClipboard({
        success: ({ text }) => {
          this.setData({ copy: text });
        },
      });
    },
  },
});
