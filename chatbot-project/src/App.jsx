import { useState, useEffect} from 'react'
import {Chatbot} from 'supersimpledev'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'


function App() {
  useEffect(() => {
    Chatbot.addResponses({
      'my name': 'shivani',
      'my enemy' : 'karan verma'
      //here you add msg and responses in property value pair 
    });

  }, []);

  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-prompt">Welcome to the chatbot project! Send a message using the textbox below.</p>
      )}
      
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}


export default App
