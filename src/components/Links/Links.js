import { Link } from "react-router-dom";

const Links = ({ actionOnClick }) => {
  return (
    <ul>
      <li>
        <Link onClick={actionOnClick} to="/">
          Robots Catalogue
        </Link>
      </li>
      <li>
        <Link onClick={actionOnClick} to="robot/new">
          Create Robot
        </Link>
      </li>
      <li>
        <Link onClick={actionOnClick} to="login">
          Login
        </Link>
      </li>
    </ul>
  );
};
export default Links;
