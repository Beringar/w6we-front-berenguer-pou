import RobotForm from "../components/RobotForm/RobotForm";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotThunk } from "../redux/thunks/robotsThunks";
import { useParams } from "react-router-dom";

const EditRobotPage = () => {
  const robot = useSelector((state) => state.robot);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRobotThunk(id));
  }, [dispatch, id]);

  if (Object.keys(robot).length === 0) {
    return null;
  }
  return (
    <>
      <main className="main">
        <h1>Edit Robot page... aquí habrá formulario editar robot</h1>
        <RobotForm data={robot} />
      </main>
    </>
  );
};
export default EditRobotPage;
