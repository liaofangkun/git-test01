if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../app');
require('../component/router-view/router-view');
require('../example/button/button');
require('../component/title/title');
require('../example/balloon/balloon');
require('../example/rich-text/rich-text');
require('../example/select/select');
require('../example/slider/slider');
require('../example/text/text');
require('../example/menu/menu');
require('../example/icon/icon');
require('../example/progress/progress');
require('../example/textarea/textarea');
require('../example/switch/switch');
require('../example/input/input');
require('../example/checkbox/checkbox');
require('../example/radio/radio');
require('../example/menu-button/menu-button');
require('../example/pagination/pagination');
require('../example/date-picker/date-picker');
require('../example/table/table');
require('../example/overlay/overlay');
require('../example/nav/nav');
require('../example/tab/tab');
require('../component/base/base');
require('../example/form/form');
require('../component/scene/scene');
require('../component/base-card/base-card');
require('../example/other/other');
require('../example/media/media');
require('../example/interface/interface');
require('../example/network/network');
require('../example/base/base');
require('../component/api/api');
require('../example/framework/framework');
require('../component/adaptive/adaptive');
require('../page/index');
require('../page/adaptive/adaptive');
require('../page/test/test');
require('../page/back/back');
require('../page/to/to');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}