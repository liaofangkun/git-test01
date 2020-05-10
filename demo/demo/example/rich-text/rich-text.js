Component({
  data: {
    value: `<p><span style="font-weight: bold;">Bold Text</span></p><p><span style="font-weight: bold;"></span><span style="text-decoration-line: underline;">underline</span><br></p><p><span style="font-style: italic;">italic</span><span style="text-decoration-line: underline;"><br></span></p><blockquote>quote</blockquote><h1>H1</h1><h2>H2</h2><h3>H3</h3><h4>H4</h4><h5>H5</h5><p>Main content</p><p><a href="https://www.taobao.com" target="_blank">淘宝网 - 淘！我喜欢</a><br></p><table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><th>col1&nbsp;</th><th>&nbsp;col2</th></tr><tr><td>&nbsp;data1</td><td>data2&nbsp;</td></tr></tbody></table><video controls="" width="250">      <source src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm" type="video/webm">      <source src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4" type="video/mp4">      Sorry, your browser doesn't support embedded videos. </video><p><br></p>`
  },
  methods: {
    onChange({ detail: { value } }) {
      console.log('>>>>>>>>>>>>> editor change: ', value);
    }
  },
});
