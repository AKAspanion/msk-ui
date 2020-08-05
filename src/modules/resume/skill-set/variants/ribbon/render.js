import React from 'react';

const useStyles = (theme) => {
  const dark = theme.value.contrast === 'white';
  return {
    root: {
      margin: 0,
      padding: '20px 20px 10px 20px',
      filter: `brightness(${dark ? 100 : 80}%)`
    },
    headline: {
      fontSize: 24,
      color: theme.value.contrast,
      padding: '10px 40px 10px 20px',
      backgroundColor: theme.value.color,
      clipPath: 'polygon(100% 0, calc(100% - 20px) 50%, 100% 100%, 0 100%, 0 0)'
    },
    ribbonUnder: {
      top: 0,
      left: -60,
      width: 60,
      height: 9,
      position: 'absolute',
      filter: 'brightness(60%)',
      backgroundColor: theme.value.color,
      clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)'
    },
    table: {
      fontSize: 14,
      borderSpacing: '0 20px',
      borderCollapse: 'separate '
    },
    percentWrapper: { width: '100%', position: 'relative' },
    titleWrapper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      color: theme.value.contrast,
      padding: '8px 80px 8px 20px',
      backgroundColor: theme.value.color,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 10px 50%)'
    },
    percent: {
      minWidth: 120,
      height: '36px',
      marginLeft: -60,
      marginBottom: -18,
      textAlign: 'right',
      position: 'relative',
      color: theme.value.contrast,
      padding: '8px 20px 8px 60px',
      backgroundColor: theme.value.color,
      filter: `brightness(${dark ? 140 : 120}%)`,
      clipPath: 'polygon(100% 0, calc(100% - 10px) 50%, 100% 100%, 0 100%, 0 0)'
    }
  };
};

const Ribbon = ({ theme, headlineText, skills }) => {
  const styles = useStyles(theme);

  const normalizedPercentage = (p) => (p <= 0 ? 0 : p >= 100 ? 100 : p);

  const normalizedWidth = (p) =>
    `calc(calc(100% * ${normalizedPercentage(p) / 100}) + 60px)`;

  function skillItem({ title, percent }, index) {
    return (
      <tr key={index}>
        <td style={styles.titleWrapper}>{title.value}</td>
        <td style={styles.percentWrapper}>
          <div
            style={{
              ...styles.percent,
              width: normalizedWidth(percent.value)
            }}
          >
            {percent.value}%
          </div>
          <div style={styles.ribbonUnder}></div>
        </td>
      </tr>
    );
  }

  return (
    <div style={styles.root}>
      <div>
        <div style={styles.headline}>{headlineText.value}</div>
      </div>
      {skills.value.length && (
        <table style={styles.table}>
          <tbody>
            {skills.value.map((skill, index) => skillItem(skill.value, index))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Ribbon;
