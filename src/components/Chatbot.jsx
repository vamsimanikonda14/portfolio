import React, { useState } from 'react';

// 🔐 openAI API Key
const OPENAI_API_KEY = "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";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [hasAskedName, setHasAskedName] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');

    if (!username) {
      setUsername(input);
      setHasAskedName(true);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: `Nice to meet you, ${input}! You can ask me anything about my portfolio, skills, or projects.`,
        },
      ]);
      return;
    }

    setLoading(true);
    const response = await fetchGPTResponse(newMessages);
    setMessages([...newMessages, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  const fetchGPTResponse = async (chatMessages) => {
    const systemMessage = {
      role: 'system',
      content: `
You are Venkat, a friendly AI portfolio assistant for a developer named Venkat.

Answer ONLY questions about:
- Projects
- Skills
- Experience
- Education
- Contact information

If the user asks something outside this (like general knowledge, coding help, jokes), respond:
"I'm here to talk about Venkat's work. For anything else, please contact him:
📧 venkat@example.com
🔗 LinkedIn: https://linkedin.com/in/venkat
💻 GitHub: https://github.com/venkat"

Portfolio Summary:
- Name: Venkat Reddy
- Title: Full Stack Developer
- Skills: React, Node.js, MongoDB, Express, Tailwind, Firebase, Git
- Projects:
  1. ProjectHub – A React app for managing student projects.
  2. DevConnect – A Node.js social platform for developers.
  3. Portfolio Website – Responsive React-based personal portfolio.
- Experience:
  - Frontend Developer at TechNova (2022–2024): Built scalable UI in React.
- Education:
  - B.Tech in CSE, VIT University, 2022
      `,
    };

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [systemMessage, ...chatMessages],
          temperature: 0.7,
        }),
      });

      const data = await res.json();
      return data.choices?.[0]?.message?.content || 'Sorry, I didn’t get that.';
    } catch (err) {
      console.error(err);
      return 'Something went wrong. Please try again later.';
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen ? (
        <button
          onClick={toggleChat}
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition"
        >
          🤖
        </button>
      ) : (
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
            {!hasAskedName && messages.length === 0 && (
              <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
                Hi! I'm Venkat 👋 What's your name?
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[75%] whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-blue-100 dark:bg-blue-800 text-right ml-auto text-black dark:text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white animate-pulse w-1/2">
                Venkat is typing...
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
              disabled={loading}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition disabled:opacity-50"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
