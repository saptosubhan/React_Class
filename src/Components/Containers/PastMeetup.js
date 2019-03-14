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
 seeAll: {
    cursor: 'pointer',
    float: 'right',
    marginRight: 15,
    fontWeight: 600,
    fontSize: 'small'
 },
 pastMeetup: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    minHeight: 200
 },
 paperPastMeetup: {
    minHeight: 200,
    background: 'beige'
 }
});

class PastMeetup extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            <Grid className={classes.mainTitle}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="h6" className={classes.fontTitle}>
                                Past Meetups
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.seeAll}>
                                See all
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={40} className={classes.pastMeetup}>
                        <Grid item xs={4}>
                            <Paper className={classes.paperPastMeetup}>
                                paperMember
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paperPastMeetup}>
                                paperMember 2
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paperPastMeetup}>
                                paperMember 3
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
        );
    }
}

PastMeetup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PastMeetup);