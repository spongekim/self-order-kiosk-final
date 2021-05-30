
import React, { useState, useEffect,useRef } from 'react';
function WebsocketClient(props) {
  const [ message, setMessage] = useState(0);
  const ws = useRef(null);
  useEffect(() => {
    // 컴포넌트가 마운트 되고 실행됨
    ws.current = new WebSocket('wss://echo.websocket.org');
    ws.current.onopen = () => {
        console.log("ws opened");
        setInterval( _ =>{
            ws.current.send(Math.random() )
        }, 2000 )
    }
    ws.current.onclose = () => console.log("ws closed");
  }, []);    //<--- 두번째 인자로 빈 배열 넣어주기 - 아니면 한번만 실행 안됌
  
  useEffect(() => {
    if (!ws.current) return;
    ws.current.onmessage = e => {
      setMessage(e.data)
      //const message = JSON.parse(e.data);
      console.log("e", message);
    };
  }, [message]);

 
  // for testing purposes: sending to the echo service which will send it back back
  return (
    <div></div>
  )
};

export default WebsocketClient;