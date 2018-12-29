import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamNew extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
    // onSubmit automatically runs preventDefault, so not necessary
    // event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamNew);