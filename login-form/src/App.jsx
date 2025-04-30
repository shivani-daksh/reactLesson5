import { useState } from 'react'
import './App.css'

function App() {
  
  const [showPassword, setShowPassword] = useState(false);


  function handleClick() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="app-container">
      <p>Hello, Welcome to my website</p>
      <div className="input-container">
        <div><input placeholder="Email" /></div>
       <div><input type={showPassword ? 'text' : 'password'} placeholder="password" />
          <button  className="hide-btn" onClick={handleClick} >
            {showPassword ? 'Hide' : 'Show'}
            </button>
        </div>
      </div>
      <button className="login-btn">Login</button>
      <button className="login-btn">Sign up</button>
    </div>
  );


}

export default App
