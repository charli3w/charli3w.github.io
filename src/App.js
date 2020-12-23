import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="app">
      <Sidebar>
        <div id="about"></div>
        <div id="nav">/* TODO */</div>
      </Sidebar>
      <Main></Main>
    </div>
  );
}

function Sidebar() {
  return (
    <div id="sidebar"></div>
  );
}

function Main() {
  return (
    <div id="Main"></div>
  );
}

export default App;
