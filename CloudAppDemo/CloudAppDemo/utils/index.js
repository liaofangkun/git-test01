
export function safeAccess(props, keys, def) {
if (!Array.isArray(keys)) {
    keys = keys.split('.');
}
return keys.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, props) || def;
}
export function myApiPromisify(method, options) {
  return new Promise((resolve, reject) => {
    method({
      ...options,
      success: resolve,
      fail: reject
    })
  });
}