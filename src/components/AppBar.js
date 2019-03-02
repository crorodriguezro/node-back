import React from "react";
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const AppBar = props => (
    <MaterialAppBar {...props}>
        <Toolbar>
            <Typography variant="title" id="react-admin-title" />
        </Toolbar>
    </MaterialAppBar>
);
