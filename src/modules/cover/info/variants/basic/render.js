import React from 'react';

const useStyles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  coverDiv: {
    minWidth: '40%'
  },
  detailsWrapper: {
    padding: 20,
    textAlign: 'left'
  },
  title: {
    margin: 0,
    fontWeight: 'bold'
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
          <div style={styles.title}>{address.name}</div>
          <div>{address.value}</div>
          <div style={styles.title}>{phone.name}</div>
          <div>{phone.value}</div>
          <div style={styles.title}>{email.name}</div>
          <div>{email.value}</div>
          <div style={styles.title}>{linkedin.name}</div>
          <div>{linkedin.value}</div>
          <div style={styles.title}>{github.name}</div>
          <div>{github.value}</div>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
};

export default Basic;
