import React, { useRef, useState } from "react";
import styled from "styled-components";
import breakpoints from "../../breakpoints";
import Button, { MyButton } from "../ui/Button";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Form = styled.form`
  margin: 2rem auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: red;
  border-radius: 6px;
  width: 90%;
  max-width: 40rem;
  display:flex;
  flex-direction:column
  justify-content: space-between;
  gap: 1rem;

  button {
    width: 100%;
    font: inherit;
    padding: 0.25rem 0.5rem;
    background-color: #03be9f;
    border: 1px solid #03be9f;
    color: #dafff7;
    border-radius: 4px;
  }

  @media only screen and ${breakpoints.device.sm} {
    flex-direction: row;
    background: white;

    button {
      width: 20%;
    }
  }
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media only screen and ${breakpoints.device.sm} {
    flex-direction: row;
    width: 80%;
  }
`;

const Control = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  label {
    font-weight: bold;
  }
  select {
    font: inherit;
    background-color: white;
    border-radius: 6px;
    width: 70%;
    padding: 0.25rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
  }
`;

const EventsSearch = (props) => {
  // const [year, setYear] = useState(undefined);
  // const [data, setData] = useState({
  //   year: "",
  //   month: "",
  // });

  const yearRef = useRef();
  const monthRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(yearRef.current.value);

    const year = yearRef.current.value;
    const month = monthRef.current.value;
    //accedemos al value para obtener el valor verdadero seleccionado

    props.onSearch(year, month);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Controls>
        <Control>
          {/* el html for es el valor del id del formulario al que debe estar asociado el label */}
          <label htmlFor="year">Year</label>
          <select
            id="year"
            // onChange={(e) =>
            //   setData({ ...data, [e.target.id]: e.target.value })
            // }
            ref={yearRef}
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </Control>
        <Control>
          {/* el html for es el valor del id del formulario al que debe estar asociado el label */}
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>
                {m}
              </option>
            ))}
          </select>
        </Control>
      </Controls>
      <button type="submit">search</button>
    </Form>
  );
};

export default EventsSearch;
