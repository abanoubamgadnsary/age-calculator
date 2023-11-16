import { useState } from "react";
import InputContainer from "./component/InputContainer";
import Result from "./component/Result";
import "./App.css";

export default function App() {
  const [age, setAge] = useState({});
  function calculateAge(day, month, year) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let yearDiff = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      yearDiff -= 1;
    }
    const age = {
      year: yearDiff,
      month: Math.abs(monthDiff),
      day: Math.abs(dayDiff),
    };
    setAge(age);
  }

  return (
    <div className="card">
      <InputContainer onSubmit={calculateAge} />
      <Result age={age} setAge={setAge} />
    </div>
  );
}
