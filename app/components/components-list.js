import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';

import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Flex from '@common-components/flex';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { SELECT_MODULE, SELECT_COMPONENT } from '@redux/actions';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    userSelect: 'none'
  },
  componentsListDrawer: {},
  componentsListDrawerPaper: {
    width: 300
  },
  subheader: {
    padding: 0,
    marginBottom: 20,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold'
  }
});

function ComponentsList({ components }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  async function handleComponentClick(componentKey) {
    dispatch({
      type: SELECT_COMPONENT,
      value: componentKey
    });
  }

  function handleBackButtonClick() {
    dispatch({
      type: SELECT_MODULE,
      value: null
    });
  }

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={classes.componentsListDrawer}
        classes={{
          paper: classes.componentsListDrawerPaper
        }}
        anchor="left"
        open={true}
      >
        <List style={{ paddingTop: 0 }}>
          <ListSubheader className={classes.subheader}>
            <Toolbar style={{ padding: 0 }} position="static" variant="dense">
              <IconButton onClick={handleBackButtonClick}>
                <ArrowBackIcon />
              </IconButton>
              <Flex />
              <Typography style={{ marginLeft: -50 }} variant="h5">
                Widgets
              </Typography>
              <Flex />
            </Toolbar>
          </ListSubheader>
          <div>
            {Object.keys(components).map((componentKey) => {
              let Component = components[componentKey];

              return (
                <React.Fragment key={componentKey}>
                  <ListItem
                    button
                    onClick={() => {
                      handleComponentClick(componentKey);
                    }}
                  >
                    <ListItemIcon>
                      <WidgetsOutlinedIcon />
                    </ListItemIcon>
                    <Typography variant="body1">
                      {Component.metadata.name}
                    </Typography>
                  </ListItem>
                </React.Fragment>
              );
            })}
          </div>
        </List>
      </Drawer>
    </div>
  );
}

export default ComponentsList;
