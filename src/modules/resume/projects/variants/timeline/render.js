import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FileIcon from '@material-ui/icons/FileCopy';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  projectItem: {
    margin: 0
  },
  timelineItemAlign: {
    flex: 'inherit'
  },
  timelineContent: {
    padding: '6px 16px'
  },
  timelineContentHeader: {
    margin: 0,
    fontSize: '20px'
  },
  timelineContentCompany: {
    margin: '10px 0',
    fontSize: '14px'
  },
  timelineContentDescription: {
    margin: '10px 0',
    fontSize: '12px'
  }
});

const TimeLine = ({ theme, headlineText, projects }) => {
  const styles = useStyles();
  function renderProject(projectDetails) {
    return (
      <TimelineItem>
        <TimelineOppositeContent style={{ flex: 1 }}>
          <Typography
            style={{ textAlign: 'left' }}
            variant="body2"
            color="textSecondary"
          >
            {projectDetails.duration.value}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator style={{ flex: 0 }}>
          <TimelineDot color="primary">
            <FileIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ flex: 7 }}>
          <Paper elevation={3} style={styles.timelineContent}>
            <Typography style={styles.timelineContentHeader} component="h1">
              {projectDetails.name.value}
            </Typography>
            <Typography style={styles.timelineContentCompany} component="h4">
              {projectDetails.company.value} |{' '}
              {projectDetails.designation.value}
            </Typography>
            <Typography style={styles.timelineContentDescription}>
              {projectDetails.description.value}
            </Typography>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: theme.value.contrast }}
              href={projectDetails.url.value}
            >
              <div>See project</div>
            </a>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    );
  }

  return (
    <Timeline
      style={{
        ...styles.root,
        backgroundColor: theme.value.color,
        color: theme.value.contrast
      }}
    >
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      {projects.value.map((projectDetails, id) => {
        return (
          <div key={id}>
            <br />
            {renderProject(projectDetails.value)}
          </div>
        );
      })}
    </Timeline>
  );
};

export default TimeLine;
