import React from "react";

function InputForm() {
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
          <select className="form-select" id="inputGroupSelect01">
            <option defaultValue>Choose...</option>
            <option value="1">Love</option>
            <option value="2">Wealth</option>
            <option value="3">Peace</option>
          </select>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"></input>
      </div>
    </>
  );
}

export default InputForm;
