import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Single from './Single';

export default class Grid extends Component {
  renderList() {
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.items.map((item) => (
      // eslint-disable-next-line react/jsx-filename-extension
      <Single key={item.id} item={item} />
    ));
  }

  render() {
    return (
      <div>
        <div className="row">
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
};
