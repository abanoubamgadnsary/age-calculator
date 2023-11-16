import { useState } from "react";
export default function InputContainer({ onSubmit }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [validate, setValidate] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (day === "" || month === "" || year === "") {
      setValidate(false);
      console.log(validate);
      return;
    }
    onSubmit(day, month, year);
    setValidate(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="block">
            <label
              className={
                (day < 1 || day > 31) && validate === false ? "label-red" : ""
              }
            >
              Day
            </label>
            <input
              type="number"
              min={1}
              max={31}
              id="day"
              placeholder="DD"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            {day < 0 || day > 31 ? (
              <small className="red">Must be a valid Day</small>
            ) : !day && validate === false ? (
              <small className="red">This field is required</small>
            ) : (
              ""
            )}
          </div>

          <div className="block">
            <label
              className={
                (month < 1 || month > 12) && validate === false
                  ? "label-red"
                  : ""
              }
            >
              Month
            </label>
            <input
              type="text"
              min={1}
              max={12}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              id="Month"
              placeholder="MM"
            />
            {month < 0 || month > 12 ? (
              <small className="red">Must be a valid month</small>
            ) : !month && validate === false ? (
              <small className="red">This field is required</small>
            ) : (
              ""
            )}
          </div>

          <div className="block">
            <label
              className={
                (!year || year > 2023) && validate === false ? "label-red" : ""
              }
            >
              Year
            </label>
            <input
              type="number"
              value={year}
              min={1990}
              onChange={(e) => setYear(e.target.value)}
              id="year"
              placeholder="YYYY"
            />
            {year > 2023 ? (
              <small className="red">Must be in the past</small>
            ) : !year && validate === false ? (
              <small className="red">This field is required</small>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="submit_block">
          <hr></hr>
          <button type="submit" className="submit-btn">
            <img src="./assets/images/icon-arrow.svg" alt="arrow"></img>
          </button>
        </div>
      </form>
    </div>
  );
}
