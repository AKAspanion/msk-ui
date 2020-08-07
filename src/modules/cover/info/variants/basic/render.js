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
          <div style={styles.title}>{address.value[0].value}</div>
          <div>{address.value[1].value}</div>
          <div style={styles.title}>{phone.value[0].value}</div>
          <div>{phone.value[1].value}</div>
          <div style={styles.title}>{email.value[0].value}</div>
          <div>{email.value[1].value}</div>
          <div style={styles.title}>{linkedin.value[0].value}</div>
          <div>{linkedin.value[1].value}</div>
          <div style={styles.title}>{github.value[0].value}</div>
          <div>{github.value[1].value}</div>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
};

export default Basic;
