import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RangeSlider from "react-bootstrap-range-slider";
import {
  createRobotThunk,
  updateRobotThunk,
} from "../../redux/thunks/robotsThunks";

const RobotForm = ({ data = null }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const initialFormData = data
    ? {
        name: data.name,
        imageUrl: data.imageUrl,
        speed: data.speed,
        resistance: data.resistance,
      }
    : {
        name: "",
        imageUrl: "",
        speed: 5,
        resistance: 5,
      };
  const [formData, setFormData] = useState(initialFormData);

  const resetValues = (clear = false) => {
    if (data !== null) {
      document.querySelector("#name").value = clear ? "" : formData.name;
      document.querySelector("#imageUrl").value = clear
        ? ""
        : formData.imageUrl;
      document.querySelector("#speedRange").value = clear ? "" : formData.speed;
      document.querySelector("#resistanceRange").value = clear
        ? ""
        : formData.resistance;
    }
  };
  useEffect(() => {
    resetValues();
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      name: formData.name,
      imageUrl: formData.imageUrl,
      speed: formData.speed,
      resistance: formData.resistance,
    };
    if (data !== null) {
      dispatch(updateRobotThunk({ id: data.id, ...updatedData }, user.token));
    } else {
      dispatch(createRobotThunk(updatedData, user.token));
    }
    resetValues(true);
  };

  const isFilled = formData.name !== "" && formData.imageUrl !== "";

  return (
    <>
      <form
        className="form-recipe"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <h2>{data ? `Update Robot` : `Create Robot`}</h2>
        <div className="form-block">
          {data && <p>{`Robot Id: ${data.id}`}</p>}
          <label title="name" htmlFor="name">
            {"Robot name: "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            placeholder="..."
          />
        </div>
        <div className="form-block">
          <label title="imageUrl" htmlFor="imageUrl">
            {"Image URL: "}
          </label>
          <input
            placeholder="robot image..."
            type="url"
            name="imageUrl"
            id="imageUrl"
            onChange={handleChange}
            autoComplete="on"
          />
          <img
            className="form-image"
            src={formData.imageUrl}
            alt={formData.name}
          />
        </div>
        <div className="form-block">
          <h3>Speed:</h3>
          <RangeSlider
            id="speedRange"
            value={formData.speed}
            min={0}
            max={10}
            size="lg"
            variant="danger"
            tooltip="on"
            tooltipPlacement="top"
            onChange={(changeEvent) =>
              setFormData({ ...formData, speed: changeEvent.target.value })
            }
          />
        </div>
        <div className="form-block">
          <h3>Resistance:</h3>
          <RangeSlider
            id="resistanceRange"
            value={formData.resistance}
            min={0}
            max={10}
            size="lg"
            variant="danger"
            tooltip="on"
            tooltipPlacement="top"
            onChange={(changeEvent) =>
              setFormData({ ...formData, resistance: changeEvent.target.value })
            }
          />
        </div>
        <div className="form-block">
          <button type="submit" className="button" disabled={!isFilled}>
            {data === null ? `Create Robot` : `Update Robot`}
          </button>
        </div>
      </form>
    </>
  );
};

export default RobotForm;
