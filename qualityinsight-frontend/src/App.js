import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          QualityInsight
        </div>
        <div className="subtitle">
          ORES Article Quality Visualization Tool for the English Wikipedia
        </div>
      </header>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
