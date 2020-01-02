import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateUser, apiRequest } from './actions/userActions'

import { createSelector } from 'reselect'

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  componentDidMount() {
    this.props.onApiRequest();
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

const productsSelector = createSelector(
  state => state.products,
  products => products
)

const userSelector = createSelector(
  state => state.user,
  user => user
)

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products, user) => ({
    products,
    user
  })
)

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
}

export default connect(mapStateToProps, mapActionsToProps)(App);
