import React from 'react';

const SurveyField = ({ input, type, label, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
