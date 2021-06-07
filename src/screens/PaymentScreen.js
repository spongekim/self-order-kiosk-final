//import React from 'react';
import React, { useContext, useEffect } from 'react';
import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
export default function CompleteOrderScreen(props) {
  const styles = useStyles();
  const { state } = useContext(Store);
  const websocket_message = state.websocket_incoming_message;
  useEffect(() => {
    console.log(`PaymentScreen- websocket_message :${websocket_message}`);
    if( websocket_message == 'complete'){
      console.log(`PaymentScreen -go to complete screen`);
      props.history.push('/complete')
    }
  }, [websocket_message]);

  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Box>
          <Logo large></Logo>
          <Typography
            gutterBottom
            className={styles.title}
            variant="h3"
            component="h3"
          >
            Please follow the instruction on the PIN pad
          </Typography>
          <CircularProgress />
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => props.history.push('/complete')}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          Complete Order
        </Button>
      </Box>
    </Box>
  );
}
