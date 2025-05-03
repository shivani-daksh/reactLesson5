import dayjs from 'dayjs'
import { useState} from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'
import LoadingSpinnerImage from '../assets/loading-spinner.gif'




export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if(isLoading || inputText === ''){
      return;
    }
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time : dayjs().valueOf()
      },
    ];
    // setChatMessages(newChatMessages);
    setChatMessages([
      ...newChatMessages,
      {
        //message: 'Loading...',
        message: <img className="loading-img" src={LoadingSpinnerImage} />,
        sender: 'robot',
        id: crypto.randomUUID(),
        time : dayjs().valueOf()
      }
    ]);
    setIsLoading(true);
    setInputText("");
    

    const response = await Chatbot.getResponseAsync(inputText);
    //Chatbot is an object in the external library with getResponse method
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        time : dayjs().valueOf()
      },
    ]);
    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  function clearMessages() {
    setChatMessages([]);
  }

  
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send message to ChatBot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className = "chat-input"
      />
      <button 
      onClick={sendMessage}
      className ="send-btn"
      >Send</button>
        <button
        onClick={clearMessages}
        className="clear-button"
      >Clear</button>
    </div>
  );
}