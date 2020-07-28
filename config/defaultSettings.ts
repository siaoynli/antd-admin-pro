import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  navTheme: 'dark', //侧边深色
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true, //固定头部
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'Ant Design Pro', //浏览器头部标题
  pwa: false,
  iconfontUrl: '',
} as LayoutSettings & {
  pwa: boolean;
};
