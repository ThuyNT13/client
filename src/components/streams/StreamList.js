import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <article className="item" key={stream.id}>
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </article>
      )
    })
  }

  render() {
    return (
      <section>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </section>
    )
  }
};

const mapStateToProps = (state) => {
  // return array of object's key-value pairs
  return { streams: Object.values(state.streams) }
};

export default connect(mapStateToProps, { fetchStreams: fetchStreams })(StreamList);