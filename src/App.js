import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import zxcvbn from 'zxcvbn';
import generatePassword from './generatePassword.js';
import PasswordStrengthBar from './PasswordStrengthBar.js';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [characterAmount, setCharacterAmount] = useState(10);
  const [includesUppercase, setIncludesUppercase] = useState(true);
  const [includesNumbers, setIncludesNumbers] = useState(true);
  const [includesSymbols, setIncludesSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  useEffect(() => {
    const updatedPassword = generatePassword(characterAmount, includesUppercase, includesNumbers, includesSymbols)
      setPassword(updatedPassword);
      setScore(zxcvbn(updatedPassword).score);
  }, [characterAmount, includesUppercase, includesNumbers, includesSymbols]);

  function copyPasswordToClipboard(e, password) {
    e.preventDefault();
    navigator.clipboard.writeText(password);
    toast("Password copied!");
  }
  return (
    <div className="container">
      <header className="header">
        <h1>RandoPass</h1>
        
        <h2>Generate your secure password</h2>
      </header>
      <section>
        <h3 className="password-display" id="passwordDisplay">
          {password}
        </h3>
          <PasswordStrengthBar score={score} />
        <form id="passwordGeneratorForm" className="form">
          <label htmlFor="characterAmountNumber">Number Of Characters</label>
          <div className="character-amount-container">
            <input
              type="range"
              min="1"
              max="40"
              value={characterAmount}
              id="characterAmountRange"
              onChange={e => setCharacterAmount(e.target.value)}
            />
            <input
              className="number-input"
              type="number"
              min="1"
              max="40"
              value={characterAmount}
              onChange={e => setCharacterAmount(e.target.value)}
              id="characterAmountNumber"
            />
          </div>

          <label htmlFor="includeUppercase">Include Uppercase</label>
          <input
            type="checkbox"
            id="includeUppercase"
            checked={includesUppercase}
            onChange={e => setIncludesUppercase(e.target.checked)}
          />

          <label htmlFor="includeNumbers">Include Numbers</label>
          <input
            type="checkbox"
            id="includeNumbers"
            checked={includesNumbers}
            onChange={e => setIncludesNumbers(e.target.checked)}
          />

          <label htmlFor="includeSymbols">Include Symbols</label>
          <input
            type="checkbox"
            id="includeSymbols"
            checked={includesSymbols}
            onChange={e => setIncludesSymbols(e.target.checked)}
          />

          <button className="btn" onClick={e => copyPasswordToClipboard(e, password)}>
            Copy to Clipboard
          </button>
          <ToastContainer />
        </form>
      </section>
    </div>
  );
}

export default App;
