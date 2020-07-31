import React, { useState, useRef, useLayoutEffect } from 'react';

const useStyles = (theme) => ({
  root: {
    margin: 0,
    filter: 'brightness(120%)',
    padding: '20px 20px 30px 20px'
  },
  headline: {
    fontSize: 24,
    color: theme.value.contrast,
    padding: '10px 40px 10px 20px',
    backgroundColor: theme.value.color,
    clipPath: 'polygon(100% 0, calc(100% - 20px) 50%, 100% 100%, 0 100%, 0 0)'
  },
  skillsWrapper: {
    width: 'auto',
    display: 'inline-block'
  },
  skillWrapper: {
    fontSize: 14,
    marginTop: 20,
    position: 'relative',
    boxSizing: 'padding-box',
    color: theme.value.contrast,
    padding: '8px 80px 8px 20px',
    backgroundColor: theme.value.color
  },
  ribbonCommon: {
    top: 0,
    position: 'absolute',
    backgroundColor: theme.value.color
  },
  ribbonPercent: {
    top: 10,
    zIndex: 2,
    minWidth: 80,
    height: '100%',
    textAlign: 'right',
    padding: '8px 20px',
    left: 'calc(100% - 60px)',
    filter: 'brightness(140%)',
    clipPath: 'polygon(100% 0, calc(100% - 10px) 50%, 100% 100%, 0 100%, 0 0)'
  },
  ribbonUnder: {
    right: 0,
    width: 60,
    height: 10,
    filter: 'brightness(60%)',
    clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)'
  },
  ribbonLeft: {
    left: 0,
    width: 10,
    height: '100%',
    backgroundColor: theme.value.contrast,
    clipPath: 'polygon(0 0, 100% 50%, 0 100%)'
  }
});

const Ribbon = ({ theme, headlineText, skills }) => {
  const [width, setWidth] = useState(null);
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const { current } = rootRef;

    const observer = new ResizeObserver(([{ contentRect: { width } }]) =>
      setWidth(width)
    );

    current && observer && observer.observe(current);
    return () => current && observer && observer.disconnect();
  }, [rootRef]);

  const styles = useStyles(theme);

  const normalizedPercentage = (p) => (p <= 0 ? 0 : p >= 100 ? 100 : p);

  const normalizedWidth = (p) =>
    `calc(calc(calc(${width}px - 100%) * ${
      normalizedPercentage(p) / 100
    }) + 60px)`;

  function skillItem({ title, percent }, index) {
    return (
      <div key={index} style={styles.skillWrapper}>
        {title.value}
        <div
          style={{
            ...styles.ribbonCommon,
            ...styles.ribbonPercent,
            width: normalizedWidth(percent.value)
          }}
        >
          {normalizedPercentage(percent.value)}%
        </div>
        <div style={{ ...styles.ribbonCommon, ...styles.ribbonUnder }}></div>
        <div style={{ ...styles.ribbonCommon, ...styles.ribbonLeft }}></div>
      </div>
    );
  }

  return (
    <div style={styles.root} ref={rootRef}>
      <div>
        <div style={styles.headline}>{headlineText.value}</div>
      </div>
      {skills.value.length && (
        <div style={styles.skillsWrapper}>
          {skills.value.map((skill, index) => skillItem(skill.value, index))}
        </div>
      )}
    </div>
  );
};

export default Ribbon;
