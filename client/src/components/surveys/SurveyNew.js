import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = {
    showFormReview: false
  };

  renderContent = () =>
    !this.state.showFormReview ? (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    ) : (
      <SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />
    );

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyNew);
