export default function Result({ age }) {
  return (
    <div className="result">
      <h1>
        <span id="YY">{!age.year ? "--" : age.year} </span>
        year
      </h1>
      <h1>
        <span id="MM">{!age.month ? "--" : age.month} </span>months
      </h1>
      <h1>
        <span id="DD">{!age.day ? "--" : age.day} </span>days
      </h1>
    </div>
  );
}
