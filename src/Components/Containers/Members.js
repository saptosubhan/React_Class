import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, 
        Grid, 
        Paper, 
        Typography } from '@material-ui/core';

const styles = theme => ({
  fontTitle: {
      fontWeight: 600
  },
  mainTitle:{
    maxWidth: window.innerWidth - 25,
    margin: 'auto',
    marginTop: 27,
  },
 paperMember:{
    maxWidth: window.innerWidth - 75,
    margin: 'auto',
    padding: '9px 9px 11px 13px',
    minHeight: '50px',
    marginTop: '11px',
    background: 'beige'
 },
 seeAll: {
    cursor: 'pointer',
    float: 'right',
    marginRight: 15,
    fontWeight: 600,
    fontSize: 'small'
 }
});

class Members extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            <Grid className={classes.mainTitle}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="h6" className={classes.fontTitle}>
                                Members
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.seeAll}>
                                See all
                            </Typography>
                        </Grid>
                    </Grid>
                    <Paper className={classes.paperMember}>
                        {/* <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={16}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography noWrap>{message}</Typography>
                            </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={16}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography noWrap>{message}</Typography>
                            </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={16}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>{message}</Typography>
                        </Grid>
                        </Grid>
                    </Paper> */}
                    </Paper>
                </Grid>
        );
    }
}

Members.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Members);