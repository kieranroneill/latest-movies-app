import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Components.
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

// Config.
import { imageBaseUrl } from '../../../../config/defaults';

// States.
import { ApplicationState } from '../../../../store';

// Styles.
import palette from '../../../../styles/palette'

// Types.
import {
    Genre,
    GenresState
} from '../../../../store/genres/types';
import { Movie } from '../../../../store/movies/types';

interface Props {
    genres: GenresState;
    movie: Movie;
}

const width: number = 250;

const Background = styled<{ imageUrl: string | null }, 'div'>('div')`  
  background: url("${props => 
    props.imageUrl ? 
        `${imageBaseUrl}/w500/${props.imageUrl}` : 
        ''
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
  display: flex;
  height: calc(${width}px * 1.5);
  position: relative;
  width: ${width}px;
  z-index: 0;
`;
const Content = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
`;
const GenreChip = styled.span`
  background-color: ${palette.brand.green700};
  border-radius: 0.5rem;
  color: ${palette.primary.white};
  font-size: 0.85rem;
  display: inline-block;
  height: 1rem;
  line-height: 1rem;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0 0.5rem;
`;
const GenreChipContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const RatingContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0 0 0.5rem;
`;
const RatingIcon = styled(Icon)`
  color: ${palette.primary.white};
  font-size: 1rem;
`;
const RatingText = styled.p`
  color: ${palette.primary.white};
  font-size: 1rem;
  margin: 0 0.5rem 0 0;
`;
const Title = styled.h4`
  color: ${palette.primary.white};
  margin: 0 0 0.5rem;
`;

const MovieTile: React.SFC<Props> = (props: Props) => (
    <Paper>
        <Container>
            <Background  imageUrl={props.movie.poster_path} />
            <Content>
                <Title>
                    {props.movie.title}
                </Title>
                <GenreChipContainer>
                    {
                        props.genres.results.filter((genre: Genre) => props.movie.genre_ids.indexOf(genre.id) > -1)
                            .map((genre: Genre, index: number) => (
                                <GenreChip key={index}>
                                    {genre.name}
                                </GenreChip>
                            ))
                    }
                </GenreChipContainer>
                <RatingContainer>
                    <RatingText>
                        {props.movie.vote_average}
                    </RatingText>
                    <RatingIcon>grade</RatingIcon>
                </RatingContainer>
            </Content>
        </Container>
    </Paper>
);

const mapStateToProps = (state: ApplicationState) => {
    return {
        genres: state.genres,
    }
};

export default connect(mapStateToProps)(MovieTile);
export {
    MovieTile,
    Props
};
