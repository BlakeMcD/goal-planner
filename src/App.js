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
  });

  const monthBlocks = useSelector((state) => {
    const months = state.months;
    if (months === undefined) {
        return []
    }
    return months
  });

  const weekBlocks = useSelector((state) => {
    const weeks = state.weeks;
    if (weeks === undefined) {
        return []
    }
    return weeks
  });

  const dayBlocks = useSelector((state) => {
    const days = state.days;
    if (days === undefined) {
        return []
    }
    return days
  })

  //FUNCTIONS
  const addTimeBlock = (timeBlock) => {

    switch (timeBlock) {
      case "year":
        console.log("year dispatch sent");
        dispatch(addYear({
          uuid: uuidv4(),
          year: "Dispatch Title",
        }));
        break;
      case "month":
        console.log("month dispatch sent");
        dispatch(addMonth({
          uuid: uuidv4(),
          month: "Dispatch Title",
        }));
        break;
      case "week":
        console.log("week dispatch sent");
        dispatch(addWeek({
          uuid: uuidv4(),
          week: "Dispatch Title",
        }));
        break;
      case "day":
        console.log("day dispatch sent");
        dispatch(addDay({
          uuid: uuidv4(),
          day: "Dispatch Title",
        }));
        break;
      default: 
        console.log("no dispatch sent");
        return null;
    }
  }

  const displayTimeBlocks = (timeBlock) => {
    let allItems = [];
    for (let i = 0; i < timeBlock.length; i++) {
      allItems.push(
        <TimeBlock key={i} yearUuid={timeBlock[i].uuid}/>
      )
    }
    return allItems;
  }

  //RETURN STATEMENT

  return (
    <div className="App">
      <div className="SidebarAndTimeContainer">
        <div className="SidebarContainer">
          <h1>Sidebar Container</h1>
        </div>
        <div className="TimeContainer">
          <div className="TimeContainer--year">
            {displayTimeBlocks(yearBlocks)}
            <button onClick={() => addTimeBlock("year")}>Add Year</button>
          </div>
          <div className="TimeContainer--month">
            {displayTimeBlocks(monthBlocks)}
            <button onClick={() => addTimeBlock("month")}>Add Month</button>
          </div>
          <div className="TimeContainer--week">
            {displayTimeBlocks(weekBlocks)}
            <button onClick={() => addTimeBlock("week")}>Add Week</button>
          </div>
          <div className="TimeContainer--day">
            {displayTimeBlocks(dayBlocks)}
            <button onClick={() => addTimeBlock("day")}>Add Day</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
