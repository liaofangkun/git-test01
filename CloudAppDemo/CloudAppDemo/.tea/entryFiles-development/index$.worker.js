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
require('../../pages/components/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/components/item-group/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/apis/index?hash=5755775da872d5cdf87d2cd95f07d60c637f68d2');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}