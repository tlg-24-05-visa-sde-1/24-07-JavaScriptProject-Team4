import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputForm() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  let handleSelectChange = (e) => {
    setValue(e.target.value);
  };

  let handleOnclick = () => {
    switch (value) {
      case "1":
        navigate("/gryffindor");
        break;
      case "2":
        navigate("/hufflepuff");
        break;
      case "3":
        navigate("/ravenclaw");
        break;
      case "4":
        navigate("/slytherin");
        break;
      default:
        navigate("/gryffindor");
        break;
    }
  };

  return (
    <>
      <div id="form">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Snacky Snack"
          />
          <label htmlFor="floatingPassword">Favorite Snack</label>
        </div>
        <div className="input-group mb-3">
          <label className="form-control" htmlFor="inputGroupSelect01">
            What is most important to you?
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={handleSelectChange}
          >
            <option defaultValue>Choose...</option>
            <option value="1">Love</option>
            <option value="2">Wealth</option>
            <option value="3">Peace</option>
            <option value="4">Evil</option>
          </select>
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit"
          onClick={handleOnclick}
        ></input>
      </div>
    </>
  );
}

export default InputForm;
