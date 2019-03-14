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
  root: {
    flexGrow: 1,
  },
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
  },
  paperAboutMeetup:{
    maxWidth: window.innerWidth - 75,
    margin: 'auto',
    padding: '19px 9px 19px 15px',
    minHeight: '200px',
    marginTop: '11px',
    boxShadow: 'none'
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

class Profile extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
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
                {/* Next Meetup */}
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
                {/* About Meetup */}
                <Grid className={classes.mainTitle}>
                    <Typography variant="h6" className={classes.fontTitle}>
                        About Meetup
                    </Typography>
                    <Paper className={classes.paperAboutMeetup}>
                        Paper
                    </Paper>
                </Grid>
                {/* Members */}
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
                {/* Past Meetups */}
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
            </div>
        );
    }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);