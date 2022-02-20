import Robot from "../Robot/Robot";
import styled from "styled-components";

const RobotsListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const RobotsList = ({ robots }) => (
  <RobotsListWrapper>
    {robots.map((robot) => (
      <li key={robot.id}>
        <Robot robot={robot} />
      </li>
    ))}
  </RobotsListWrapper>
);

export default RobotsList;
