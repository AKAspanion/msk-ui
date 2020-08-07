import React from 'react';
import { reading } from '../../../../../../public/InterestIcon';

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
    width: 200,
    height: 50,
    color: 'Black',
    marginLeft: 50,
    marginRight: 50,
    fontSize: 17,
    position: 'relative'
  },

  text: {
    top: 15,
    left: 60,
    position: 'absolute',
    display: 'inlineBlock'
  },

  icon: {
    border: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: 20,
    padding: 5,
    width: 40,
    marginRight: 5
  }
});

const Advanced = ({ theme, headlineText, interestList }) => {
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
            <img style={styles.icon} src={reading} />
            <div style={styles.text}>{el.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advanced;
