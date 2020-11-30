import React from 'react';
import Navigation from '../Navigation/Navigation';

const Chat = () => {
  return (
    <div className="fullchatcontainer">
      <iframe
        src="https://chat-react-socket.herokuapp.com/"
        height="735px"
        width="375px"
      ></iframe>
      <Navigation />
    </div>
  );
};

export default Chat;
