Component({
  mixins: [],
  data: {
    value: [],
    data: [],
    disabled: true,
    dataSource: [
      { value: '10001', label: 'Lucy King' },
      { value: 10002, label: 'Lily King' },
      { value: 10003, label: 'Tom Cat', disabled: true },
      {
        label: 'Special Group', children: [
          { value: new Date(), label: 'new Date()' },
          { value: 'false', label: 'FALSE' },
          { value: 0, label: 'ZERO' }
        ]
      }
    ],
    dataSource1: [{
      label: 'label1',
      children: [{
        label: 'label1-1',
        value: 'text1-1'
      }]
    }, {
      label: 'label2',
      children: [{
        label: 'label2-1',
        value: 'text2-1'
      }]
    }],
    dataSource2: [
      { value: 'Lilith', age: 22, gender: 'F' },
      { value: 'Tom Cat', age: 28, gender: 'M' },
      { value: 'Jim Green', age: 18, gender: 'M' },
      { value: 'Monkey King', age: 999, gender: 'M' }
    ],
    dataSource3: [],
    cityData: {
      Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
      Hubei: ['Wuhan', 'Yichang', 'Jingzhou'],
      Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
    },
    provinceData: ['Zhejiang', 'Hubei', 'Jiangsu'],
    province: '',
    city: ''
  },
  props: {},
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onInput(val) {
      my.showToast({ content: JSON.stringify(val) });
    },
    onChange(value) {
      console.log(value);
    },
    onBlur(e) {
      console.log(/onblur/, e);
    },
    onToggleHighlightItem(item, type) {
      console.log(item, type);
    },
    handleChange(value) {
      console.log(value);
    },
    handleChange1(value) {
      this.setData({ value: value.detail.value });
    },
    handleProvinceChange(value) {
      const data = this.data.cityData[value.detail.value];
      this.setData({ data, province: value.detail.value, city: '', disabled: !data });
    },
    handleCityChange(value) {
      this.setData({ city: value.detail.value });
    },
    handleChange2(value) {
      console.log('handleChange: ', value.detail.value);
    },
    valueRender(v) {
      return `${v.value} / ${v.gender} / ${v.age}`;
    },
    // handleSearch(value) {
    //   value = value.detail.value;
    //   if (this.searchTimeout) {
    //     clearTimeout(this.searchTimeout);
    //   }
    //   this.searchTimeout = setTimeout(() => {
    //     // eslint-disable-next-line handle-callback-err
    //     value ? jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, (err, data) => {
    //       const dataSource = data.result.map(item => ({
    //         label: item[0], value: (timestamp++).toString(36)
    //       }));
    //       this.setData({ dataSource });
    //     }) : this.setData({ dataSource: [] });
    //   }, 100);


    // }
  },
});
