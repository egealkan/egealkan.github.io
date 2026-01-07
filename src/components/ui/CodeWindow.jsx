import { useState } from 'react';
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";
import { createPortal } from 'react-dom';
import Toast from './Toast'; 

const CodeWindow = ({ files }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [toast, setToast] = useState(null); // Local toast state

  if (!files || files.length === 0) return null;

  const activeFile = files[activeTab];

  // --- HANDLE COPY ---
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeFile.code);
      setToast({ msg: 'Code copied to clipboard!', type: 'success' });
    } catch (err) {
      setToast({ msg: 'Failed to copy', type: 'error' });
    }
  };

  // --- SYNTAX HIGHLIGHTER ---
  const highlightCode = (code, language) => {
    if (language === 'dax') {
      const blueKeywords = /^(CALCULATE|FILTER|ALL|VALUES|RELATED|COUNTROWS|SUM|AVERAGE|EARLIER|DISTINCT|NOT ISBLANK|LOOKUPVALUE|LEFT|MAXX|ASC|MIN)$/i;
      const purpleKeywords = /^(VAR|RETURN|IF|TRUE|FALSE|BLANK|VALUE)$/i;
      const stringLiteralPattern = /^"[^"]*"$/;
      const singleQuotePattern = /^'[^']*'$/;
      const bracketPattern = /^\[[^\]]*\]$/;

      const parts = code.split(/(\b(?:CALCULATE|FILTER|ALL|VALUES|RELATED|COUNTROWS|LEFT|MAXX|ASC|MIN|SUM|AVERAGE|EARLIER|DISTINCT|NOT ISBLANK|LOOKUPVALUE|VAR|RETURN|IF|TRUE|FALSE|BLANK|VALUE)\b|"[^"]*"|'[^']*'|\[[^\]]*\])/g);

      return parts.map((part, index) => {
        if (blueKeywords.test(part)) return <span key={index} style={{ color: '#569cd6' }}>{part}</span>;
        if (purpleKeywords.test(part)) return <span key={index} style={{ color: '#c586c0' }}>{part}</span>;
        if (stringLiteralPattern.test(part)) return <span key={index} style={{ color: '#ce9178' }}>{part}</span>;
        if (singleQuotePattern.test(part)) return <span key={index} style={{ color: '#29C75F' }}>{part}</span>;
        if (bracketPattern.test(part)) return <span key={index} style={{ color: '#ffd700' }}>{part}</span>;
        return <span key={index} style={{ color: '#d4d4d4' }}>{part}</span>;
      });
    }
    return code;
  };

  return (
    <div className="code-window-container">
      <style>{`
        .code-window-container {
          background: #1e1e1e;
          border-radius: 8px;
          overflow: hidden;
          margin: 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          font-family: 'Consolas', 'Monaco', monospace;
          text-align: left;
          border: 1px solid #333;
          height: 400px;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          position: relative; /* For Toast positioning context */
        }
        .window-header {
          background: #252526;
          display: flex;
          align-items: center;
          padding-left: 1rem;
          flex-shrink: 0;
          border-bottom: 1px solid #333;
          padding-right: 1rem; /* Space for copy button */
        }
        .traffic-lights {
          display: flex;
          gap: 8px;
          margin-right: 1rem;
        }
        .traffic-light {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .tabs-row {
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
          flex: 1; /* Push copy button to right */
        }
        .tabs-row::-webkit-scrollbar { display: none; }
        .tab {
          padding: 10px 15px;
          color: #969696;
          background: transparent;
          cursor: pointer;
          font-size: 0.9rem;
          border-right: 1px solid #333;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }
        .tab.active {
          background: #1e1e1e;
          color: #ffffff;
          border-top: 2px solid #64ffda;
        }
        .copy-btn {
          background: transparent;
          border: none;
          color: #888;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
          font-size: 0.85rem;
          padding: 6px 10px;
          border-radius: 4px;
          transition: all 0.2s;
        }
        .copy-btn:hover {
          background: #333;
          color: #fff;
        }
        .code-area {
          padding: 20px;
          color: #d4d4d4;
          background: #1e1e1e;
          line-height: 1.5;
          flex: 1;
          overflow: auto;
          min-width: 0;
          width: 100%;
        }
        .code-area pre { margin: 0; font-size: 14px; }
      `}</style>

      <div className="window-header">
        <div className="traffic-lights">
          <span className="traffic-light" style={{ background: '#ff5f56' }}></span>
          <span className="traffic-light" style={{ background: '#ffbd2e' }}></span>
          <span className="traffic-light" style={{ background: '#27c93f' }}></span>
        </div>

        <div className="tabs-row">
          {files.map((file, index) => (
            <div 
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span>{file.language === 'dax' ? '📊' : '📄'}</span>
              {file.fileName}
            </div>
          ))}
        </div>

        {/* Copy Button */}
        <button className="copy-btn" onClick={handleCopy} aria-label="Copy code">
          {toast && toast.type === 'success' ? <BsClipboardCheck style={{color: '#64ffda'}} /> : <BsClipboard />}
          {toast && toast.type === 'success' ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="code-area">
        <pre>
          <code>
            {highlightCode(activeFile.code, activeFile.language)}
          </code>
        </pre>
      </div>

      {/* Render Toast if active */}
      {toast && createPortal(
        <Toast 
          message={toast.msg} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />,
        document.body
      )}
    </div>
  );
};

export default CodeWindow;