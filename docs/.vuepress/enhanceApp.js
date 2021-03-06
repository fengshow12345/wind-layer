import './styles/index.less';
import Highlight from './utils/highlight';
import ExamplesComponents from '../../examples/components';

function setPrototype(Vue) {
  // Vue.prototype.$log = log;
}

export default ({
                  Vue, // VuePress 正在使用的 Vue 构造函数
                  options, // 附加到根实例的一些选项
                  router, // 当前应用的路由实例
                  siteData, // 站点元数据
                }) => {
  Vue.use(Highlight);
  // Vue.use(datGUI);
  Vue.use(ExamplesComponents);
  setPrototype(Vue);

  router.addRoutes([
    {
      name: 'code',
      path: '/code-viewer',
      component: () => import(/* webpackChunkName: "viewer" */ './pages/index.vue'),
    },
  ]);
}
