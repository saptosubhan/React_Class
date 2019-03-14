import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Profile from './Profile';
import NextMeetup from './NextMeetup';
import AboutMeetup from './AboutMeetup';
import Members from './Members';
import PastMeetup from './PastMeetup';


const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });

class Containers extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Profile />

                <NextMeetup />
                
                <AboutMeetup />
                
                <Members />

                <PastMeetup />    
            </div>
        );
    }
}

Containers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Containers);