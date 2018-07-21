import * as React from 'react';
import { connect } from 'react-redux';
import {
    bindActionCreators,
    Dispatch
} from 'redux';

// Action creators.
import { getGenres } from '../../store/genres/actionCreators';

// Components.
import Page from '../../components/Page';

// States.
import { ApplicationState } from '../../store';

interface Props {
    getGenres: typeof getGenres;
}

class Movies extends React.PureComponent<Props> {
    componentDidMount(): void {
        this.props.getGenres();
    }

    render(): JSX.Element  {
        return (
            <Page>
                <h1>Hello human!</h1>
            </Page>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getGenres: bindActionCreators(getGenres, dispatch),
});
const mapStateToProps = (state: ApplicationState) => {
    return {
        genres: state.genres,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
export {
    Movies,
    Props
};
