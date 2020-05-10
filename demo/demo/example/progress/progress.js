Component({
  mixins: [],
  data: {
    percent: 0,
    addDisabled: false,
    minDisabled: true
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    addProgress() {
      if (this.data.percent + 10 >= 100) {
        this.setData({ addDisabled: true})
      }
      this.setData({ percent: this.data.percent + 10, minDisabled: false });
    },
    minusProgress() {
      if (this.data.percent - 10 <= 0) {
        this.setData({ minDisabled: true })
      }
      this.setData({ percent: this.data.percent - 10, addDisabled: false });
    },
  },
});
