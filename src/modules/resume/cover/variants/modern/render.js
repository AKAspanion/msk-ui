import React from 'react';
const useStyles = () => ({
  root: {
    display: 'flex'
  },
  coverDiv: {
    width: '100%'
  },
  detailsWrapper: {
    padding: 20,
    textAlign: 'left',
    display: 'inline-block'
  },
  avatarWrapper: {
    padding: 20,
    display: 'inline-block'
  },
  avatarImage: {
    width: 200,
    borderRadius: '50%'
  },
  name: {
    margin: 0,
    fontSize: 40,
    fontWeight: 'bold'
  },
  designation: {
    margin: 0
  },
  company: {
    margin: 0
  },
  contactDetails: {
    marginTop: 10
  },
  emailId: {},
  phoneNo: {},
  contactDetailsItemLabel: {
    fontWeight: 'bold'
  }
});

export default ({
  theme,
  name,
  designation,
  company,
  emailId,
  phoneNo,
  imageUrl
}) => {
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
        <div style={styles.avatarWrapper}>
          <img
            style={{
              ...styles.avatarImage,
              border: `5px solid ${theme.value.contrast}`
            }}
            src={imageUrl.value}
          />
        </div>

        <div style={styles.detailsWrapper}>
          <div style={styles.name}>{name.value}</div>
          <h3 style={styles.designation}>{designation.value}</h3>
          <h4 style={styles.company}>{company.value}</h4>

          <div style={styles.contactDetails}>
            {emailId.value && (
              <div>
                <span style={styles.contactDetailsItemLabel}>Email: </span>
                <span style={styles.emailId}>{emailId.value}</span>
              </div>
            )}
            {phoneNo.value && (
              <div>
                <span style={styles.contactDetailsItemLabel}>Ph: </span>
                <span style={styles.phoneNo}>{phoneNo.value}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
