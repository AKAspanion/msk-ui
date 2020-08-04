import React from 'react';

const useStyles = () => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  }
});

const Basic = ({ theme, phoneNo, emailId, city, website }) => {
  const styles = useStyles();

  return (
    <div
      style={{
        ...styles.root,
        backgroundColor: theme.value.color,
        color: theme.value.contrast
      }}
    >
      <div>
        <strong>Phone</strong> : {phoneNo.value}
      </div>
      <div>
        <strong>Email ID</strong> : {emailId.value}
      </div>
      <div>
        <strong>Current City</strong> : {city.value}
      </div>
      <div>
        <strong>Website</strong> : {website.value}
      </div>
    </div>
  );
};

export default Basic;
