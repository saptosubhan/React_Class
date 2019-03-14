import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  batas: {
    maxWidth: window.innerWidth - 25,
    margin: 'auto',
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
          <br></br>
          <br></br>
          <hr className={classes.batas}></hr>
          <h3><center>Copyright hacktiv8 2018</center></h3>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Footer);