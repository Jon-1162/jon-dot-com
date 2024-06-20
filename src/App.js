import './App.css';
import Introduction from './functions/introduction/introduction';
import Top from './functions/waves/top/top';
import Bottom from './functions/waves/bottom/bottom';





function App() {
  return (
    <div className="App">
      <div className="horizontal">
        <div className="App-header">
          <Top />
          <Introduction />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

export default App;
