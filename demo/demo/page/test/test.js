Page({
  data: {
    username: 'test',
    password: '',
    select: 'jack',
    switch: true,
    option1: false,
    option2: false,
    option3: false,
    agreement: false,
    radioValue: '',
    list: [
      {
        value: 'appale',
        label: 'Appale',
        disabled: false,
      },
      {
        value: 'pear',
        label: 'Pear',
      },
      {
        value: 'orange',
        label: 'Orange',
        disabled: true,
      },
    ],
  },
  onLoad() {},
  onReady() {},

  onChange(e) {
    let {
      detail: { value },
      currentTarget: { dataset },
    } = e;
    let { name } = dataset;
    console.log(name + ' onChange:', value);
    this.setData({ [name]: value });
  },
  onChangeHeihei(e) {
    let {
      detail: { value },
      // currentTarget: { dataset }
    } = e;
    // let { value } = dataset;
    // console.log('name:', name);
    // console.log('value:', value);
    // debugger;
    this.setData({ radioValue: value });
  },
  handleSubmit() {
    console.log('[form submit]:', this.data);
    my.showToast({ content: JSON.stringify(this.data) });
  },
  onBeforeChange(from, to) {
    this.setData({ currentTarget: to });
    return true;
  },
  onParamsChange(preParams, nextParams) {
    //钩子函数可以获取两个参数，preParams为之前的params，
    //nextParams为变化后的params
    this.setData({ param: JSON.stringify(nextParams) });
  },
});
