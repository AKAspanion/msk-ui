import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Flex from '@common-components/flex';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';

import { SELECT_VARIANT, DESELECT_COMPONENT } from '@redux/actions';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    userSelect: 'none'
  },
  componentVariantsDrawer: {},
  componentVariantsDrawerPaper: {
    width: 300
  },
  toolbarTitle: {
    marginLeft: -50
  },
  variantMarkUpDiv: {
    padding: 10
  },
  subheader: {
    padding: 0,
    marginBottom: 20,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold'
  }
});

function VariantsList({ selectedComponent }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { selectedVariant } = useSelector((state) => {
    return {
      selectedVariant: state.selectedVariant
    };
  });

  function handleVariantClick(variantKey) {
    dispatch({
      type: SELECT_VARIANT,
      value: variantKey
    });
  }

  function handleBackButtonClick() {
    dispatch({
      type: DESELECT_COMPONENT
    });
  }

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={classes.componentVariantsDrawer}
        classes={{
          paper: classes.componentVariantsDrawerPaper
        }}
        anchor="left"
        open={true}
      >
        <List style={{ paddingTop: 0 }}>
          <ListSubheader className={classes.subheader}>
            <Toolbar style={{ padding: 0 }} variant="dense">
              <IconButton onClick={handleBackButtonClick}>
                <ArrowBackIcon />
              </IconButton>
              <Flex />
              <Typography className={classes.toolbarTitle} variant="h5">
                {selectedComponent.metadata.name}
              </Typography>
              <Flex />
            </Toolbar>
          </ListSubheader>
          <div>
            {Object.keys(selectedComponent.variants).map((variantKey) => {
              let Variant = selectedComponent.variants[variantKey];

              return (
                <React.Fragment key={variantKey}>
                  <ListItem
                    button
                    onClick={() => {
                      handleVariantClick(variantKey);
                    }}
                    selected={selectedVariant === variantKey}
                  >
                    <ListItemIcon>
                      <PanoramaOutlinedIcon />
                    </ListItemIcon>
                    <Typography
                      variant="body2"
                      color={
                        selectedVariant === variantKey ? 'primary' : 'inherit'
                      }
                    >
                      {variantKey}
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

export default VariantsList;
