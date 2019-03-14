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
  paperNextMeetup:{
      maxWidth: window.innerWidth - 75,
      margin: 'auto',
      padding: '19px 9px 11px 15px',
      minHeight: '200px',
      marginTop: '11px',
      background: 'beige'
  }
});

class NextMeetup extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            <Grid className={classes.mainTitle}>
                <Typography variant="h6" className={classes.fontTitle}>
                    Next Meetup
                </Typography>
                <Paper className={classes.paperNextMeetup}>
                    <Typography>
                        Awesome meetup and event
                        <br></br>
                        <br></br>
                        <span style={{color:'#9a9a9a'}}>25 January 2019</span>
                        <br></br>
                        <br></br>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        <br></br>
                        <br></br>
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        <br></br>
                        <br></br>
                        ..................
                        <br></br>
                        <br></br>
                        It has survived !
                        <br></br>
                        <br></br>
                        survived, centuries, electronic, typesetting, remaining essentially unchanged.
                    </Typography>
                </Paper>
            </Grid>
        );
    }
}

NextMeetup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NextMeetup);