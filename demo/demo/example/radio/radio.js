Component({
  mixins: [],
  data: {
    shape: 'normal',
    itemDirection: 'hoz',
    value: 'orange',
    list: [
      {
        value: 'appale',
        label: 'Appale',
        disabled: false
      }, {
        value: 'pear',
        label: 'Pear'
      }, {
        value: 'orange',
        label: 'Orange',
        disabled: true
      }
    ],
    value1: 'apple',
    value2: 'apple',
    value3: ''
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
    onClick(e) {
      console.log('onClick', e);
    },
    onShapeChange(value) {
      console.log('222222222', value)
      this.setData({ shape: value.detail.value });
    },
    onItemDirectionChange(value) {
      console.log('1111111111', value)
      this.setData({ itemDirection: value.detail.value });
    },
    onSmallChange(value) {
      this.setData({
        value1: value.detail.value
      });
    },
    onMediumChange(value) {
      this.setData({
        value2: value.detail.value
      });
    },
    onNestChange(value) {
      this.setData({
        value3: value.detail.value
      });
    }

  },
});
