export function isEventHandle(m) {
  return !!m.match(eventHandleReg);
}

const eventHandleReg = /^on[A-Z]/;

export function formatEventHandle(props) {
  let events = Object.keys(props).filter(val => isEventHandle(val));
  let eventHandle = {};
  events.map(eventName => {
    eventHandle[eventName] = (...args) => {
      props[eventName]({ detail: { value: args[0], values: args } });
    };
  });
  return eventHandle;
}
