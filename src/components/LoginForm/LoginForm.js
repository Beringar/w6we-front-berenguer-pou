import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../redux/thunks/userThunks";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialFormData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const resetValues = () => {
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    setFormData({ ...initialFormData });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUserThunk(formData));
    resetValues();
  };

  const isFilled = formData.username !== "" && formData.password !== "";

  return (
    <>
      <form
        className="form-recipe"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <h2>Login</h2>
        <div className="form-block">
          <label title="username" htmlFor="username">
            {"Username: "}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            placeholder="your username..."
          />
        </div>
        <div className="form-block">
          <label title="password" htmlFor="password">
            {"Password: "}
          </label>
          <input
            placeholder="your password..."
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        <div className="form-block">
          <button type="submit" className="button" disabled={!isFilled}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
