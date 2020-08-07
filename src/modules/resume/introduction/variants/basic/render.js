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

const Basic = ({ theme, headlineText, paragraphs }) => {
  const styles = useStyles();
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
      {paragraphs.value.map((paragraph, id) => {
        return (
          <div key={id}>
            <br />
            <p style={styles.paragraph}>{paragraph.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Basic;
