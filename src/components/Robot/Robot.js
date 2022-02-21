import {
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRobotThunk } from "../../redux/thunks/robotsThunks";

import styled from "styled-components";

const RobotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 20px;
  background-color: #e0e0e0;
  border-radius: 12px;
`;

const Robot = ({ className, robot }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteRobot = () => dispatch(deleteRobotThunk(robot.id));

  const goToRobotPage = (id) => {
    navigate(`/robot/${id}`);
  };

  const goToEditPage = (id) => {
    navigate(`/robot/edit/${id}`);
  };

  return (
    <RobotWrapper>
      <h2>{robot.name}</h2>
      <img
        className={className}
        src={robot.imageUrl}
        alt={robot.name}
        width="300"
      />
      <p>Speed: {robot.speed}</p>
      <p>Resistance: {robot.resistance}</p>
      <div className="robot-card__buttons-wrapper">
        <FontAwesomeIcon
          className="robot-icons"
          icon={faEye}
          onClick={() => goToRobotPage(robot.id)}
          size="2x"
        />
        <FontAwesomeIcon
          className="robot-icons"
          icon={faPenToSquare}
          onClick={() => goToEditPage(robot.id)}
          size="2x"
        />
        <FontAwesomeIcon
          className="robot-icons"
          icon={faTrashCan}
          onClick={deleteRobot}
          size="2x"
        />
      </div>
    </RobotWrapper>
  );
};

export default Robot;
