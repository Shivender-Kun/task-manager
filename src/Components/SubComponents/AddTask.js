import { useDispatch } from "react-redux";
import { ADD_TODO } from "../Components";
import React, { useState } from "react";

function AddTask() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    name === "title"
      ? settitle(value)
      : name === "description"
      ? setdescription(value)
      : name === "date"
      ? setdate(value)
      : settime(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || description === "" || date === "" || time === "") {
      alert("Fill all the fields");
      return;
    }

    const data = {
      title,
      description,
      date,
      time,
    };

    dispatch(ADD_TODO(data));
    reset();
  };

  const reset = () => {
    settime("");
    setdescription("");
    setdate("");
    settitle("");
  };

  return (
    <div className="Add">
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Title
        </span>
        <input
          type="text"
          name="title"
          minLength="3"
          maxLength="20"
          value={title}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Details</span>
        <textarea
          name="description"
          minLength="3"
          maxLength="50"
          value={description}
          className="form-control"
          aria-label="With textarea"
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="d-flex justify-content-evenly">
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Date
          </span>
          <input
            type="date"
            name="date"
            value={date}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Time
          </span>
          <input
            type="time"
            name="time"
            value={time}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddTask;
