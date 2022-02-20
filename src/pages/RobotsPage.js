import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotsThunk } from "../redux/thunks/robotsThunks";
import RobotsList from "../components/RobotsList/RobotsList";

const RobotsPage = () => {
  const robots = useSelector((state) => state.robots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return (
    <>
      <main className="main">
        <RobotsList robots={robots} />
      </main>
    </>
  );
};
export default RobotsPage;
