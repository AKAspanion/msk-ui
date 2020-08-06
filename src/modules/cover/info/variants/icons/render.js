import React from 'react';

const useStyles = () => ({
  root: {
    display: 'flex'
  },
  coverDiv: {
    minWidth: '40%'
  },
  detailsWrapper: {
    padding: 20,
    textAlign: 'left',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  img: {
    height: 20,
    width: 20,
    display: 'inline',
    marginRight: 5
  },
  flex: {
    display: 'flex',
    marginRight: 5
  }
});

const Basic = ({ theme, address, phone, email, linkedin, github }) => {
  const styles = useStyles();
  return (
    <div style={styles.root}>
      <div
        style={{
          ...styles.coverDiv,
          backgroundColor: theme.value.color,
          color: theme.value.contrast
        }}
      >
        <div style={styles.detailsWrapper}>
          <div style={styles.flex}>
            <img
              src="https://img.icons8.com/material-rounded/24/000000/address.png"
              style={styles.img}
            />
            <div>{address.value}</div>
          </div>
          <div style={styles.flex}>
            <img
              src="https://img.icons8.com/android/32/000000/phone.png"
              style={styles.img}
            />
            <div>{phone.value}</div>
          </div>
          <div style={styles.flex}>
            <img
              src="https://img.icons8.com/material-sharp/24/000000/important-mail.png"
              style={styles.img}
            />
            <div>{email.value}</div>
          </div>
          <div style={styles.flex}>
            <img
              src="https://img.icons8.com/android/24/000000/linkedin.png"
              style={styles.img}
            />
            <div>{linkedin.value}</div>
          </div>
          <div style={styles.flex}>
            <img
              src="https://img.icons8.com/windows/32/000000/github.png"
              style={styles.img}
            />
            <div>{github.value}</div>
          </div>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
};

export default Basic;
