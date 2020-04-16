import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import Message from './Message/Message'
import './Messages.css'

const Messages = ({ messages, name }) => (
    // mapping the message to display them
    // never used react-scroll-to-bottom before, will be useful for another instant message project
    <ScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}

    </ScrollToBottom>
);

export default Messages;
