import './App.css';
import TimeBlock from './components/TimeBlock';
import { useDispatch, useSelector } from 'react-redux';
import { addYear, addMonth, addWeek, addDay } from './actions/actionCreator';
import { v4 as uuidv4 } from 'uuid';

function App() {

  //DISPATCH
  const dispatch = useDispatch();

  //SELECTOR
  const yearBlocks = useSelector((state) => {
    const years = state.years;
    if (years === undefined) {
        return []
    }
    return years
  })

  //FUNCTIONS
  const addTimeBlock = () => {
    dispatch(addYear({
      uuid: uuidv4(),
      year: "Dispatch Title",
    }))
  }

  const displayTimeBlocks = () => {
    let allItems = [];
    for (let i = 0; i < yearBlocks.length; i++) {
      allItems.push(
        <TimeBlock key={i} yearUuid={yearBlocks[i].uuid}/>
      )
    }
    return allItems;
  }

  //RETURN STATEMENT

  return (
    <div className="App">
      <div className="SidebarAndTimeContainer">
        <div className="SidebarContainer">
        </div>
        <div className="TimeContainer">
          <div className="TimeContainer--year">
            {displayTimeBlocks()}
            <button onClick={() => addTimeBlock("year")}>Add TimeBlock</button>
          </div>
          <div className="TimeContainer--month">
            {displayTimeBlocks()}
            <button onClick={() => addTimeBlock("month")}>Add TimeBlock</button>
          </div>
          <div className="TimeContainer--week">
            {displayTimeBlocks()}
            <button onClick={() => addTimeBlock("week")}>Add TimeBlock</button>
          </div>
          <div className="TimeContainer--day">
            {displayTimeBlocks()}
            <button onClick={() => addTimeBlock("day")}>Add TimeBlock</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
