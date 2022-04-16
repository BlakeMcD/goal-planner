import './App.css';
import TimeBlock from './components/TimeBlock';
import { useDispatch } from 'react-redux';
import { addYear } from './actions/actionCreator';
import { v4 as uuidv4 } from 'uuid';

function App() {

  //DISPATCH
  const dispatch = useDispatch();

  //FUNCTIONS
  const addTimeBlock = () => {
    dispatch(addYear({
      uuid: uuidv4(),
      year: "Dispatch Title",
    }))
  }

  return (
    <div className="App">
      <div className="SidebarAndTimeContainer">
        <div className="SidebarContainer">
        </div>
        <div className="TimeContainer">
          {/* {displayTimeBlocks()} */}
          <button onClick={() => addTimeBlock()}>Add TimeBlock</button>
          <TimeBlock/>
        </div>
      </div>
    </div>
  );
}

export default App;
