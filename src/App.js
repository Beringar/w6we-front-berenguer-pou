import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";
import RobotsList from "./components/RobotsList/RobotsList";

const App = () => {
  const robots = useSelector((state) => state.robots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is going to be a ROBOTS app</h1>
        <RobotsList robots={robots} />
      </header>
    </div>
  );
};

export default App;
