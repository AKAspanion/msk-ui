import React from 'react';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  educationItem: {
    margin: 0
  }
});

const Basic = ({ theme, headlineText, education }) => {
  const styles = useStyles();

  function renderEducation(educationDetails) {
    return (
      <div>
        <h2 style={styles.educationItem}>{educationDetails.degree.value}</h2>
        <h4 style={styles.educationItem}>
          {educationDetails.university.value}
        </h4>
        <h4 style={styles.educationItem}>
          {educationDetails.datesFrom.value} | {educationDetails.datesTo.value}
        </h4>
        <br />
        <p style={styles.educationItem}>{educationDetails.description.value}</p>
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
      {education.value.map((educationDetails) => {
        return (
          <div>
            <br />
            {renderEducation(educationDetails.value)}
          </div>
        );
      })}
    </div>
  );
};

export default Basic;
