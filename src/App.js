import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A Privacy Minded, Security Driven Chat Service, <b>Coming Soon.</b>
        </p>
      </header>
      <div className="App-Footer">
        <footer className="footer">
          <a href="https://trapchat.io/" target="_blank" rel="noreferrer" className="footer" >
            TrapChat.io
          </a>
          <div className="App-Footer">
            <p>
              Made  By <a href="https://wronghanded.com" target="_blank" rel="noreferrer" className="footer">
                Wronghanded Development
            </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
