
import React, { useContext, useEffect,useRef } from 'react';

import { setWebsocketImcomingMessage } from './actions';
import { Store } from './Store';

function WebsocketClient(props) {
  const { dispatch } = useContext(Store);
  const ws = useRef(null);
  //var number = 1;
  useEffect(() => {
    // 컴포넌트가 마운트 되고 실행됨
    //ws.current = new WebSocket('wss://echo.websocket.org');
    ws.current = new WebSocket('ws://localhost:21056');
    ws.current.onopen = () => {
        console.log("ws opened");
        // setInterval( _ =>{
        //   var send_data =  `order ${number} Hamburger`;//String(send_count++)//Math.random();
        //   number +=1;
        //   console.log(`message sent:${send_data}`);
        //   ws.current.send(send_data )
        // }, 5000 )
    }
    ws.current.onclose = () => console.log("ws closed");
  }, []);    //<--- 두번째 인자로 빈 배열 넣어주기 - 아니면 한번만 실행 안됌

  useEffect(() => {
    if (!ws.current) return;
    ws.current.onmessage = e => {
      console.log(`e.data:${e.data}`);
      setWebsocketImcomingMessage(dispatch, e.data);
      //const message = JSON.parse(e.data);
    };
  });//https://velog.io/@solmii/React%EC%9D%98-%ED%95%A8%EC%88%98%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-feat.Hooks

 
  // for testing purposes: sending to the echo service which will send it back back
  return (
    <div></div>
  )
};

export default WebsocketClient;