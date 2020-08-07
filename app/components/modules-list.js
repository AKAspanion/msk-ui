import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';

import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Flex from '@common-components/flex';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';

import { SELECT_MODULE } from '@redux/actions';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    userSelect: 'none'
  },
  modulesListDrawer: {},
  modulesListDrawerPaper: {
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

function ModulesList({ modules }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { selectedModule } = useSelector((state) => {
    return {
      selectedModule: state.selectedModule
    };
  });

  async function handleModuleClick(Module) {
    dispatch({
      type: SELECT_MODULE,
      value: Module
    });
  }

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={classes.modulesListDrawer}
        classes={{
          paper: classes.modulesListDrawerPaper
        }}
        anchor="left"
        open={true}
      >
        <List style={{ paddingTop: 0 }}>
          <ListSubheader className={classes.subheader}>
            <Toolbar position="static" variant="dense">
              <Flex />
              <Typography variant="h5">Modules</Typography>
              <Flex />
            </Toolbar>
          </ListSubheader>
          <div>
            {Object.keys(modules).map((moduleKey) => {
              let Module = modules[moduleKey];

              return (
                <React.Fragment key={moduleKey}>
                  <ListItem
                    button
                    onClick={() => {
                      handleModuleClick(moduleKey);
                    }}
                  >
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <Typography variant="body1">
                      {Module.metadata.name}
                    </Typography>
                  </ListItem>
                </React.Fragment>
              );
            })}
          </div>
        </List>
        <Flex />

        <Toolbar
          style={{ backgroundColor: 'rgb(92.1%, 92.1%, 92.1%)' }}
          variant="dense"
        >
          <Flex />
          <Typography style={{ color: 'black' }} variant="caption">
            MSK UI
          </Typography>

          <Flex />
        </Toolbar>
      </Drawer>
    </div>
  );
}

export default ModulesList;
