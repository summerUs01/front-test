import { useState } from 'react';

function MessageBubble({ message }) {
  const [copied, setCopied] = useState(false);
  const isAssistant = message.role === 'assistant';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const formatContent = (text) => {
    let html = text;
    // Code blocks
    html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (_m, lang, code) => {
      return `<div class="code-block"><div class="code-header"><span>${lang || 'code'}</span><button class="copy-code-btn">Copy</button></div><pre><code>${escapeHtml(code.trim())}</code></pre></div>`;
    });
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
    // Bold
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Tables
    html = html.replace(
      /(\|.+\|\n)((?:\|[-: ]+\|\n))(\|.+\|\n?)+/g,
      (match) => {
        const rows = match.trim().split('\n');
        const headerCells = rows[0].split('|').filter((c) => c.trim());
        const bodyRows = rows.slice(2);
        let table = '<div class="table-wrapper"><table><thead><tr>';
        headerCells.forEach((cell) => (table += `<th>${cell.trim()}</th>`));
        table += '</tr></thead><tbody>';
        bodyRows.forEach((row) => {
          const cells = row.split('|').filter((c) => c.trim());
          table += '<tr>';
          cells.forEach((cell) => (table += `<td>${cell.trim()}</td>`));
          table += '</tr>';
        });
        table += '</tbody></table></div>';
        return table;
      }
    );
    // Numbered lists
    html = html.replace(/^(\d+)\.\s+(.+)$/gm, '<li class="numbered">$2</li>');
    html = html.replace(
      /(<li class="numbered">.*<\/li>\n?)+/g,
      '<ol>$&</ol>'
    );
    // Bullet lists
    html = html.replace(/^[-•]\s+(.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>[^<].*<\/li>\n?)+/g, (match) => {
      if (!match.includes('class="numbered"')) return `<ul>${match}</ul>`;
      return match;
    });
    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p>');
    html = `<p>${html}</p>`;
    html = html.replace(/<p><\/p>/g, '');
    return html;
  };

  const escapeHtml = (str) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return (
    <div className={`message ${message.role}`}>
      <div className={`message-avatar ${isAssistant ? 'assistant-avatar' : 'user-avatar-msg'}`}>
        {isAssistant ? (
          <svg width="24" height="24" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.532 16.87a9.963 9.963 0 00-.856-8.184 10.078 10.078 0 00-10.855-4.835A9.964 9.964 0 0018.306.5a10.079 10.079 0 00-9.614 6.977 9.967 9.967 0 00-6.664 4.834 10.08 10.08 0 001.24 11.817 9.965 9.965 0 00.856 8.185 10.079 10.079 0 0010.855 4.835 9.965 9.965 0 007.516 3.35 10.078 10.078 0 009.617-6.981 9.967 9.967 0 006.663-4.834 10.079 10.079 0 00-1.243-11.813z" fill="currentColor"/>
          </svg>
        ) : (
          <span>U</span>
        )}
      </div>
      <div className="message-content">
        <div className="message-role">{isAssistant ? 'ChatGPT' : 'You'}</div>
        <div
          className="message-text"
          dangerouslySetInnerHTML={{ __html: formatContent(message.content) }}
        />
        {isAssistant && (
          <div className="message-actions">
            <button className="action-btn" onClick={handleCopy} title={copied ? 'Copied!' : 'Copy'}>
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              )}
            </button>
            <button className="action-btn" title="Like">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 9V5a3 3 0 00-6 0v4H2v11h20V9h-8zM8 9V5a1 1 0 012 0v4" />
              </svg>
            </button>
            <button className="action-btn" title="Dislike">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: 'rotate(180deg)' }}>
                <path d="M14 9V5a3 3 0 00-6 0v4H2v11h20V9h-8zM8 9V5a1 1 0 012 0v4" />
              </svg>
            </button>
            <button className="action-btn" title="Regenerate">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 4v6h6M23 20v-6h-6" />
                <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageBubble;
