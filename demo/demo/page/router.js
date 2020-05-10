export default {
  routes: [
    {
      path: '/component',
      component: 'component',
      children: [
        { path: '/button', component: 'button' },
        { path: '/balloon', component: 'balloon' },
        { path: '/icon', component: 'icon' },
        { path: '/menu-button', component: 'menu-button' },
        { path: '/select', component: 'select' },
        { path: '/slider', component: 'slider' },
        { path: '/menu', component: 'menu' },
        { path: '/image', component: 'image' },
        { path: '/progress', component: 'progress' },
        { path: '/input', component: 'input' },
        { path: '/textarea', component: 'textarea' },
        { path: '/switch', component: 'switch' },
        { path: '/radio', component: 'radio' },
        { path: '/checkbox', component: 'checkbox' },
        { path: '/date-picker', component: 'date-picker' },
        { path: '/pagination', component: 'pagination' },
        { path: '/nav', component: 'nav' },
        { path: '/tab', component: 'tab' },
        { path: '/test', component: 'test' },
        { path: '/table', component: 'table' },
        { path: '/overlay', component: 'overlay' },
        { path: '/rich-text', component: 'rich-text' },
      ],
    },
    {
      path: '/scene',
      component: 'scene',
      children: [{ path: '/form', component: 'form' }],
    },
    {
      path: '/charts',
      component: 'charts',
      children: [{ path: '/table', component: 'table' }],
    },
    {
      path: '/api',
      component: 'api',
      children: [
        { path: '/other', component: 'other' },
        { path: '/media', component: 'media' },
        { path: '/interface', component: 'interface' },
        { path: '/network', component: 'network' },
        { path: '/base', component: 'base' },
      ],
    },
    {
      path: '/adaptive',
      component: 'adaptive',
      children: [
        {
          path: '/framework',
          component: 'framework',
          children: [{
            path: '/create',
            component: 'button',
            children: [
              { path: '/base', component: 'button1' },
              { path: '/data', component: 'button2' }
            ],
          },
          {
            path: '/my',
            component: 'icon',
            children: [
              { path: '/list', component: 'icon1' },
              { path: '/lanuh', component: 'icon2' }
            ],
          }],
        },
      ],
    },
  ],
  option: {
    initPath: '/component/button',
  },
};
