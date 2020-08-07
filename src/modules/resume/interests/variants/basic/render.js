import React from 'react';

const useStyles = () => ({
  root: {
    padding: 20
  },
  headlineText: {
    fontSize: 30,
    margin: 0
  },
  wrapper: {
    display: 'flex',
    padding: 10,
    flexWrap: 'wrap'
  },
  interest: {
    width: 'auto',
    height: 30,
    backgroundColor: '#2980b9',
    color: 'White',
    margin: 10,
    borderRadius: 5
  }
});

const Basic = ({ theme, headlineText, interestList }) => {
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
      <div style={{ ...styles.wrapper }}>
        {interestList.value.map((el, i) => (
          <div key={i} style={{ ...styles.interest, padding: '5px 15px' }}>
            {el.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basic;
