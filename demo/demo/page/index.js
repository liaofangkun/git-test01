import demodata from './data';
import routerConfig from './router';
import routerInit from 'miniapp-router';

Page({
  data: {
    demodata,
    typeName: 'Component 组件',
    componentName: 'Button 按钮',
    type: 'component',
    component: 'button',
    selectedKeys: ['button'],
  },
  onLoad() {
    routerInit.call(this, routerConfig);
  },
  onItemClick(event) {
    let { typeName, componentName, type, component } = event.target.dataset;
    this.setData({ typeName, componentName, type, component });

    if (`/${type}/${component}` === '/adaptive/framework') {
      my.navigateTo({url: '/page/adaptive/adaptive'});
      return;
    }

    this.$router.push(`/${type}/${component}`);
    console.log('[router test]：', `/${type}/${component}`);
  },
  handleSelect(value) {},
});
