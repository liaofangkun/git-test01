Component({
  mixins: [],
  data: {
    name: '',
    query: {},
    params: {},
  },
  props: {},
  didMount() {
    if (!this.$page.__routerInstance)
      throw new Error(`[miniapp-router] routerInstance not found`);
    console.log(`[miniapp-router]`, this);
    this.$page.__routerInstance.registerComponent(this);
  },
  didUpdate() {},
  didUnmount() {
    this.$page.__routerInstance.removeComponent(this);
  },
  methods: {},
});
