import * as React from 'react';
import { connect } from 'react-redux';
import {
    bindActionCreators,
    Dispatch
} from 'redux';
import styled from 'styled-components';

// Action creators.
import { getGenres } from '../../store/genres/actionCreators';
import { setPageTitle } from '../../store/layout/actionsCreators';
import { getMovies } from '../../store/movies/actionCreators';

// Components.
import Button from '@material-ui/core/Button';
import FilterPanel from './components/FilterPanel';
import Grid from '@material-ui/core/Grid';
import Main from '../../components/Main';
import MovieTile from './components/MovieTile';
import CircularProgress from '@material-ui/core/CircularProgress';
import ScrollListener from '../../components/ScrollListener';

// States.
import { ApplicationState } from '../../store';

// Styles.
import palette from '../../styles/palette'

// Types.
import { FiltersState } from '../../store/filters/types';
import { GenresState } from '../../store/genres/types';
import {
    Movie,
    MoviesState
} from '../../store/movies/types';

interface Props {
    filters: FiltersState;
    genres: GenresState;
    getGenres: typeof getGenres;
    getMovies: typeof getMovies;
    movies: MoviesState;
    setPageTitle: typeof setPageTitle;
}

const LoadMoreButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
`;
const ProgressContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 1rem 1rem 0;
`;

class Movies extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);

        // Bind functions.
        this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }

    private getFilteredMovies(): Movie[] {
        const {
            filters,
            movies
        } = this.props;
        let results: Movie[] = movies.results;

        // If any genres have been selected, filter by genre.
        if (filters.genreIds.length > 0) {
            results = movies.results.filter((item: Movie) =>
                item.genre_ids.some((value: number) =>
                    filters.genreIds.indexOf(value) > -1
                )
            );
        }

        // Filter by average rating.
        return results.filter((item: Movie) => item.vote_average >= filters.averageRating);
    }

    componentDidMount(): void {
        const { movies } = this.props;

        this.props.setPageTitle('New Movies');
        this.props.getGenres();

        if (movies.results.length < 1) {
            this.props.getMovies();
        }
    }

    onLoadMoreClick(): void {
        const { movies } = this.props;

        if (!movies.loading) {
            this.props.getMovies(movies.page + 1);
        }
    }

    onScroll(): void {
        const { movies } = this.props;

        if (
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight &&
            !movies.loading
        ) {
            this.props.getMovies(movies.page + 1);
        }
    }

    render(): JSX.Element  {
        const { movies } = this.props;

        return (
            <Main>
                <ScrollListener onScroll={this.onScroll}/>
                <Wrapper>
                    <FilterPanel />
                    <Grid
                        container
                        justify="center"
                        spacing={16}>
                        {
                            this.getFilteredMovies().map((value: Movie, index: number) =>
                                <Grid
                                    item
                                    key={index}>
                                    <MovieTile movie={value} />
                                </Grid>
                            )
                        }
                    </Grid>
                    {
                        (
                            movies.loading ?
                                <ProgressContainer>
                                    <CircularProgress
                                        size={50}
                                        style={{ color: palette.primary.grey }}/>
                                </ProgressContainer> :
                                <LoadMoreButtonContainer>
                                    <Button onClick={this.onLoadMoreClick}>
                                        Load more
                                    </Button>
                                </LoadMoreButtonContainer>
                        )
                    }
                </Wrapper>
            </Main>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getGenres: bindActionCreators(getGenres, dispatch),
    getMovies: bindActionCreators(getMovies, dispatch),
    setPageTitle: bindActionCreators(setPageTitle, dispatch),
});
const mapStateToProps = (state: ApplicationState) => {
    return {
        filters: state.filters,
        genres: state.genres,
        movies: state.movies,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
export {
    Movies,
    Props
};
