import { useState, useRef, useEffect, useCallback } from 'react';
import { mockConversations, mockResponses } from './data/mockData';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import './App.css';

function App() {
  const [conversations, setConversations] = useState(mockConversations);
  const [activeConvId, setActiveConvId] = useState(mockConversations[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const activeConversation = conversations.find((c) => c.id === activeConvId);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [activeConversation?.messages, scrollToBottom]);

  const handleNewChat = () => {
    const newConv = {
      id: `conv-${Date.now()}`,
      title: 'New chat',
      date: 'Today',
      messages: [],
    };
    setConversations((prev) => [newConv, ...prev]);
    setActiveConvId(newConv.id);
  };

  const handleSelectConversation = (id) => {
    setActiveConvId(id);
  };

  const handleDeleteConversation = (id) => {
    setConversations((prev) => {
      const filtered = prev.filter((c) => c.id !== id);
      if (id === activeConvId && filtered.length > 0) {
        setActiveConvId(filtered[0].id);
      }
      return filtered;
    });
  };

  const handleSendMessage = (content) => {
    if (!content.trim() || isTyping) return;

    const userMsg = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: content.trim(),
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id !== activeConvId) return conv;
        const isNew = conv.messages.length === 0;
        return {
          ...conv,
          title: isNew
            ? content.trim().slice(0, 30) + (content.trim().length > 30 ? '...' : '')
            : conv.title,
          messages: [...conv.messages, userMsg],
        };
      })
    );

    setIsTyping(true);

    setTimeout(() => {
      const responseText =
        mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const assistantMsg = {
        id: `msg-${Date.now() + 1}`,
        role: 'assistant',
        content: responseText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === activeConvId
            ? { ...conv, messages: [...conv.messages, assistantMsg] }
            : conv
        )
      );
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="app">
      <Sidebar
        conversations={conversations}
        activeConvId={activeConvId}
        isOpen={sidebarOpen}
        onNewChat={handleNewChat}
        onSelectConversation={handleSelectConversation}
        onDeleteConversation={handleDeleteConversation}
        onClose={toggleSidebar}
      />
      <ChatArea
        conversation={activeConversation}
        isTyping={isTyping}
        sidebarOpen={sidebarOpen}
        messagesEndRef={messagesEndRef}
        onSendMessage={handleSendMessage}
        onToggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App;
