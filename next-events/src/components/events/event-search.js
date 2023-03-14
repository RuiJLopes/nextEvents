import { useRef } from "react";
import Button from "../ui/button";
import classes from "./event-search.module.css";

export default function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth =
      monthInputRef.current.options[monthInputRef.current.selectedIndex].id;
    console.log(selectedMonth);

    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year">Year</label>
            <select id="year" ref={yearInputRef}>
              <option id="2021">2021</option>
              <option id="2022">2022</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select id="month" ref={monthInputRef}>
              <option id="1">January</option>
              <option id="2">February</option>
              <option id="3">March</option>
              <option id="4">April</option>
              <option id="5">May</option>
              <option id="6">June</option>
              <option id="7">July</option>
              <option id="8">August</option>
              <option id="9">September</option>
              <option id="10">October</option>
              <option id="11">November</option>
              <option id="12">December</option>
            </select>
          </div>
        </div>
        <Button>Find Events</Button>
      </form>
    </>
  );
}
