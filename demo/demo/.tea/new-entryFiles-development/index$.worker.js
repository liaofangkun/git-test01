
require('./config$.js?appxworker=1');
require('./importScripts$.js?appxworker=1');
function success() {
require('../..//app.js?appxworker=1');
require('../../example/button/button.js?appxworker=1');
require('../../example/select/select.js?appxworker=1');
require('../../example/slider/slider.js?appxworker=1');
require('../../example/text/text.js?appxworker=1');
require('../../example/menu/menu.js?appxworker=1');
require('../../example/icon/icon.js?appxworker=1');
require('../../example/progress/progress.js?appxworker=1');
require('../../component/base-card/base-card.js?appxworker=1');
require('../../example/interface/interface.js?appxworker=1');
require('../../example/media/media.js?appxworker=1');
require('../../example/other/other.js?appxworker=1');
require('../../example/network/network.js?appxworker=1');
require('../../example/base/base.js?appxworker=1');
require('../../component/content/content.js?appxworker=1');
require('../../page/index.js?appxworker=1');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
