import React from 'react';

const useStyles = (theme) => ({
  root: {
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  skill: {
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    fontSize: 15,
    display: 'inline-block'
  }
});

const Basic = ({ theme, headlineText, skills }) => {
  const styles = useStyles();
  return (
    <div style={styles.root}>
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      <br />
      <div>
        {skills.value.map((skill) => {
          return (
            <div
              key={skill.value}
              style={{
                ...styles.skill,
                backgroundColor: theme.value.color,
                color: theme.value.contrast
              }}
            >
              {skill.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basic;
