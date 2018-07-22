import * as React from 'react';
import { connect } from 'react-redux';
import {
    bindActionCreators,
    Dispatch
} from 'redux';
import styled from 'styled-components';

// Action creators.
import {
    addGenreId,
    removeGenreId,
    setAverageRating
} from '../../../../store/filters/actionsCreators';

// Components.
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

// States.
import { ApplicationState } from '../../../../store';

// Types.
import {
    FiltersState
} from '../../../../store/filters/types';
import {
    Genre,
    GenresState
} from '../../../../store/genres/types';

interface Props {
    addGenreId: typeof addGenreId;
    filters: FiltersState;
    genres: GenresState;
    removeGenreId: typeof removeGenreId;
    setAverageRating: typeof setAverageRating;
}

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SliderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const Wrapper = styled.div`
  margin: 0 auto 1rem;
  max-width: 800px;
`;

class FilterPanel extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);

        // Bind functions.
        this.onSliderChange = this.onSliderChange.bind(this);
    }

    onGenreChange: (id: number) =>
        (event: React.ChangeEvent<HTMLInputElement>) =>
            void = (id: number) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            return this.props.addGenreId(id);
        }

        return this.props.removeGenreId(id);
    };

    onSliderChange(event: React.ChangeEvent<{}>, value: number): void {
        console.dir(event);
        this.props.setAverageRating(value);
    }

    render(): JSX.Element {
        const {
            filters,
            genres
        } = this.props;

        return (
            <Wrapper>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Filter by...</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ControlContainer>
                            <FormControl
                                component="fieldset"
                                style={{ margin: '0 0 1rem' }}>
                                <FormLabel component="legend">Genre</FormLabel>
                                <FormGroup row>
                                    {
                                        genres.results.map((item: Genre, index: number) => (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={filters.genreIds.indexOf(item.id) > -1}
                                                        key={index}
                                                        onChange={this.onGenreChange(item.id)}
                                                        value={item.id.toString()}
                                                    />
                                                }
                                                key={index}
                                                label={item.name}
                                            />
                                        ))
                                    }
                                </FormGroup>
                            </FormControl>
                            <FormControl
                                component="fieldset"
                                style={{ margin: '0 0 1rem' }}>
                                <FormLabel component="legend">Average rating</FormLabel>
                                <SliderContainer>
                                    <p>0</p>
                                    <Slider
                                        onChange={this.onSliderChange}
                                        max={10}
                                        min={0}
                                        step={0.5}
                                        value={filters.averageRating} />
                                    <p>{filters.averageRating}</p>
                                </SliderContainer>
                            </FormControl>
                        </ControlContainer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addGenreId: bindActionCreators(addGenreId, dispatch),
    removeGenreId: bindActionCreators(removeGenreId, dispatch),
    setAverageRating: bindActionCreators(setAverageRating, dispatch),
});
const mapStateToProps = (state: ApplicationState) => {
    return {
        filters: state.filters,
        genres: state.genres,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
export {
    FilterPanel,
    Props
};
