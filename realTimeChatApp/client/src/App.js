import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

// this project is to help me learn how to use socket.io and set up real time chats for another project, css is copied over rest is typed in and notes written. YT link = https://www.youtube.com/watch?v=ZwFA3YMfkoc&list=PLTB-fZWwqf5sE5BcHnNFirDMgGyzd9vdo&index=8&t=1s
const App = () => (
    <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat' component={Chat} />
    </Router>
);

export default App;



