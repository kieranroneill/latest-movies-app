import * as React from 'react';

interface Props {
    onScroll: (event: Event) => void;
}

class ScrollListener extends React.PureComponent<Props> {
    componentDidMount(): void {
        window.addEventListener('scroll', this.props.onScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.props.onScroll);
    }

    render(): null {
        return null;
    }
}

export default ScrollListener;
export {
    Props,
    ScrollListener,
}
