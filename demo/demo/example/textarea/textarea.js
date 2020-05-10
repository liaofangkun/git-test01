Component({
  mixins: [],
  data: {
    aaa: 'dada',
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onChange(e) {
      console.log('e222:', e.detail.value);
      this.setData({ aaa: e.detail.value });
    },
  },
});
