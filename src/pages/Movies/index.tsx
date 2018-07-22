import * as React from 'react';
import { connect } from 'react-redux';
import {
    bindActionCreators,
    Dispatch
} from 'redux';

// Action creators.
import { setPageTitle } from '../../store/layout/actionsCreators';
import { getMovies } from '../../store/movies/actionCreators';

// Components.
import Main from '../../components/Main';

// States.
import { ApplicationState } from '../../store';

// Types.
import { GenresState } from '../../store/genres/types';
import { MoviesState } from '../../store/movies/types';

interface Props {
    genres: GenresState;
    getMovies: typeof getMovies;
    movies: MoviesState;
    setPageTitle: typeof setPageTitle;
}

class Movies extends React.PureComponent<Props> {
    componentDidMount(): void {
        this.props.setPageTitle('New Movies');
        this.props.getMovies();
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
    getMovies: bindActionCreators(getMovies, dispatch),
    setPageTitle: bindActionCreators(setPageTitle, dispatch),
});
const mapStateToProps = (state: ApplicationState) => {
    return {
        genres: state.genres,
        movies: state.movies,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
export {
    Movies,
    Props
};
