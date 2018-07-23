import * as React from 'react';
import { connect } from 'react-redux';
import {
    Link,
    RouteComponentProps
} from 'react-router-dom';
import {
    bindActionCreators,
    Dispatch
} from 'redux';
import styled from 'styled-components';

// Config.
import { imageBaseUrl } from '../../config/defaults';

// Action creators.
import {
    getExtendedMovie,
    resetExtendedMovie
} from '../../store/extended-movie/actionCreators';
import { setPageTitle } from '../../store/layout/actionsCreators';

// Components.
import Icon from '@material-ui/core/Icon';
import Main from '../../components/Main';

// States.
import { ApplicationState } from '../../store';

// Styles.
import palette from '../../styles/palette';

// Types.
import { ExtendedMovieState } from '../../store/extended-movie/types';
import { Genre } from '../../store/genres/types';

interface Props {
    extendedMovie: ExtendedMovieState;
    getExtendedMovie: typeof getExtendedMovie;
    resetExtendedMovie: typeof resetExtendedMovie;
    setPageTitle: typeof setPageTitle;
}

const Background = styled<{ imageUrl: string | undefined }, 'div'>('div')`  
  background: url("${props =>
    props.imageUrl ?
        `${imageBaseUrl}/original/${props.imageUrl}` :
        require('./assets/placeholder.png')
    }") no-repeat 50% 50%;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;
const Container = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  display: flex;
  flex-direction: row;
  padding: 1rem;
  width: 100%;
`;
const Content = styled.div`
  flex: 1;
`;
const Description = styled.h4`
  color: ${palette.primary.white};
`;
const GenreChip = styled.span`
  background-color: ${palette.brand.green700};
  border-radius: 1.5rem;
  color: ${palette.primary.white};
  font-size: 1.1rem;
  display: inline-block;
  height: 3rem;
  line-height: 3rem;
  margin: 0 1rem 1rem 0;
  padding: 0 1.5rem;
`;
const GenreChipContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 0 2rem;
`;
const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin: 0 0 1rem;
`;
const RatingText = styled.h2`
  color: ${palette.primary.white};
  margin: 0 0.5rem 0 0;
`;
const Title = styled.h1`
  color: ${palette.primary.white};
  flex: 1;
  line-height: 6rem;
`;
const WhiteIcon = styled(Icon)`
  color: ${palette.primary.white};
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
  width: 100%;
  z-index: 0;
`;

class Movie extends React.PureComponent<Props & RouteComponentProps<void>> {
    componentDidMount(): void {
        const id: number = parseInt(this.props.match.params['id']);

        this.props.getExtendedMovie(id);
    }

    componentWillUnmount(): void {
        this.props.resetExtendedMovie();
    }

    render(): JSX.Element  {
        const { extendedMovie } = this.props;

        return (
            <Main>
                <Wrapper>
                    <Background imageUrl={extendedMovie.result.backdrop_path} />
                    <Container>
                        <Link to="/movies">
                            <WhiteIcon style={{ fontSize: '6rem' }}>
                                keyboard_arrow_left
                            </WhiteIcon>
                        </Link>
                        <Content>
                            <Header>
                                <Title>{extendedMovie.result.title || ''}</Title>
                                <RatingText>{extendedMovie.result.vote_average || 0}</RatingText>
                                <WhiteIcon style={{ fontSize: '4rem' }}>
                                    grade
                                </WhiteIcon>
                            </Header>
                            <GenreChipContainer>
                                {
                                    extendedMovie.result.genres &&
                                    extendedMovie.result.genres.map((genre: Genre, index: number) =>
                                        <GenreChip key={index}>
                                            {genre.name}
                                        </GenreChip>
                                    )
                                }
                            </GenreChipContainer>
                            <Description>{extendedMovie.result.overview || ''}</Description>
                        </Content>
                    </Container>
                </Wrapper>
            </Main>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getExtendedMovie: bindActionCreators(getExtendedMovie, dispatch),
    resetExtendedMovie: bindActionCreators(resetExtendedMovie, dispatch),
    setPageTitle: bindActionCreators(setPageTitle, dispatch),
});
const mapStateToProps = (state: ApplicationState) => {
    return {
        extendedMovie: state.extenedMovie,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
export {
    Movie,
    Props
};
