import moment from 'moment';

Component({
  mixins: [],
  data: {
    loading: false,
    items: [1, 2, 3, 4],
    time: '2019-06-01 10:00',
    currentDate: moment(),
    datevalue: ''
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onRangeChange(event) {
      console.log(123,event);
      this.setData({
        datevalue: event.detail.value
      })
    },
    onDateChange(event) {
      console.log(event);
    },
    setLoading() {
      this.setData({
        loading: !this.data.loading
      })
    },

    menuselect(e) {
      console.log(e)
    },

    logdate(e) {
      this.setData({
        time: Math.ceil(Math.random() * 10000) + '-01-01'
      })
      console.log(e)
    },

    disabledDate(date, view) {
      switch (view) {
        case 'date':
            return date.valueOf() <= this.data.currentDate.valueOf();
        case 'year':
            return date.year() < this.data.currentDate.year();
        case 'month':
            return date.year() * 100 + date.month() < this.data.currentDate.year() * 100 + this.data.currentDate.month();
        default: return false;
      }
    }
  },
});
