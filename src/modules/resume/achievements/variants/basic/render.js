import React from 'react';

const useStyles = (theme) => ({
  root: {
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  paragraph: {
    margin: 0
  }
});

const Basic = ({ theme, headlineText, achievements }) => {
  const styles = useStyles();
  function renderList() {
    return (
      <ol>
        {achievements.value.map((paragraph, id) => {
          return (
            <div key={id}>
              <br />
              <li style={styles.paragraph}>{paragraph.value}</li>
            </div>
          );
        })}
      </ol>
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
      {renderList()}
    </div>
  );
};

export default Basic;
