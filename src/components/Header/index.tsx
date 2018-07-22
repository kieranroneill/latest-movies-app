import * as React from 'react';
import { connect } from 'react-redux';

// Components.
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// States.
import { ApplicationState } from '../../store';

// Types.
import { LayoutState } from '../../store/layout/types';

interface Props {
    layout: LayoutState;
}

const Header: React.SFC<Props> = (props: Props) => (
    <AppBar position="static">
        <Toolbar>
            <Typography
                color="inherit"
                variant="title">
                {props.layout.page.title}
            </Typography>
        </Toolbar>
    </AppBar>
);

const mapStateToProps = (state: ApplicationState) => {
    return {
        layout: state.layout,
    }
};

export default connect(mapStateToProps)(Header);
export {
    Header,
    Props
};
