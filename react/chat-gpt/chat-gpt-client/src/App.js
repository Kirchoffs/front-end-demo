import './normal.css';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  useEffect(() => {
    getEngines();
  }, []);

  const scrollableDivRef = useRef(null);

  const isEngineSelectionTriggerd = false;

  const [input, setInput] = useState('');
  const [chatRecords, setChatRecords] = useState([]);
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState('gpt-3.5-turbo');

  useEffect(() => {
    scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
  }, [chatRecords]);

  async function submitChat(e) {
    e.preventDefault();

    if (input === '') {
      return;
    }

    const newChatRecords = [...chatRecords, { user: 'user', message: `${input}` }]
    setChatRecords(() => newChatRecords);
    setInput('');

    console.log(chatRecords);

    try {
      const response = await fetch('http://localhost:5432/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          message: newChatRecords.map(chatRecord => chatRecord.message).join('\n'),
          model: currentModel
        })
      });

      const jsonResponse = await response.json();
      setChatRecords(prevChatRecords => [...prevChatRecords, { user: 'gpt', message: `${jsonResponse.data}` }]);
    } catch (err) {
      console.log(err);
      setChatRecords(prevChatRecords => [...prevChatRecords, { user: 'system', message: 'Network issue' }]);
    }
  }

  function clearChat() {
    setChatRecords([]);
  }

  function getEngines() {
    if (isEngineSelectionTriggerd) {
      fetch('http://localhost:5432/engine')
        .then(response => response.json())
        .then(data => setModels(data.data));
    } else {
      setModels([{
        id: 'gpt-3.5-turbo'
      }]);;
    }
  }

  return (
    <div className="App">
      <aside className="side-menu">
        <div className="side-menu-button" onClick={clearChat}>
          <span>+</span>
          New Chat
        </div>
        <div onClick={getEngines}>
          <select onChange={(e) => setCurrentModel(e.target.value)}>
            {
              models.map((model, index) => (
                <option key={index} value={model.id}>{model.id}</option>
              ))
            }
          </select>
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log" ref={scrollableDivRef}>
          {
            chatRecords.map((chatRecord, index) => (
              <ChatMessage key={index} chatRecord={chatRecord} />
            ))
          }
        </div>
        <div className="chat-input-holder">
          <form onSubmit={submitChat}>
            <input 
              type="text" 
              rows="1" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              className="chat-input-textarea" 
              placeholder="Type a message..." 
            />
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ chatRecord }) => {
  return (
    <div className={`chat-message ${(chatRecord.user === "gpt" && "chatgpt") || (chatRecord.user === "system" && "system")}`}>
      <div className="chat-message-center">
        <div className={`avatar ${(chatRecord.user === "gpt" && "chatgpt")  || (chatRecord.user === "system" && "system")}`}></div>
        <div className="message">
          {chatRecord.message}
        </div>
      </div>
    </div>
  );
}

export default App;
