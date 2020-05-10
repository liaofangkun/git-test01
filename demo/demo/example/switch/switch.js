Component({
  mixins: [],
  data: {
    checked: false,
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onChange(val) {
      let checked = val.detail.value;
      this.setData({ checked });
    },
    ontap(ontap) {
      console.log('ontap:', ontap);
    },
  },
});
