import React from 'react';

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
  }
});

const Basic = ({ theme, headlineText, projects }) => {
  const styles = useStyles();

  function renderProject(projectDetails) {
    return (
      <div>
        <h2 style={styles.projectItem}>{projectDetails.name.value}</h2>
        <h4 style={styles.projectItem}>
          {projectDetails.company.value} | {projectDetails.designation.value}
        </h4>
        {projectDetails.url.value && (
          <span>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: theme.value.contrast }}
              href={projectDetails.url.value}
            >
              <div style={styles.projectItem}>See project</div>
            </a>
            <br />
          </span>
        )}
        <br />
        <p style={styles.projectItem}>{projectDetails.description.value}</p>
      </div>
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
      {projects.value.map((projectDetails, id) => {
        return (
          <div key={id}>
            <br />
            {renderProject(projectDetails.value)}
          </div>
        );
      })}
    </div>
  );
};

export default Basic;
