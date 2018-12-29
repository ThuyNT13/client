import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    } 
    
    return (
      <div>{this.props.stream.title}</div>  
    ) 

    // return (!this.props.stream) ? <div>Loading...</div> : <div>{this.props.stream.title}</div>;
  }
}

// state has access to state of all streams from Redux store
// ownProps has access to component props object
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchStream: fetchStream })(StreamEdit);