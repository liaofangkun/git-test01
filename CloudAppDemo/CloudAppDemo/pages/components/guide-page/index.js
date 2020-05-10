Component({
    props: {
        index: 1,
        currentIndex: 1,
        onNextClick: () => {},
        onPrevClick: () => {}
    },
    methods: {
        nextHandler(event) {
            this.props.onNextClick(event);
        },
        prevHandler(event) {
            this.props.onPrevClick(event);
        }
    }
})