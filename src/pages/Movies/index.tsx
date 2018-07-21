import * as React from 'react';
import { connect } from 'react-redux';
import {
    bindActionCreators,
    Dispatch
} from 'redux';

// Action creators.
import { setPageTitle } from '../../store/layout/actionsCreators';

// Components.
import Main from '../../components/Main';

// States.
import { ApplicationState } from '../../store';

// Types.
import { GenresState } from '../../store/genres/types';

interface Props {
    genres: GenresState;
    setPageTitle: typeof setPageTitle;
}

class Movies extends React.PureComponent<Props> {
    componentDidMount(): void {
        this.props.setPageTitle('New Movies');
    }

    render(): JSX.Element  {
        return (
            <Main>
                <h1>Hello human!</h1>
            </Main>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setPageTitle: bindActionCreators(setPageTitle, dispatch),
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
