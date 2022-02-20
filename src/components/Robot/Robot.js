import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const RobotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 20px;
`;

const Robot = ({ robot }) => {
  return (
    <RobotWrapper>
      <p>{robot.name}</p>
      <img src={robot.imageUrl} alt={robot.name} width="300" />
      <p>Speed: {robot.speed}</p>
      <p>Resistance: {robot.resistance}</p>
      <FontAwesomeIcon icon={faTrashCan} onClick={() => null} />
    </RobotWrapper>
  );
};

export default Robot;
