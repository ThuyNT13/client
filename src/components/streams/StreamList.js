import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId != null && stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content"> 
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      ) 
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <article className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </article>
      )
    })
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <section>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </section>
    )
  }
};

const mapStateToProps = (state) => {
  // return array of object's key-value pairs
  return { 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
};

export default connect(mapStateToProps, { fetchStreams: fetchStreams })(StreamList);