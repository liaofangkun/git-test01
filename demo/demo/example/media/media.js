Component({
  mixins: [],
  data: {
    compressedSrc: '',
    mode: 'aspectFit',
    src: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    chooseImage() {
      my.chooseImage({
        sourceType: ['camera', 'album'],
        count: 2,
        success: (res) => {
          my.alert({
            content: JSON.stringify(res),

          });
        },
        fail: () => {
          my.showToast({
            content: 'fail', // 文字内容
          });
        }
      })
    },
    getImageInfo() {
      my.getImageInfo({
        src: this.data.src,
        success: (res) => {
          my.alert({
            content: JSON.stringify(res),
          });
        }
      })
    },
    previewImage() {
      my.previewImage({
        current: 2,
        urls: [
          'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
          'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
          'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg'
        ],
      });
    },
    saveImage() {
      my.saveImage({
        url: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        showActionSheet: true,
        success: () => {
          my.alert({
            title: '保存成功',
          });
        },
        fail: (res) => {
          my.alert({
            title: '保存失败',
            content: JSON.stringify(res)
          });
        }
      });
    },
    selectImage() {
      my.chooseImage({
        count: 1,
        success: (res) => {
          my.compressImage({
            apFilePaths: res.apFilePaths,
            level: 1,
            success: data => {
              console.log(data);
              this.setData({
                compressedSrc: data.apFilePaths[0],
              })
            }
          })
        }
      })
    },
  },
});
