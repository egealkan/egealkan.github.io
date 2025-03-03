import { useState, useEffect, useRef, KeyboardEvent, FormEvent } from 'react';
import styles from './Terminal.module.css';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CommandHistory = {
  command: string;
  output: string;
};

const Terminal = ({ isOpen, onClose }: TerminalProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      
      // Add welcome message
      setHistory([
        { 
          command: '', 
          output: 'Welcome to the interactive terminal. Type "help" for available commands.' 
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom when history changes
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add command to history
    const newHistory = [...history, { command: input, output: '' }];
    setHistory(newHistory);
    
    // Process command
    processCommand(input, newHistory);
    
    // Reset input and history navigation
    setInput('');
    setHistoryIndex(-1);
  };

  const processCommand = (cmd: string, currentHistory: CommandHistory[]) => {
    const command = cmd.trim().toLowerCase();
    let output = '';
    
    // Command processing
    if (command === 'help') {
      output = `
Available commands:
  help - Show this help message
  about - Learn about me
  skills - List my skills
  projects - View my projects
  contact - Get contact information
  clear - Clear terminal
  exit - Close terminal
      `;
    } else if (command === 'about') {
      output = `
I'm a fullstack developer with expertise in React, TypeScript, Python, and AI.
Currently building innovative web applications with a focus on user experience.
      `;
    } else if (command === 'skills') {
      output = `
Skills:
  Frontend: React, TypeScript, Next.js, CSS
  Backend: Python, Node.js, FastAPI, Express
  Data & AI: Machine Learning, Data Visualization, NLP
  DevOps: Docker, CI/CD, Kubernetes, Cloud Services
      `;
    } else if (command === 'projects') {
      output = `
Projects:
  1. AI-Powered Learning Assistant
  2. Interactive Data Visualization Dashboard
  3. Smart City IoT Platform
  4. E-Commerce Microservice Architecture

Type "project <number>" for details.
      `;
    } else if (command.startsWith('project ')) {
      const projectNum = parseInt(command.split(' ')[1]);
      if (projectNum >= 1 && projectNum <= 4) {
        output = `Loading project ${projectNum} details...`;
        // Simulate navigation to project page
        setTimeout(() => {
          onClose();
        }, 500);
      } else {
        output = 'Project not found. Type "projects" to see available projects.';
      }
    } else if (command === 'contact') {
      output = `
Contact Information:
  Email: your.email@example.com
  GitHub: github.com/yourusername
  LinkedIn: linkedin.com/in/yourusername
      `;
    } else if (command === 'clear') {
      setHistory([]);
      return;
    } else if (command === 'exit') {
      onClose();
      return;
    } else {
      output = `Command not found: ${command}. Type "help" for available commands.`;
    }
    
    // Update the last history item with the output
    const updatedHistory = [...currentHistory];
    updatedHistory[updatedHistory.length - 1].output = output.trim();
    setHistory(updatedHistory);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const commandHistory = history.filter(item => item.command).map(item => item.command);
      
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const commandHistory = history.filter(item => item.command).map(item => item.command);
      
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.terminal}>
        <div className={styles.header}>
          <div className={styles.controls}>
            <div className={`${styles.controlDot} ${styles.redDot}`}></div>
            <div className={`${styles.controlDot} ${styles.yellowDot}`}></div>
            <div className={`${styles.controlDot} ${styles.greenDot}`}></div>
          </div>
          <div className={styles.title}>terminal@portfolio</div>
          <button 
            className={styles.closeButton}
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        
        <div className={styles.content} ref={contentRef}>
          <div className={styles.history}>
            {history.map((item, index) => (
              <div key={index} className={styles.historyItem}>
                {item.command && (
                  <div className={styles.command}>
                    <span className={styles.prompt}>visitor@portfolio:~$</span>
                    {item.command}
                  </div>
                )}
                {item.output && (
                  <div className={styles.output}>{item.output}</div>
                )}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <span className={styles.inputPrompt}>visitor@portfolio:~$</span>
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={inputRef}
              className={styles.inputField}
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;