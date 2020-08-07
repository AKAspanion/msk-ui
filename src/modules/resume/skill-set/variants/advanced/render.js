import {
  FullStar,
  HalfStar,
  EmptyStar
} from '../../../../../../public/Base64Icons';
import React from 'react';

const useStyles = (theme) => ({
  root: {
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  skillContainer: {
    display: 'inline-block'
  },
  skill: {
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    fontSize: 15,
    display: 'inline-block'
  },
  ratingIcon: {
    height: 13
  },
  ratingContainer: {
    paddingLeft: 5
  }
});

const getStars = (rating) => {
  let stars = [];
  const styles = useStyles();
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<img style={styles.ratingIcon} src={FullStar} />);
  }
  rating = rating - Math.floor(rating);
  if (rating) stars.push(<img style={styles.ratingIcon} src={HalfStar} />);
  while (stars.length < 5) {
    stars.push(<img style={styles.ratingIcon} src={EmptyStar} />);
  }
  return <div style={styles.ratingContainer}>{stars}</div>;
};

const Basic = ({ theme, headlineText, skills }) => {
  const styles = useStyles();
  return (
    <div style={styles.root}>
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      <br />
      <div>
        {skills.value.map((skill) => {
          return (
            <div style={styles.skillContainer}>
              <div
                style={{
                  ...styles.skill,
                  backgroundColor: theme.value.color,
                  color: theme.value.contrast
                }}
              >
                {skill.subname.value}
              </div>
              <br />
              {getStars(skill.rating.value)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basic;
