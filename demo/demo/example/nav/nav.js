Component({
  mixins: [],
  data: {
    icon: ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'],
    types: [
    'smile', 'cry', 'success', 'warning', 'prompt',
    'error', 'help', 'clock', 'success-filling', 'delete-filling',
    'favorites-filling', 'add', 'minus', 'arrow-up', 'arrow-down',
    'arrow-left', 'arrow-right', 'arrow-double-left', 'arrow-double-right', 'switch',
    'sorting', 'descending', 'ascending', 'select', 'semi-select',
    'loading', 'search', 'close', 'ellipsis', 'picture',
    'calendar', 'ashbin', 'upload', 'download', 'set',
    'edit', 'refresh', 'filter', 'attachment', 'account',
    'email', 'atm'
    ]
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    tapbutton() {
      console.log('tap')
    }
  },
});
