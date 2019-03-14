import React from 'react';
import NoImage from './../../assets/no_image.png';
import PropTypes from 'prop-types';
import { withStyles, 
        Grid, 
        Paper, 
        Typography, 
        ButtonBase, 
        Button } from '@material-ui/core';

const styles = theme => ({
  paper: {
    margin: '16px auto',
    padding: theme.spacing.unit * 2,
    background: 'beige',
    maxWidth: window.innerWidth - 55,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  fontTitle: {
      fontWeight: 600
  }
});

class Profile extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <Grid container spacing={16}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} src={NoImage} alt='' />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className={classes.fontTitle}>
                                    Hacktiv 8 Meetup
                                </Typography>
                                <Grid item xs container direction="row">
                                    <Grid item xs={1}>
                                        <Typography gutterBottom>Location</Typography>
                                        <Typography gutterBottom>Organizers</Typography>
                                        <Typography gutterBottom>Members</Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography gutterBottom>Jakarta, Indonesia</Typography>
                                        <Typography gutterBottom>1,999</Typography>
                                        <Typography gutterBottom>Adhy suasana</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" >
                                    Join Us
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);