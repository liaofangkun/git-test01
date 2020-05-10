Component({
  mixins: [],
  data: {
    tabs: [
      { tab: 'Home', key: 'home', content: 'This is home page' },
      { tab: 'Document', key: 'doc', content: 'This is document page' },
      { tab: 'API', key: 'api', content: 'This is api page' },
      { tab: 'Repo', key: 'repo', content: 'This ia repo link' }
    ],
    dynamicTabs: [
      { tab: 'Home', key: 'home', content: 'This is home page' },
      { tab: 'Document', key: 'doc', content: 'This is document page' },
      { tab: 'API', key: 'api', content: 'This is api page' },
      { tab: 'Repo', key: 'repo', content: 'This ia repo link' }
    ],
    activeKey: 'home',
    soMuchTabs: [...Array(100)].map((x, i) => {
      return { tab: `No.${i}`, key: i, content: `This is No.${i} page` }
    }),
    position: 'bottom',
    tabPositions: ['top', 'bottom', 'left', 'right']
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},

  remove(targetKey) {
    let activeKey = this.data.activeKey;
    const panes = [];
    this.data.tabs.forEach(pane => {
        if (pane.key != targetKey) {
            panes.push(pane);
        }
    });

    if (targetKey == activeKey) {
        activeKey = panes[0].key;
    }
    console.log('remove >>>>>>>', )
    this.setData({ tabs: panes, activeKey });
  },

  methods: {
    tapbutton() {
      console.log('tap')
    },

    changeTabPosition({ detail: { value: position } }) {
      console.log(position)
      this.setData({ position })
    },
    
    addTab() {
      const { dynamicTabs } = this.data;
      dynamicTabs.push({ tab: 'new tab', key: Math.random(), closeable: true });
      console.log(dynamicTabs)
      this.setData({ dynamicTabs: [...dynamicTabs] });
    },

    onClose(e) {
      console.log('targetKey >>>>>>>>>>>>>>', this, e)
      const targetKey = e.detail.value;
      let activeKey = this.data.activeKey;
      const tabs = [];
      this.data.dynamicTabs.forEach(pane => {
          if (pane.key != targetKey) {
              tabs.push(pane);
          }
      });
      console.log(targetKey, activeKey, tabs)
      if (targetKey == activeKey) {
          activeKey = tabs[0].key;
      }
      this.setData({ dynamicTabs: tabs, activeKey });
    },

    onChange(e) {
      const activeKey = e.detail.value
      console.log('activeKey, >>>>>>>>>>>>>>', this, activeKey)
      this.setData({ activeKey });
    }
  },
});
