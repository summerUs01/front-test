import { useState } from 'react';
import MessageBubble from './MessageBubble';

function ChatArea({
  conversation,
  isTyping,
  sidebarOpen,
  messagesEndRef,
  onSendMessage,
  onToggleSidebar,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSendMessage(inputValue);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const isEmpty = !conversation || conversation.messages.length === 0;

  return (
    <main className="chat-area">
      <header className="chat-header">
        <div className="chat-header-left">
          {!sidebarOpen && (
            <>
              <button className="header-toggle-btn" onClick={onToggleSidebar} title="Open sidebar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </button>
              <button className="header-new-chat-btn" onClick={() => window.dispatchEvent(new CustomEvent('newchat'))} title="New chat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </>
          )}
        </div>
        <div className="chat-header-center">
          <span className="model-selector">
            ChatGPT <span className="model-badge">4o</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
        <div className="chat-header-right">
          <div className="user-avatar">
            <span>U</span>
          </div>
        </div>
      </header>

      <div className="messages-container">
        {isEmpty ? (
          <div className="empty-state">
            <div className="empty-logo">
              <svg width="48" height="48" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.532 16.87a9.963 9.963 0 00-.856-8.184 10.078 10.078 0 00-10.855-4.835A9.964 9.964 0 0018.306.5a10.079 10.079 0 00-9.614 6.977 9.967 9.967 0 00-6.664 4.834 10.08 10.08 0 001.24 11.817 9.965 9.965 0 00.856 8.185 10.079 10.079 0 0010.855 4.835 9.965 9.965 0 007.516 3.35 10.078 10.078 0 009.617-6.981 9.967 9.967 0 006.663-4.834 10.079 10.079 0 00-1.243-11.813zM22.498 37.886a7.474 7.474 0 01-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 00.655-1.134V19.054l3.366 1.944a.12.12 0 01.066.092v9.299a7.505 7.505 0 01-7.49 7.497zM6.392 31.006a7.471 7.471 0 01-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 001.308 0l9.724-5.614v3.888a.12.12 0 01-.048.103l-8.051 4.649a7.504 7.504 0 01-10.24-2.744zM4.297 13.62A7.469 7.469 0 018.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 00.654 1.132l9.723 5.614-3.366 1.944a.12.12 0 01-.114.012L7.044 23.86a7.504 7.504 0 01-2.747-10.24zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 01.114-.012l8.048 4.648a7.498 7.498 0 01-1.158 13.528v-9.476a1.293 1.293 0 00-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 00-1.308 0l-9.723 5.614v-3.888a.12.12 0 01.048-.103l8.05-4.645a7.497 7.497 0 0111.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 01-.065-.092v-9.299a7.497 7.497 0 0112.293-5.756 6.94 6.94 0 00-.236.134l-7.965 4.6a1.294 1.294 0 00-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v5l-4.331 2.5-4.331-2.5V18z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="empty-title">How can I help you today?</h2>
            <div className="suggestion-grid">
              {[
                { icon: '💡', text: 'Explain quantum computing in simple terms' },
                { icon: '🎨', text: 'Create a content calendar for a TikTok account' },
                { icon: '📝', text: 'Help me write a professional email' },
                { icon: '🧮', text: 'Solve a complex math problem step by step' },
              ].map((suggestion, i) => (
                <button
                  key={i}
                  className="suggestion-card"
                  onClick={() => onSendMessage(suggestion.text)}
                >
                  <span className="suggestion-icon">{suggestion.icon}</span>
                  <span className="suggestion-text">{suggestion.text}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="messages-list">
            {conversation.messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isTyping && (
              <div className="message assistant">
                <div className="message-avatar assistant-avatar">
                  <svg width="24" height="24" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.532 16.87a9.963 9.963 0 00-.856-8.184 10.078 10.078 0 00-10.855-4.835A9.964 9.964 0 0018.306.5a10.079 10.079 0 00-9.614 6.977 9.967 9.967 0 00-6.664 4.834 10.08 10.08 0 001.24 11.817 9.965 9.965 0 00.856 8.185 10.079 10.079 0 0010.855 4.835 9.965 9.965 0 007.516 3.35 10.078 10.078 0 009.617-6.981 9.967 9.967 0 006.663-4.834 10.079 10.079 0 00-1.243-11.813z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="input-area">
        <form className="input-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <button type="button" className="attach-btn" title="Attach file">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
              </svg>
            </button>
            <textarea
              className="message-input"
              placeholder="Message ChatGPT..."
              value={inputValue}
              rows={1}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 200) + 'px';
              }}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="submit"
              className={`send-btn ${inputValue.trim() ? 'active' : ''}`}
              disabled={!inputValue.trim() || isTyping}
              title="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4l0 16M12 4l-6 6M12 4l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </form>
        <p className="input-disclaimer">ChatGPT can make mistakes. Check important info.</p>
      </div>
    </main>
  );
}

export default ChatArea;
