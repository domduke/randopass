import { useEffect, useState } from 'react';
import './App.css';
import generatePassword from './generatePassword.js';
function App() {
  const [characterAmount, setCharacterAmount] = useState(10);
  const [includesUppercase, setIncludesUppercase] = useState(true);
  const [includesNumbers, setIncludesNumbers] = useState(true);
  const [includesSymbols, setIncludesSymbols] = useState(true);
  const [password, setPassword] = useState('');
  useEffect(() => {
    
      setPassword(
        generatePassword(characterAmount, includesUppercase, includesNumbers, includesSymbols)
      );
    
  }, [characterAmount, includesUppercase, includesNumbers, includesSymbols]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>RandoPass</h1>
      </header>
      <section>
        <h3 className="password-display" id="passwordDisplay">
          {password}
        </h3>
        <form id="passwordGeneratorForm" className="form">
          <label htmlFor="characterAmountNumber">Number Of Characters</label>
          <div className="character-amount-container">
            <input
              type="range"
              min="1"
              max="50"
              value={characterAmount}
              id="characterAmountRange"
              onChange={e => setCharacterAmount(e.target.value)}
            />
            <input
              className="number-input"
              type="number"
              min="1"
              max="50"
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

          <button className="btn" onClick={() => navigator.clipboard.writeText(password)}>
            Copy to Clipboard
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
