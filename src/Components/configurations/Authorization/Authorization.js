import React, { Component } from 'react';
import { connect } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import Utils from '../../utils';
import AppContext from '../../components/AppContext';

class Authorization extends Component {
  constructor(props, context) {
    super(props);
    const { routes } = context;
    this.state = {
      accessGranted: true,
      routes
    };
  }

  componentDidMount() {
    const { accessGranted } = this.state;
    if (!accessGranted) {
      this.redirectRoute();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { accessGranted } = this.state;
    return nextState.accessGranted !== accessGranted;
  }

  componentDidUpdate() {
    const { accessGranted } = this.state;
    if (!accessGranted) {
      this.redirectRoute();
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { location, userRole } = props;
    const { pathname } = location;
    const matched = matchRoutes(state.routes, pathname)[0];
    return {
      accessGranted: matched ? Utils.hasPermission(matched.route.auth, userRole) : false
    };
  }

  redirectRoute() {
    const { location, userRole, history } = this.props;
    const { pathname, state } = location;
    const redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';

    if (!userRole || userRole.length === 0) {
      history.push({
        pathname: '/login',
        state: { redirectUrl: pathname }
      });
    } else {
      history.push({
        pathname: redirectUrl
      });
    }
  }

  render() {
    const { accessGranted } = this.state;
    const { children } = this.props;
    return accessGranted ? <>{children}</> : null;
  }
}

function mapStateToProps({ auth }) {
  return {
    userRole: auth.user.role
  };
}

Authorization.contextType = AppContext;

export default withRouter(connect(mapStateToProps)(Authorization));
