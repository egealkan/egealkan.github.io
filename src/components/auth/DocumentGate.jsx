import { useState } from 'react';
import { useAccessCode } from '../../hooks/useAccessCode';
import './DocumentGate.css';

const DocumentGate = ({ children, title = "Protected Content" }) => {
    const { isAuthorized, verifyCode } = useAccessCode();
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const handleUnlock = (e) => {
        e.preventDefault();
        const success = verifyCode(input.trim());
        if (!success) {
            setError(true);
            setInput('');
        }
    };

    if (isAuthorized) {
        return <div className="unlocked-content">{children}</div>;
    }

    return (
        <div className="gate-container">
            <div className="gate-card">
                <div className="gate-icon">🔒</div>
                <h3>{title}</h3>
                <p>Please enter the access code to view these documents.</p>
                
                <form onSubmit={handleUnlock} className="gate-form">
                    <input 
                        type="password" 
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            setError(false);
                        }}
                        placeholder="Access Code"
                        className={error ? 'input-error' : ''}
                    />
                    <button type="submit">Unlock</button>
                </form>
                {error && <p className="error-msg">Incorrect access code</p>}
            </div>
        </div>
    );
};

export default DocumentGate;