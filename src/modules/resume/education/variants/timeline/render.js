import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@material-ui/lab';
import SchoolIcon from '@material-ui/icons/School';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  educationItem: {
    margin: 0
  }
});

const TimeLine = ({ theme, headlineText, education }) => {
  const styles = useStyles();

  function renderEducation(educationDetails) {
    return (
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography style={styles.educationItem}>
            {educationDetails.datesFrom.value} |{' '}
            {educationDetails.datesTo.value}
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <Typography style={styles.educationItem} variant="h4">
            {educationDetails.degree.value}
          </Typography>
          <Typography style={styles.educationItem} variant="body1">
            {educationDetails.university.value}
          </Typography>
          <br />
          <Typography style={styles.educationItem} variant="body2">
            {educationDetails.description.value}
          </Typography>
        </TimelineContent>
      </TimelineItem>
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
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />

      <Timeline>
        {education.value.map((educationDetails, id) => {
          return (
            <div key={id}>
              <br />
              {renderEducation(educationDetails.value)}
              {renderEducation(educationDetails.value)}
              {renderEducation(educationDetails.value)}
            </div>
          );
        })}
      </Timeline>
    </div>
  );
};

export default TimeLine;
