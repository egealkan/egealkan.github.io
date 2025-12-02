// import { useState } from 'react';
// import { GoCodeReview } from "react-icons/go";

// const CodeWindow = ({ files }) => {
//   const [activeTab, setActiveTab] = useState(0);

//   // Safety check
//   if (!files || files.length === 0) return null;

//   const activeFile = files[activeTab];

//   return (
//     <div className="code-window-container">
//       {/* Styles defined locally for this component */}
//       <style>{`
//         .code-window-container {
//           background: #1e1e1e;
//           border-radius: 8px;
//           overflow: hidden;
//           margin: 2rem 0;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.5);
//           font-family: 'Consolas', 'Monaco', monospace;
//           text-align: left;
//           border: 1px solid #333;
//         }
//         .window-header {
//           background: #252526;
//           display: flex;
//           align-items: center;
//           padding-left: 1rem;
//         }
//         .traffic-lights {
//           display: flex;
//           gap: 8px;
//           margin-right: 1rem;
//         }
//         .traffic-light {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//         }
//         .tabs-row {
//           display: flex;
//           overflow-x: auto;
//         }
//         .tab {
//           padding: 10px 15px;
//           color: #969696;
//           background: transparent;
//           cursor: pointer;
//           font-size: 0.9rem;
//           border-right: 1px solid #333;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           transition: all 0.2s;
//         }
//         .tab:hover {
//           background: #2d2d2d;
//           color: #e0e0e0;
//         }
//         .tab.active {
//           background: #1e1e1e;
//           color: #ffffff;
//           border-top: 2px solid var(--color-primary, #64ffda);
//         }
//         .file-icon {
//           font-size: 1rem;
//         }
//         .code-area {
//           padding: 20px;
//           overflow-x: auto;
//           color: #d4d4d4;
//           background: #1e1e1e;
//         }
//         .code-area pre {
//           margin: 0;
//         }
//       `}</style>

//       {/* Header with Tabs */}
//       <div className="window-header">
//         {/* Mac-style Buttons */}
//         <div className="traffic-lights">
//           <span className="traffic-light" style={{ background: '#ff5f56' }}></span>
//           <span className="traffic-light" style={{ background: '#ffbd2e' }}></span>
//           <span className="traffic-light" style={{ background: '#27c93f' }}></span>
//         </div>

//         {/* Tab List */}
//         <div className="tabs-row">
//           {files.map((file, index) => (
//             <div 
//               key={index}
//               className={`tab ${activeTab === index ? 'active' : ''}`}
//               onClick={() => setActiveTab(index)}
//             >
//               <span className="file-icon">
//                 {file.language === 'dax' ? '📊' : file.language === 'python' ? '🐍' : '📄'}
//               </span>
//               {file.fileName}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Code Content */}
//       <div className="code-area">
//         <pre>
//           <code className={`language-${activeFile.language}`}>
//             {activeFile.code}
//           </code>
//         </pre>
//       </div>
//     </div>
//   );
// };

// export default CodeWindow;






import { useState } from 'react';

const CodeWindow = ({ files }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!files || files.length === 0) return null;

  const activeFile = files[activeTab];

 // --- CUSTOM SYNTAX HIGHLIGHTER ---
 const highlightCode = (code, language) => {
    if (language === 'dax') {
      // 1. Define your keywords
      const blueKeywords = /^(CALCULATE|FILTER|ALL|VALUES|RELATED|COUNTROWS|SUM|AVERAGE|EARLIER|DISTINCT|NOT ISBLANK|LOOKUPVALUE|LEFT|MAXX|ASC|MIN)$/i;
      const purpleKeywords = /^(VAR|RETURN|IF|TRUE|FALSE|BLANK|VALUE)$/i;
      
      // 2. Define patterns for complex tokens
      const stringLiteralPattern = /^"[^"]*"$/;
      const singleQuotePattern = /^'[^']*'$/;
      const bracketPattern = /^\[[^\]]*\]$/;

      // 3. THE FIX: Add Single Quotes and Brackets to the main split Regex
      // We join all keywords, then look for strings, then single quotes, then brackets.
      const parts = code.split(/(\b(?:CALCULATE|FILTER|ALL|VALUES|RELATED|COUNTROWS|LEFT|MAXX|ASC|MIN|SUM|AVERAGE|EARLIER|DISTINCT|NOT ISBLANK|LOOKUPVALUE|VAR|RETURN|IF|TRUE|FALSE|BLANK|VALUE)\b|"[^"]*"|'[^']*'|\[[^\]]*\])/g);

      return parts.map((part, index) => {
        // Check for Blue Keywords (Exact Match)
        if (blueKeywords.test(part)) {
          return <span key={index} style={{ color: '#569cd6' }}>{part}</span>; // VS Code Blue
        }
        // Check for Purple Keywords (Exact Match)
        if (purpleKeywords.test(part)) {
          return <span key={index} style={{ color: '#c586c0' }}>{part}</span>; // VS Code Purple
        }
        // Check for Double Quotes "Text"
        if (stringLiteralPattern.test(part)) {
          return <span key={index} style={{ color: '#ce9178' }}>{part}</span>; // VS Code Orange/Red
        }
        // Check for Single Quotes 'Table'
        if (singleQuotePattern.test(part)) {
          return <span key={index} style={{ color: '#29C75F' }}>{part}</span>; // VS Code Green
        }
        // Check for Brackets [Column]
        if (bracketPattern.test(part)) {
          return <span key={index} style={{ color: '#ffd700' }}>{part}</span>; // VS Code Gold/Yellow
        }

        // Default text (Parentheses, commas, spaces, numbers)
        return <span key={index} style={{ color: '#d4d4d4' }}>{part}</span>;
      });
    }
    
    // Fallback for other languages
    return code;
  };

  return (
    <div className="code-window-container">
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
        .code-area {
          padding: 20px;
          overflow-x: auto;
          color: #d4d4d4;
          background: #1e1e1e;
          line-height: 1.5;
        }
        .code-area pre {
          margin: 0;
        }
      `}</style>

      {/* Header with Tabs */}
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
      </div>

      {/* Content Area with Syntax Highlighting */}
      <div className="code-area">
        <pre>
          <code>
            {highlightCode(activeFile.code, activeFile.language)}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeWindow;