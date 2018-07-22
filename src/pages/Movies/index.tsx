import * as React from 'react';
import { connect } from 'react-redux';
import {
    bindActionCreators,
    Dispatch
} from 'redux';
import styled from 'styled-components';

// Action creators.
import { setPageTitle } from '../../store/layout/actionsCreators';
import { getMovies } from '../../store/movies/actionCreators';

// Components.
import Grid from '@material-ui/core/Grid';
import Main from '../../components/Main';
import MovieTile from './components/MovieTile';

// States.
import { ApplicationState } from '../../store';

// Types.
import { GenresState } from '../../store/genres/types';
import {
    Movie,
    MoviesState
} from '../../store/movies/types';

interface Props {
    genres: GenresState;
    getMovies: typeof getMovies;
    movies: MoviesState;
    setPageTitle: typeof setPageTitle;
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 1rem 1rem 0;
`;

class Movies extends React.PureComponent<Props> {
    componentDidMount(): void {
        this.props.setPageTitle('New Movies');
        this.props.getMovies();
    }

    render(): JSX.Element  {
        const { movies } = this.props;

        return (
            <Main>
                <Wrapper>
                    <Grid
                        container
                        justify="center"
                        spacing={16}>
                        {
                            movies.results.map((value: Movie, index: number) =>
                                <Grid
                                    item
                                    key={index}>
                                    <MovieTile movie={value} />
                                </Grid>
                            )
                        }
                    </Grid>
                </Wrapper>
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
