import { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

function App() {
  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    (async () => {
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);

      console.log(result);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, voluptatem fuga? Autem, nobis illo dolor cumque fuga accusantium nisi, optio voluptate tempore asperiores mollitia cum debitis sapiente officia harum vel.
        </p>
        <button type="button" className="btn btn-primary">Primary</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {text}
        <Input id="sampleText" value={text} onChangeHandler={onChangeHandler} text="This is an input" />
      </header>
    </div>
  );
}

export default App;
