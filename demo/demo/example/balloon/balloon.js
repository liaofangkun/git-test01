Component({
  mixins: [],
  data: { visible: false },
  props: {},
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    tapOnButton() {
      console.log('>>>>>>>>> click button');
    },
    onClose() {
      console.log('>>>>>>>>> onClose');
      this.setData({ visible: false })
    },
    afterClose() {
      console.log('>>>>>>>>> afterClose');
    },
    changeVisible() {
      console.log('>>>>>>>>>> changeVisible');
      this.setData({ visible: true });
    }
  },
});
