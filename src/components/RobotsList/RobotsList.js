import Robot from "../Robot/Robot";

const RobotsList = ({ robots }) => (
  <ul className="robots-list">
    {robots.map((robot) => (
      <li key={robot.id}>
        <Robot robot={robot} />
      </li>
    ))}
  </ul>
);

export default RobotsList;
