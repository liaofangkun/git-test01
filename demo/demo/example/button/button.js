Component({
  mixins: [],
  data: {
    loading: false
  },
  props: {},
  didMount() { },
  didUpdate() {},
  didUnmount() {},
  methods: {
    ohmygod() {
      console.log('clic111111k');
    },
    setLoading() {
      this.setData({
        loading: !this.data.loading
      })
    }
  },
});
