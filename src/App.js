import './App.css';
import TimeBlock from './components/TimeBlock';

function App() {
  return (
    <div className="App">
      <div className="SidebarAndTimeContainer">
        <div className="SidebarContainer">
        </div>
        <div className="TimeContainer">
          {/* {displayTimeBlocks()} */}
          {/* <button onClick={() => addTimeBlock()}>Add TimeBlock</button> */}
          <TimeBlock/>
        </div>
      </div>
    </div>
  );
}

export default App;
