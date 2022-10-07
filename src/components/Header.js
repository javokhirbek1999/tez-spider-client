import React from "react";
import { AppBar, Link, makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbarTitle: {
        flexGrow: 1,
    },
}));


function Header() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position='static'
                color='white'
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography 
                        variant='h6'
                        color='inherit'
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        <Link
                            component={NavLink}
                            to='/'
                            underline='none'
                            color='textPrimary'
                        >
                            Tez <Icon icon="mdi:spider" /> Spider
                        </Link>
                    </Typography>
                    </Toolbar>
                    </AppBar>
                    </React.Fragment>
    );
}

export default Header;