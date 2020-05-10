Component({
  mixins: [],
  data: {
    value: 2
  },
  props: {},
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onChange(value) {
      this.setData({
        value: value.detail.value
      });
      console.log('onChange', value);
    },
    onPageSizeChange(e) {
      console.log('onPageSizeChange', e)
    }
  },
});
