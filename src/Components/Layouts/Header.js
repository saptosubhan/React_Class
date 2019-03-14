import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

const styles = {
    buttonLogin: {
        position: 'absolute',
        color: 'inherit',
        right: 15,
        cursor: 'pointer',
        fontSize: 17
    },
    buttonMenu: {
        // marginLeft: 25
        color: 'inherit',
        cursor: 'pointer',
        fontSize: 17,
        marginLeft: 27
    },
  };

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="headline" color="inherit">
                            QTemu
                        </Typography>
                        <Grid container spacing={24}>
                            <Grid item>
                                <Typography className={classes.buttonMenu}>Create meetup</Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.buttonMenu}>Explore</Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.buttonLogin}>Remove</Typography>
                            </Grid>
                        </Grid>
                        {/* <Button color="inherit" className={classes.buttonMenu}>Create meetup</Button>
                        <Button color="inherit" className={classes.buttonMenu}>Explore</Button>
                        <Button color="inherit" className={classes.buttonLogin}>Login</Button> */}
                    </Toolbar>
                </AppBar>        
            </React.Fragment>
        );
    }
}
  
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Header);