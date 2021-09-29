import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App container-fluid">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
