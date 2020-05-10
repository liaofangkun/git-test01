Component({
  data: {
    visible1: false,
    visible2: false,
    visible3: false,
    groupVisible: false
  },
  methods: {
    onTap({ target: { dataset: { index } } }) {
      this.setData({ [`visible${index}`]: !this.data[`visible${index}`] });
    },
    onClose({ target: { dataset: { index } } }) {
      this.setData({ [`visible${index}`]: false });
    },
    onVisibleChange({ detail: { value: visible } }) {
      console.log('>>>>>>>>>>> onVisibleChange', visible);
      this.setData({ visible3: visible });
    },
    onGroupVisibleChange({ detail: { value: groupVisible } }) {
      console.log('>>>>>>>>>>> onGroupVisibleChange', groupVisible);
      this.setData({ groupVisible });
    }
  },
});
