import React, { Component } from 'react';
import { connect } from 'react-redux';
import Start from './start'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Whack-a-Dan!
          <p className="score">
            Score: {this.props.score}
          </p>
        </h1>
        <Start />
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps)(Header);
