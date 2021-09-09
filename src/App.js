import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/main/MainComponent';

function App() {
  return (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
  );
}

export default App;
