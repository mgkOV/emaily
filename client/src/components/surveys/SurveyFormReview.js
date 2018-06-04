import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fieldsConfig from './formFields.json';
import { submitSurvey } from '../../actions';

const SurveyFormReview = ({ onCancel, values, submitSurvey, history }) => {
  const fields = fieldsConfig.map(({ label, name }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{values[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {fields}
      <button
        className="yellow darken-3 waves-effect waves-light btn"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="btn waves-effect waves-light right"
        type="submit"
        name="action"
        onClick={() => submitSurvey(values, history)}
      >
        Send Survey
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

function mapStateToProps({ form }) {
  return {
    values: form.surveyForm.values
  };
}

export default connect(mapStateToProps, { submitSurvey })(
  withRouter(SurveyFormReview)
);
