import { useState } from 'react';

function Sidebar({
  conversations,
  activeConvId,
  isOpen,
  onNewChat,
  onSelectConversation,
  onDeleteConversation,
  onClose,
}) {
  const [hoveredId, setHoveredId] = useState(null);

  const grouped = conversations.reduce((acc, conv) => {
    if (!acc[conv.date]) acc[conv.date] = [];
    acc[conv.date].push(conv);
    return acc;
  }, {});

  const dateOrder = ['Today', 'Yesterday', 'Previous 7 Days', 'Previous 30 Days'];
  const sortedDates = Object.keys(grouped).sort(
    (a, b) => dateOrder.indexOf(a) - dateOrder.indexOf(b)
  );

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <button className="sidebar-toggle-btn" onClick={onClose} title="Close sidebar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>
          <button className="new-chat-btn" onClick={onNewChat} title="New chat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>

        <div className="sidebar-conversations">
          {sortedDates.map((date) => (
            <div key={date} className="conv-group">
              <div className="conv-group-title">{date}</div>
              {grouped[date].map((conv) => (
                <div
                  key={conv.id}
                  className={`conv-item ${conv.id === activeConvId ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredId(conv.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <button
                    className="conv-item-btn"
                    onClick={() => onSelectConversation(conv.id)}
                  >
                    <span className="conv-title">{conv.title}</span>
                  </button>
                  {hoveredId === conv.id && (
                    <button
                      className="conv-delete-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteConversation(conv.id);
                      }}
                      title="Delete conversation"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-footer-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <span>Settings</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
