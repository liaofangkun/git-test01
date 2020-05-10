Component({
  mixins: [],
  data: {
    vvv: 111,
    value: 234,
    value2: 123,
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    foo() {
      this.setData({
        vvv: '',
      });
    },
    onChange(e) {
      console.log('e:', e);
      this.setData({ value: e.detail.value });
    },
    onInput(e) {
      console.log('e:', e);
      this.setData({ value2: e.detail.value });
    },
    onPressEnter(e) {
      console.log('onPressEnter:', e);
    },
  },
});
