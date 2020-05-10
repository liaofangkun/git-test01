const datasource = (() => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2000 + i
    })
  }
  return result
})()

const data = j => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
      id: 100306660940 + i + j,
      time: 2000 + j
    })
  }
  return result
}

Component({
  mixins: [],
  data: {
    testValue: 'testValue',
    isEditor: false,
    checkboxValue: ['id', 'title', 'time'],
    checkboxDatasource: [
      { value: 'id', label: 'Id' },
      { value: 'title', label: 'Title' },
      { value: 'time', label: 'Time' },
    ],
    cols: [{
      title: 'Id',
      dataIndex: 'id'
    }, {
      title: 'Title',
      dataIndex: 'title'
    }, {
      title: 'Time',
      dataIndex: 'time'
    }],
    selectedRowKeys: [100306660940, 100306660941],
    selectedRowKey: [100306660940], // 单选也用数组标识初始值
    datasource,
    datasource1: datasource,
    datasource2: (() => {
      const result = []
      for (let i = 0; i < 5; i++) {
        result.push({
          title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
          id: 100306660940 + i,
          time: 2000 + i
        })
      }
      return result
    })(), // 用来排序的datasource
    loading: false,
    customVal: {
      Id: true,
      Title: true,
      Time: true
    },
    customWidth: { id: 100 },
    filters: [
      {
        label: 'Nano 3',
        value: 3
      },
      {
        label: 'Nano 678',
        value: 678,
        children: [
          {
            label: 'Nano 67',
            value: 67,
            children: [
              {
                label: 'Nano 6',
                value: 6
              },
              {
                label: 'Nano 7',
                value: 7
              }
            ]
          },
          {
            label: 'Nano 8',
            value: 8
          }
        ]
      },
      {
        label: 'Other',
        value: 'other',
        children: [
          {
            label: 'Nano 4',
            value: 4
          },
          {
            label: 'Nano 5',
            value: 5
          }
        ]
      }
    ]
  },
  props: {},
  didMount() {
    // this.setData({ datasource: this.getDataSource() });
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    remove(evt) {
      const { id } = evt.target.dataset
      let data = this.data.datasource
      data = data.filter(i => i.id !== id)
      this.setData({ datasource: data })
    },

    handleClick(evt) {
      console.log('val', evt.target.dataset.x)
    },

    onPageChange(value) {
      let currentPage = value.detail.value
      console.log('currentPage', currentPage)
      this.setData({
        loading: true
      })
      setTimeout(() => {
        this.setData({
          datasource1: data(currentPage * 5),
          loading: false
        })
      }, 200)
    },

    onCustom(e) {
      let checkboxValue = e.detail.value;
      const data = datasource.map(item => {
        const cols = {};
        checkboxValue.forEach(val => cols[val] = item[val]);
        return cols;
      })

      const __data = this.data.checkboxDatasource;
      const cols = [];
      checkboxValue.forEach(item => {
        const tmp = __data.find(i => i.value = item);
        cols.push({
          title: tmp.label,
          dataIndex: tmp.value
        })
      })

      this.setData({ checkboxValue, datasorce4: data, cols })
    },

    onSort({ detail: { values } }) {
      console.log(values)
      const [dataIndex, order] = values
      this.setData({
        datasource2: this.data.datasource2.sort(function (a, b) {
          const result = a[dataIndex] - b[dataIndex];
          console.log(result)
          return (order === 'asc') ? (result > 0 ? 1 : -1) : (result > 0 ? -1 : 1);
        })
      })
      // const datasorce = this.data.datasorce.sort(function(a, b) {
      //   const result = a[dataIndex] - b[dataIndex]
      //   return order === 'asc' ? (result > 0 ? 1 : -1) : result > 0 ? -1 : 1
      // })
      // this.setData({
      //   datasorce,
      //   sort: { id: order }
      // })
    },

    onFilter({ detail: { value: filterParams } }) {
      console.log(filterParams)
      let ds = this.data.datasource2
      Object.keys(filterParams).forEach(key => {
        console.log(key)
        const selectedKeys = filterParams[key].selectedKeys
        if (selectedKeys.length) {
          ds = ds.filter(record => {
            return selectedKeys.some(value => {
              return record[key].indexOf(value) > -1
            })
          })
        }
      })
      this.setData({ datasource2: ds })
    },
    onSelect({ detail: { values: [selected, record, records] } }) {
      console.log('onSelect', selected, record, records);
    },
    onSelectAll({ detail: { values: [selected, records] } }) {
      console.log('onSelectAll', selected, records);
    },
    // onGetProps: ({ detail: { value: record } }) => {
    //   return {
    //     disabled: record.id === 100306660941
    //   };
    // },
    onSingleChange({ detail: { values: [ids, records] } }) {
      console.log('onSingleChange', ids, records);
      this.setData({ selectedRowKey: ids });
    },

    onChange({ detail: { values: [ids, records] } }) {
      console.log('onChange', ids, records);
      this.setData({ selectedRowKeys: ids });
    },

    onResizeChange({ detail: { values } }) {
      console.log('onResizeChange', values)
      const [id, width] = values
      console.log(this.data.customWidth[id] + width)
      this.setData({
        customWidth: {
          [id]: this.data.customWidth[id] + width
        }
      })
    }
  }
})
