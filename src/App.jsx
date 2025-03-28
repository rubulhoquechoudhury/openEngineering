import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <a href="#" className="logo">MyWebsite</a>
            <ul className="nav-links">
              <li><a href="#banner">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="banner" className="banner">
        <div className="container">
          <h1>Welcome to MyWebsite</h1>
          <p>Your one-stop solution for all things web development.</p>
          <button>Get Started</button>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            We are a team of passionate developers dedicated to creating
            responsive and user-friendly websites. Our mission is to bring
            your ideas to life with cutting-edge technology.
          </p>
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="container">
          <p>&copy; 2023 MyWebsite. All rights reserved.</p>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
