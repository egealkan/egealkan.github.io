// import React from 'react';

// const CodeWindow = ({ title, language, code }) => {
//   return (
//     <div style={{
//       background: '#1e1e1e', // VS Code Dark Theme BG
//       borderRadius: '8px',
//       overflow: 'hidden',
//       marginBottom: '2rem',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
//       fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
//       textAlign: 'left' // Ensure code is left-aligned
//     }}>
//       {/* Window Header */}
//       <div style={{
//         background: '#252526',
//         padding: '10px 15px',
//         display: 'flex',
//         alignItems: 'center',
//         borderBottom: '1px solid #333'
//       }}>
//         {/* Mac-style traffic lights */}
//         <div style={{ display: 'flex', gap: '8px', marginRight: '15px' }}>
//           <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
//           <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
//           <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
//         </div>
//         <span style={{ color: '#ccc', fontSize: '0.9rem' }}>{title}</span>
//       </div>

//       {/* Code Content */}
//       <div style={{ padding: '20px', overflowX: 'auto' }}>
//         <pre style={{ margin: 0, color: '#d4d4d4' }}>
//           <code className={`language-${language}`}>
//             {code}
//           </code>
//         </pre>
//       </div>
//     </div>
//   );
// };

// export default CodeWindow;






import { useState } from 'react';
import { GoCodeReview } from "react-icons/go";

const CodeWindow = ({ files }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Safety check
  if (!files || files.length === 0) return null;

  const activeFile = files[activeTab];

  return (
    <div className="code-window-container">
      {/* Styles defined locally for this component */}
      <style>{`
        .code-window-container {
          background: #1e1e1e;
          border-radius: 8px;
          overflow: hidden;
          margin: 2rem 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          font-family: 'Consolas', 'Monaco', monospace;
          text-align: left;
          border: 1px solid #333;
        }
        .window-header {
          background: #252526;
          display: flex;
          align-items: center;
          padding-left: 1rem;
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
        }
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
          transition: all 0.2s;
        }
        .tab:hover {
          background: #2d2d2d;
          color: #e0e0e0;
        }
        .tab.active {
          background: #1e1e1e;
          color: #ffffff;
          border-top: 2px solid var(--color-primary, #64ffda);
        }
        .file-icon {
          font-size: 1rem;
        }
        .code-area {
          padding: 20px;
          overflow-x: auto;
          color: #d4d4d4;
          background: #1e1e1e;
        }
        .code-area pre {
          margin: 0;
        }
      `}</style>

      {/* Header with Tabs */}
      <div className="window-header">
        {/* Mac-style Buttons */}
        <div className="traffic-lights">
          <span className="traffic-light" style={{ background: '#ff5f56' }}></span>
          <span className="traffic-light" style={{ background: '#ffbd2e' }}></span>
          <span className="traffic-light" style={{ background: '#27c93f' }}></span>
        </div>

        {/* Tab List */}
        <div className="tabs-row">
          {files.map((file, index) => (
            <div 
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="file-icon">
                {file.language === 'dax' ? '📊' : file.language === 'python' ? '🐍' : '📄'}
              </span>
              {file.fileName}
            </div>
          ))}
        </div>
      </div>

      {/* Code Content */}
      <div className="code-area">
        <pre>
          <code className={`language-${activeFile.language}`}>
            {activeFile.code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeWindow;