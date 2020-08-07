import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Flex from '@common-components/flex';
import CssBaseline from '@material-ui/core/CssBaseline';

import { SET_FORM_FACTOR } from '@redux/actions';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(94.1%, 94.1%, 94.1%)',
    marginBottom: 50
  },
  layoutAppBar: {
    backgroundColor: 'transparent'
  },
  layoutToolbar: {
    width: 'calc(100% - 300px)',
    marginLeft: 300,
    backgroundColor: 'rgba(255,255,255,.5)',
    backdropFilter: 'saturate(180%) blur(10px)'
  },
  formfactorButtons: {
    borderRadius: 20
  }
});

function LayoutToolbar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { formFactor } = useSelector((state) => {
    return {
      formFactor: state.formFactor
    };
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={0}
        color="inherit"
        position="fixed"
        variant="elevation"
        className={classes.layoutAppBar}
      >
        <Toolbar className={classes.layoutToolbar}>
          <Flex />
          <ButtonGroup
            className={classes.formfactorButtons}
            disableElevation
            variant="contained"
            scolor="primary"
          >
            <Button
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                width: 100
              }}
              color="primary"
              onClick={() => {
                dispatch({
                  type: SET_FORM_FACTOR,
                  value: 'desktop'
                });
              }}
              variant={formFactor === 'desktop' ? 'contained' : 'outlined'}
            >
              Desktop
            </Button>
            <Button
              style={{
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                width: 100
              }}
              color="primary"
              onClick={() => {
                dispatch({
                  type: SET_FORM_FACTOR,
                  value: 'mobile'
                });
              }}
              variant={formFactor === 'mobile' ? 'contained' : 'outlined'}
            >
              Mobile
            </Button>
          </ButtonGroup>
          <Flex />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default LayoutToolbar;
