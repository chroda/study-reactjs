import React, { Component } from 'react';
import { connect } from 'react-redux';

class Field extends Component {
  render() {
    return (
      <div>
        <label>{this.state.value}</label><br />
        <input onChange={this.handleChange} value={this.state.value} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    value: state.field.value
  }
}

export default connect(mapStateToProps)(Field);
