import { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

const EditRobotPage = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <main className="main">
        <h1>Edit Robot page... aquí habrá formulario editar robot</h1>
        <RangeSlider
          value={value}
          min={0}
          max={10}
          size="lg"
          variant="danger"
          tooltip="on"
          tooltipPlacement="top"
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
        />
      </main>
    </>
  );
};
export default EditRobotPage;
