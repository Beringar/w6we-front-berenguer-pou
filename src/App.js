import "./App.css";
import { Route, Routes } from "react-router-dom";
import RobotsPage from "./pages/RobotsPage";
import RobotPage from "./pages/RobotPage";
import NewRobotPage from "./pages/NewRobotPage";
import EditRobotPage from "./pages/EditRobotPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { setUserAction } from "./redux/actions/actionsCreators";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("userToken");
      const { id, name } = await jwt_decode(token);
      dispatch(setUserAction({ id, name }));
    })();
  }, [dispatch]);

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<RobotsPage />} />
        <Route path="/robot">
          <Route path=":id" element={<RobotPage />} />
          <Route path="new" element={<NewRobotPage />} />
          <Route path="edit/:id" element={<EditRobotPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
