import { useState } from "react";
import { SelectionComp } from "./SelectionComp";
import "./form.css"

export function FormComp() {
    const [age, setAge] = useState(-1);
    const [formData, setFormData] = useState([]);
    const date = new Date();
    let year = date.getFullYear();
    console.log({formData});
    return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          const [year,month,day] = e.target.dob.value.split("-");
          console.log({year,month,day});
          const newFormData = [
            ...formData,
            {
              firstName: (e.target.firstName.value ??= ""),
              middleName: (e.target.middleName.value ??= ""),
              lastName: (e.target.lastName.value ??= ""),
              dob: {day:day, month:month,year:year},
              age: age,
              phone: (e?.target?.number?.value || null),
              class: (e?.target.class.value || null),
              subject: (e?.target.subject.value || null),
            },
          ];
          setFormData(newFormData);
        }}
      >
        <label for="firstName">First Name :</label>
        <input type="text" id="firstName" required placeholder="First Name" />
        <label for="middleName">Middle Name :</label>
        <input type="text" id="middleName" placeholder="Middle Name" />
        <label for="lastName">Last Name :</label>
        <input type="text" id="lastName" required placeholder="Last Name" />
        <label for="dob">Date of Birth :</label>
        <input
          type="date"
          id="dob"
          required
          min="1960-01-01"
          max="2022-01-01"
          onChange={(e) => {
            e.preventDefault();
            const selectedDate = e.target.value;
            const [yearVal] = selectedDate.split("-");
            setAge(year - Number(yearVal));
          }}
        />
        {age > 0 && <SelectionComp age={age} />}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}