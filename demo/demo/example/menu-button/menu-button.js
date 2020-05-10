Component({
  mixins: [],
  data: {
    loading: false,
    items: [1, 2, 3, 4],
    time: '2019-01-01'
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    setLoading() {
      this.setData({
        loading: !this.data.loading
      })
      // setTimeout(() => {
      //   this.setData({
      //     loading: !this.data.loading
      //   })
      // }, 500)
    },
    menuselect(e) {
      console.log(e)
    },
    itemclick() {
      console.log(arguments)
    },
    logdate(e) {
      this.setData({
        time: Math.ceil(Math.random() * 10000) + '-01-01'
      })
      console.log(e)
    }
  },
});
