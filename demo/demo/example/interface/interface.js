Component({
  mixins: [],
  data: {},
  props: {},
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    alert() {
      my.alert({
        title: '亲',
        content: '您本月的账单已出',
        buttonText: '我知道了',
        success: () => {
          my.alert({
            title: '用户点击了「我知道了」',
          });
        }
      });
    },
    comfirm() {
      my.confirm({
        title: '温馨提示',
        content: '您是否想查询快递单号：\n1234567890',
        confirmButtonText: '马上查询',
        cancelButtonText: '暂不需要',
        success: (result) => {
          my.alert({
            title: `${result.confirm}`,
          });
        },
      });
    },
    showLoading() {
      my.showLoading({
        content: '加载中...',
        delay: '1000',
      });
      setTimeout(() => {
        my.hideLoading();
      }, 5000);
    },
    showToastSuccess() {
      my.showToast({
        type: 'success',
        content: '操作成功',
        duration: 3000,
        success: () => {
          // my.alert({
          //   title: 'toast 消失了',
          // });
        },
      });
    },
    showToastFail() {
      my.showToast({
        type: 'fail',
        content: '操作失败',
        duration: 3000,
        success: () => {
          // my.alert({
          //   title: 'toast 消失了',
          // });
        },
      });
    },
    showToastException() {
      my.showToast({
        type: 'exception',
        content: '网络异常',
        duration: 3000,
        success: () => {
          // my.alert({
          //   title: 'toast 消失了',
          // });
        },
      });
    },
    showToastNone() {
      my.showToast({
        type: 'none',
        content: '提醒',
        duration: 3000,
        success: () => {
          // my.alert({
          //   title: 'toast 消失了',
          // });
        },
      });
    },
    hideToast() {
      my.hideToast()
    },
    navigateTo() {
      my.navigateTo({ url: '/page/back/back' })
    },
    navigateBack() {
      my.navigateBack()
    },
    redirectTo() {
      my.redirectTo({ url: '/page/to/to' })
    },
    createSelectorQuery() {
      my.createSelectorQuery()
        // .select('#non-exists').boundingClientRect()
        // .select('#one').boundingClientRect()
        .selectAll('.all').boundingClientRect()
        // .select('#scroll').scrollOffset()
        .selectViewport().boundingClientRect()
        .selectViewport().scrollOffset().exec((ret) => {
          console.log(ret);
          my.alert({
            content: JSON.stringify(ret, null, 2),
          });
        })
    },
  },
});
