if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../component/router-view/router-view?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/button/button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../component/title/title?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/balloon/balloon?hash=b9ddb3dd56251fb363c2d31eafd3be18962150d0');
require('../../example/rich-text/rich-text?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/select/select?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/slider/slider?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/text/text?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/image/image?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/menu/menu?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/icon/icon?hash=b9ddb3dd56251fb363c2d31eafd3be18962150d0');
require('../../example/progress/progress?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/textarea/textarea?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/switch/switch?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/input/input?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/checkbox/checkbox?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/radio/radio?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/menu-button/menu-button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/pagination/pagination?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/date-picker/date-picker?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/table/table?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/overlay/overlay?hash=b9ddb3dd56251fb363c2d31eafd3be18962150d0');
require('../../example/nav/nav?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/tab/tab?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../component/base/base?hash=c22a29e111e94acbcc81c0c2c297d9694c10bb71');
require('../../example/form/form?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../component/scene/scene?hash=7b4d1c823581989df4c557fe538df7b382a0c750');
require('../../component/base-card/base-card?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../example/other/other?hash=82a338f552fe835ec96e869e6dee70cea76ae0bc');
require('../../example/media/media?hash=82a338f552fe835ec96e869e6dee70cea76ae0bc');
require('../../example/interface/interface?hash=82a338f552fe835ec96e869e6dee70cea76ae0bc');
require('../../example/network/network?hash=82a338f552fe835ec96e869e6dee70cea76ae0bc');
require('../../example/base/base?hash=82a338f552fe835ec96e869e6dee70cea76ae0bc');
require('../../component/api/api?hash=eb42653f165aac196b6d7671c3ffb29473b3c0d7');
require('../../example/framework/framework?hash=30c5d6807d162a657f9ac04b73f302337b8735e4');
require('../../component/adaptive/adaptive?hash=49e76c08ab30e1393fe00541cfd9129c08fa000f');
require('../../page/index?hash=d260c01242c7602e0324b3b2c735144c9b275055');
require('../../page/adaptive/adaptive?hash=e8901a18f579a2a8d1e1552860b728e602dab1fb');
require('../../page/test/test?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/back/back?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/to/to?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}