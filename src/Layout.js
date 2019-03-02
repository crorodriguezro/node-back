import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar } from "./components/AppBar";

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    minHeight: '100vh',
    position: 'relative',
  },
  appFrame: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2,
    padding: theme.spacing.unit * 3,
    paddingLeft: '4em',
    paddingRight: '4em',
    marginTop: '2em',
  },
});

class Layout extends Component {
  render() {
    const {
      children,
      classes,
      title,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar title={title} />
          <main>
            <div className={classes.content}>
              {children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  dashboard: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Layout);
