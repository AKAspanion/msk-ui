import React from 'react';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  experienceItem: {
    margin: 0
  }
});

const Basic = ({ theme, headlineText, experience }) => {
  const styles = useStyles();

  function renderExperience(experienceDetails) {
    return (
      <div>
        <h2 style={styles.experienceItem}>
          {experienceDetails.designation.value}
        </h2>
        <h4 style={styles.experienceItem}>
          {experienceDetails.company.value} |{' '}
          {experienceDetails.employmentType.value}
        </h4>
        <h5 style={styles.experienceItem}>
          {experienceDetails.location.value}
        </h5>
        <br />
        <p style={styles.experienceItem}>
          {experienceDetails.description.value}
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        ...styles.root,
        backgroundColor: theme.value.color,
        color: theme.value.contrast
      }}
    >
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      {experience.value.map((experienceDetails, id) => {
        return (
          <div key={id}>
            <br />
            {renderExperience(experienceDetails.value)}
          </div>
        );
      })}
    </div>
  );
};

export default Basic;
