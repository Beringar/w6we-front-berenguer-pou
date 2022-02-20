import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import RobotsPage from "./pages/RobotsPage";
import RobotPage from "./pages/RobotPage";
import NewRobotPage from "./pages/NewRobotPage";
import EditRobotPage from "./pages/EditRobotPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <h1>Beringar Robots Catalogue</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<RobotsPage />} />
        <Route path="/robot">
          <Route path=":id" element={<RobotPage />} />
          <Route path="new" element={<NewRobotPage />} />
          <Route path="edit/:id" element={<EditRobotPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
