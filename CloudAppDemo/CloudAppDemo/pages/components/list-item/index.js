Component({
    props: {
        title: 'title',
        icon: '',
        url: '',
        last: false,
        onClick: () => {}
    },
    methods: {
        clickHandle() {
            this.props.onClick();
        }
    }
})