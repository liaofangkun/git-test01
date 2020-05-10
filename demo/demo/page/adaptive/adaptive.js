
import routerInit from 'miniapp-router';

const basePath = '/component/button';

const routerConfig = {
  routes: [
    {
      path: '/component',
      component: 'component',
      children: [
        { path: '/button', component: 'button' },
        { path: '/icon', component: 'icon' }
      ],
    },
    {
      path: '/api',
      component: 'api',
      children: [
        { path: '/interface', component: 'interface' },
        { path: '/base', component: 'base' }
      ],
    },
    {
      path: '/sence',
      component: 'sence'
    }
  ],
  option: {
    initPath: basePath,
  }
}

Page({
  data: {
    activeKey: '',
    defaultActiveKey: basePath,
    info: {
      company: '阿里巴巴',
      miniappName: '小程序DEMO',
      logo: 'https://img.alicdn.com/tfs/TB1vVhnmnnI8KJjy0FfXXcdoVXa-300-300.png'
    },
    menu: [
      {
        name: 'Component 组件',
        key: 'component',
        title: '基础组件',
        tabs: [
          {
            name: 'Button 按钮',
            key: 'button',
            title: '模块标题',
            breadcrumb: [{
              name: '无跳转'
            },
            {
              name: 'base',
              path: '/api/base'
            }, {
              name: 'icon',
              path: '/component/icon'
            }]
          },
          { name: 'Icon 图标', key: 'icon' }
        ]
      },
      {
        name: 'API',
        key: 'api',
        tabs: [
          { name: 'Interface 界面', key: 'interface', },
          { name: 'Base 基础能力', key: 'base' }
        ],
      },
      {
        name: 'Scene 场景',
        key: 'scene',
        title: '典型场景'
      }
    ]
  },
  onLoad() {
    routerInit.call(this, routerConfig);
  },
  onChange({ detail: { value } }) {
    console.log('************$router', value)
    this.$router.push(value);
    this.setData({ activeKey: value })
  },
  onActiveKeyChange(event) {
    const { path } = event.target.dataset;
    this.setData({ activeKey: path })
  }
});
