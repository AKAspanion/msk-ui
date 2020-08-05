import React from 'react'
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Flex from '@common-components/flex'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, Divider, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: 80
  },
  layoutPaper: {
    userSelect: 'none',
    marginLeft: 300,
    marginBottom: 100,
    transition: 'all .2s linear',
  },
});

function LayoutArea({
  Variant = {}
}) {

  const classes = useStyles();

  const {
    formFactor,
  } = useSelector((state) => {
    return {
      formFactor: state.formFactor,
    };
  });


  const RenderFn = Variant.render;


  return <div className={classes.root}>
    <CssBaseline />
    <Flex />
    <Box>
      <Paper
        style={{
          width: formFactor === 'desktop' ? 700 : 320,
          border: `2px solid gray`,
        }}
        className={classes.layoutPaper}
        elevation={0} >

        {RenderFn && <RenderFn {...Variant.properties} />}
      </Paper>
      <Box
        style={{
          marginLeft: 300,
          width: formFactor === 'desktop' ? 700 : 320,
        }}
      >
        <Typography variant="h5" >Contributors</Typography>
        <Divider />
        <br />
        {Variant.contributors && Variant.contributors.map((contributor) => {
          return <div key={contributor.email}>
            <Card style={{ backgroundColor: 'rgb(92.1%, 92.1%, 92.1%)' }} >
              <CardContent>
                <Avatar style={{
                  width: 60,
                  height: 60,
                  border: '5px solid rgb(19.3%, 27.7%, 59.7%)'
                }} alt={contributor.name[0]} src={`${contributor.url}.png`} />

                <Typography style={{ marginBottom: 0 }} variant="h6" gutterBottom>
                  {contributor.name}
                </Typography>
                <div>{contributor.email && contributor.email}</div>
                <br />
                {contributor.url && <a target="_blank" rel="noreferrer" href={contributor.url} >See profile</a>}

              </CardContent>
            </Card>
            <br />
          </div>
        })}
      </Box>

    </Box>

    <Flex />

  </div >
}

export default LayoutArea;