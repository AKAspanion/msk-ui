import React from 'react';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  item: {
    display: 'flex'
  },
  itemValue: {
    marginLeft: 10
  },
  icons: {
    fill: theme.value.contrast,
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fontSize: '1.5rem'
  }
});

const Iconic = ({ theme, phoneNo, emailId, city, website }) => {
  const styles = useStyles(theme);

  function renderIcon(name, styles) {
    return (
      <svg
        style={styles}
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {name === 'phone' && (
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
        )}
        {name === 'email' && (
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        )}
        {name === 'location' && (
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
        )}
        {name === 'url' && (
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
        )}
      </svg>
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
      <p style={styles.item}>
        {renderIcon('phone', styles.icons)}
        <span style={styles.itemValue}>{phoneNo.value}</span>
      </p>
      <p style={styles.item}>
        {renderIcon('email', styles.icons)}
        <span style={styles.itemValue}>{emailId.value}</span>
      </p>
      <p style={styles.item}>
        {renderIcon('location', styles.icons)}
        <span style={styles.itemValue}>{city.value}</span>
      </p>
      <p style={styles.item}>
        {renderIcon('url', styles.icons)}
        <span style={styles.itemValue}>{website.value}</span>
      </p>
    </div>
  );
};

export default Iconic;
