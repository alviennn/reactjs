import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://i.pinimg.com/564x/98/26/cd/9826cd7a4380f4c26dbef6fe4c01b648.jpg"
          className="App-logo"
          alt="Billie Eilish"
        />
        <h1>Welcome to the Billie Eilish Fan Page</h1>
        <p>
          Stay updated with the latest news and releases.
        </p>
        <div className="App-buttons">
          <a
            className="App-link"
            href="https://www.billieeilish.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website
          </a>
          <a
            className="App-link"
            href="https://www.instagram.com/billieeilish/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
