import * as React from 'react';
import styled from 'styled-components';

// Components.
import Paper from '@material-ui/core/Paper';

// Config.
import { imageBaseUrl } from '../../../../config/defaults';

// Styles.
import palette from '../../../../styles/palette'

// Types.
import { Movie } from '../../../../store/movies/types';

interface Props {
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
  flex-direction: row;
  padding: 0.5rem;
  width: 100%;
`;
const Title = styled.h4`
  color: ${palette.primary.white};
`;

const MovieTile: React.SFC<Props> = (props: Props) => (
    <Paper>
        <Container>
            <Background  imageUrl={props.movie.poster_path} />
            <Content>
                <Title>
                    {props.movie.title}
                </Title>
            </Content>
        </Container>
    </Paper>
);

export default MovieTile;
export {
    MovieTile,
    Props
};
