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
  paperAboutMeetup:{
    maxWidth: window.innerWidth - 75,
    margin: 'auto',
    padding: '19px 9px 19px 15px',
    minHeight: '200px',
    marginTop: '11px',
    boxShadow: 'none'
 }
});

class AboutMeetup extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            <Grid className={classes.mainTitle}>
                <Typography variant="h6" className={classes.fontTitle}>
                    About Meetup
                </Typography>
                <Paper className={classes.paperAboutMeetup}>
                    Paper
                </Paper>
            </Grid>
        );
    }
}

AboutMeetup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutMeetup);