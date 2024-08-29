import React, { useState } from 'react';
import './Circles.css';

const Circles = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello, welcome to the support group!' },
        { id: 2, text: 'Feel free to share, we are here to help each other.' }
    ]);
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        const sensitiveWords = ['suicide'];
        if (sensitiveWords.some(word => message.toLowerCase().includes(word))) {
            alert("Are you ok? This message violates our guidelines.");
        } else {
            const newMessage = { id: messages.length + 1, text: message };
            setMessages([...messages, newMessage]);
        }
        setMessage('');
    };

    return (
        <div className="circles-page">
            <div className="chat-container">
                <div className="messages-list">
                    {messages.map(msg => (
                        <p key={msg.id} className="message">{msg.text}</p>
                    ))}
                </div>
                <form onSubmit={handleSendMessage} className="message-form">
                    <input
                        type="text"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Type your message here..."
                        className="message-input"
                    />
                    <button type="submit" className="send-button">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Circles;
