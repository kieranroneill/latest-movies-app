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
    removeGenreId
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
}

const FilterExpansionPanel = styled(ExpansionPanel)`
  margin: 0 0 1rem;
`;

class FilterPanel extends React.PureComponent<Props> {
    onChange: (id: number) =>
        (event: React.ChangeEvent<HTMLInputElement>) =>
            void = (id: number) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            return this.props.addGenreId(id);
        }

        return this.props.removeGenreId(id);
    };

    render(): JSX.Element {
        const {
            filters,
            genres
        } = this.props;

        return (
            <FilterExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Filter by...</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Genre</FormLabel>
                        <FormGroup row>
                            {
                                genres.results.map((item: Genre, index: number) => (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={filters.genreIds.indexOf(item.id) > -1}
                                                key={index}
                                                onChange={this.onChange(item.id)}
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
                </ExpansionPanelDetails>
            </FilterExpansionPanel>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addGenreId: bindActionCreators(addGenreId, dispatch),
    removeGenreId: bindActionCreators(removeGenreId, dispatch),
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
