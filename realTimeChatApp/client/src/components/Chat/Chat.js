import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import TextContainer from '../TextContainer/TextContainer'
import './Chat.css';

let socket;

const Chat = ({ location }) => {
    // using hooks, much nicer compared to class based components
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const endPoint = 'localhost:5000';
  
    // this is similar to componentDidMount and componentDidUpdate just unified into a single API.
    useEffect(() => {
      const { name, room } = queryString.parse(location.search);
    
      socket = io(endPoint);
      setRoom(room);
      setName(name)
  
      socket.emit('join', { name, room }, (error) => {
        if(error) {
          alert(error);
        }
      });
      
    }, [endPoint, location.search]);
    // you can pass and array of variables and use effect will only activate if the values inside change. Can accept a function too. Had no idea of this. Useful!
    
    useEffect(() => {
      socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
      });
      
      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
  }, []);
  
    const sendMessage = (event) => {
      event.preventDefault();
  
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
      }
    }
  
    return (
      <div className="outerContainer">
        <div className="container">
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
        <TextContainer users={users}/>
      </div>
    );
  }
export default Chat;
