import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamNew extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const classNameError = 
      `field ${meta.error && meta.touched ?'error' : ''}`;

    return (
      <div className={classNameError}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
    // onSubmit automatically runs preventDefault, so not necessary
    // event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field 
          name="title" 
          label="Enter title: "
          component={this.renderInput}
        />
        <Field 
          name="description"
          label="Enter description: " 
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {}; 

  if (!formValues.title) {
    errors.title = "Please enter title";
  }

  if (!formValues.description) {
    errors.description = "Please enter description.";
  }

  return errors;
}

const reduxFormWrapped = reduxForm({
  form: 'streamNew',
  validate: validate
})(StreamNew);

export default connect(null, { createStream })(reduxFormWrapped);