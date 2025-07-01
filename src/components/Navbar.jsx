import React, { useState } from 'react';

const VenkatChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [hasAskedName, setHasAskedName] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];

    if (!username) {
      setUsername(input);
      newMessages.push({
        sender: 'bot',
        text: `Nice to meet you, ${input}! How can I help you today?`,
      });
      setHasAskedName(true);
    } else {
      const reply = getBotResponse(input);
      newMessages.push({ sender: 'bot', text: reply });
    }

    setMessages(newMessages);
    setInput('');
  };

  const getBotResponse = (message) => {
    const lower = message.toLowerCase();
    if (lower.includes('portfolio')) {
      return 'My portfolio includes React projects, REST APIs, UI/UX design, and more. Ask me about any project!';
    }
    return `That's interesting, tell me more!`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-white dark:bg-gray-900 border border-blue-200 dark:border-gray-700 rounded-lg flex flex-col shadow-xl">
          {/* Header */}
          <div className="flex justify-between items-center p-3 bg-blue-600 text-white rounded-t-md">
            <span className="font-semibold">Chat with Venkat 🤖</span>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              ✖
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50 dark:bg-gray-800 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === 'user'
                    ? 'bg-blue-100 dark:bg-blue-800 text-right ml-auto text-black dark:text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {!hasAskedName && messages.length === 0 && (
              <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
                Hi! I'm Venkat 👋 What's your name?
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-blue-100 dark:border-gray-700 flex space-x-2 bg-white dark:bg-gray-900">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-800 text-black dark:text-white"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenkatChatbot;
