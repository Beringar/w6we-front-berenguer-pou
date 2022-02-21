import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Robot from "../components/Robot/Robot";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotThunk } from "../redux/thunks/robotsThunks";

const RobotPage = () => {
  const robot = useSelector((state) => state.robot);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRobotThunk(id));
  }, [dispatch, id]);

  return (
    <>
      <main className="main">
        <Robot className="robot-detail" robot={robot} />
      </main>
    </>
  );
};
export default RobotPage;
