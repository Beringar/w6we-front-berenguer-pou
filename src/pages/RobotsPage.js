import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";
import RobotsList from "./components/RobotsList/RobotsList";

const RobotsPage = () => {
  const robots = useSelector((state) => state.robots);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToRobotPage = (id) => {
    navigate(`/robot/${id}`);
  };

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return (
    <>
      <main className="main">
        <RobotsList
          robots={robots}
          actionOnClick={(id) => {
            goToRobotPage(id);
          }}
        />
      </main>
    </>
  );
};
export default RobotsPage;
