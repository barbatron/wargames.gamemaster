import React, {Component} from "react";
import {requestCurrentUser} from "../actions/user";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class AuthPage extends Component {
  componentDidMount() {
    this.props.dispatch(requestCurrentUser());
  }

  render() {
    return (<span>(authenticating...)</span>);
  }
}

export default withRouter(connect()(AuthPage));