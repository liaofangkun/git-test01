import hoistStatics from 'hoist-non-react-statics';

export function createReactClassWithHoistStatics(createReactClass, wrapperComponent, clazz) {
    let container = createReactClass(clazz);
    return hoistStatics(container, wrapperComponent);;
}