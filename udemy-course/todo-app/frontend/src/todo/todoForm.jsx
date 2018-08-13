import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { add, changeDescription, search } from './todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHander = this.keyHander.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHander(e) {
    const { add, search, description } = this.props;
    if (e.key === 'Enter' ) {
      e.shiftKey ? search() : add(description);
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  render () {
    const { add, search, description } = this.props;
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description'
            className='form-control'
            placeholder='add some task'
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHander}
            />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' onClick={() => add(description)} />
          <IconButton style='info' icon='search' onClick={() => search()} />
          <IconButton style='default' icon='close' onClick={this.props.handleClear} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
