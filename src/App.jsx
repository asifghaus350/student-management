import './App.css'

function App() {

  return (
    <>
      <div className="login-container">
        <h2>Student Login</h2>
        <form id="loginForm">
          <input type="text" id="studentId" placeholder="Student ID" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div id="result" style={{
          marginTop: '20px', display: 'none'
        }}>
          <h3>Result:</h3>
          <p id="resultText"></p>
          <a id="downloadLink" href="#" download="result.txt">Download Result</a>
        </div>
      </div>
    </>
  )
}

export default App
