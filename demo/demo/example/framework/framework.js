import routerInit from 'miniapp-router';

const basePath = '/create/base';

const routerConfig = {
  routes: [
    {
      path: '/create',
      component: 'button',
      children: [
        { path: '/base', component: 'button' },
        { path: '/data', component: 'button' }
      ],
    },
    {
      path: '/my',
      component: 'icon',
      children: [
        { path: '/list', component: 'icon' },
        { path: '/lanuh', component: 'icon' }
      ],
    }
  ],
  option: {
    initPath: '/create',
  }
}

Component({
  mixins: [],
  data: {
    activeKey: '',
    defaultActiveKey: basePath,
    info: { company: '阿里巴巴', miniappName: '活动助手', logo: '' },
    menu: [
      // { name: '创建活动', key: 'create', title: '活动详情', tabs: [{ title: '基本信息1', key: 'base' }, { title: '数据效果1', key: 'data' }] },
      // { name: '我的活动', key: 'my', tabs: [{ title: '活动列表', key: 'list', }, { title: '我发起的', key: 'lanuh' }], },
      // { name: '关于', key: 'about', title: '应用简介' }
    ]
  },
  props: {},
  didMount() {
    routerInit.call(this, routerConfig);
    console.log('*****', this)
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onChange({ detail: { value } }) {
      console.log('************$router', value)
      this.$router.push(value);
      this.setData({ activeKey: value })
    },
    onActiveKeyChange(event) {
      const { path } = event.target.dataset;
      this.setData({ activeKey: path })
    }
  },
});
