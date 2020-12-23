import './App.css'
import Nav from 'react-bootstrap/Nav'
import profilePic from './assets/profile-pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div id="app">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  );
}

function Sidebar() {
  return (
    <div id="sidebar" className="sidebar">
      <div id="about">
        <div className="portrait" style={{backgroundImage: `url(${profilePic})`}}></div>
        <span>Hi, I'm Charlie. Welcome to my website!</span>
        <div className="icons">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faFile} />
        </div>
      </div>
      <Nav id="nav" className="flex-column">
        <Nav.Item>
          <Nav.Link href="#">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

function Main() {
  return (
    <div id="Main"></div>
  );
}

export default App;
