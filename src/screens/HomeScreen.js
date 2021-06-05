//import React from 'react';
import React, { useContext, useEffect } from 'react';
import { Store } from '../Store';
import { Box, Card, CardActionArea, Typography } from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
export default function HomeScreen(props) {
  const styles = useStyles();
  const { state } = useContext(Store);
  const websocket_message = state.websocket_incoming_message;
  useEffect(() => {
    console.log(`homescreen- websocket_message :${websocket_message}`);
    if( websocket_message == '4'){
      console.log(`homescreen -lets go next page`);
      props.history.push('/choose')
    }
  }, [websocket_message]);

  return (
    <Card>
      <CardActionArea onClick={() => props.history.push('/choose')}>
        <Box className={[styles.root, styles.red]}>
          <Box className={[styles.main, styles.center]}>
            <Typography variant="h6" component="h6">
              Yeonwoo's
            </Typography>
            <Typography variant="h1" component="h1" className={styles.bold}>
              Order <br />
              & pay
              <br />
              here
            </Typography>
            <TouchAppIcon fontSize="large"></TouchAppIcon>
          </Box>
          <Box className={[styles.center, styles.green]}>
            <Logo large />
            <Typography variant="h5" component="h5" className={styles.footer}>
              Touch to start
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
