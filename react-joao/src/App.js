// src/App.js
import './App.css';
import './styles.css'
import Navbar from './components/Navbar';
import Button from './components/button';
import Declarative from './components/declarative';
import Components from './components/components';
import Single from './components/single';
import Jsx from './components/jsx'

function App() {
  return (
    <div className="App">
      <div className="primero-div">
        <Navbar />
        <div className='text'>
          <h1>Say hello to</h1>
          <h1>ReactJS</h1>


          <p>You will learn how to use <br></br>
            the most popular frontend library,<br></br>
            and become a super Ninja developer</p>


          <Button />
        </div>
      </div>

      <div className="segundo-div">
        <Declarative />
        <Components />
        <Single />
        <Jsx />

      </div>


    </div>
  );
}
export default App;