import { useState } from "react";

export function SelectionComp({age}) {
    const [num, setNum] = useState();
    const [subOption, setSubOption] = useState([]);
    const [errorFlag, setErrorFlag] = useState(false);
    const tenth = ["Math", "science", "Eng", "Comp", "sst"]
    const twelveth = ["Math", "Phy", "chem"];
    const college = ["B.tech", "B.sc", "B.A","B.Com"];
    if(age>=18){
        return (
          <div className="form">
            <label for="number">Phone Number :</label>
            <input
              type="number"
              id="number"
              required
              placeholder="12345 67890"
              value={num}
              onChange={(e) => {
                setNum(e.target.value);
                console.log(num+"");
                if ((e.target.value+"").length > 10)setErrorFlag(true);
                else setErrorFlag(false)
              }}
            />
            {errorFlag && (
              <span className="error-message">⚠ Invalid Number</span>
            )}
            <label for="class">Class :</label>
            <select
              id="class"
              required
              onChange={(e) => {
                if (e.target.value === "tenth") setSubOption(tenth);
                else if (e.target.value === "twelveth") setSubOption(twelveth);
                else if (e.target.value === "college") setSubOption(college);
                else setSubOption([]);
              }}
            >
              <option>Select Class</option>
              <option value="tenth">8-10</option>
              <option value="twelveth">11-12</option>
              <option value="college">College</option>
            </select>
            <label for="subject">Subject : </label>
            <select
              id="subject"
              multiple
              required
              onChange={(e) => {
                // console.log(e);
              }}
            >
              <option>Subjects</option>
              {subOption.map((name) => {
                return <option value={name}>{name}</option>;
              })}
            </select>
          </div>
        );
    }
    else{
        return (
          <div className="form">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="abc@email.com"
              onChange={(e) => {
                console.log(
                  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value)
                );
                setErrorFlag(
                  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value)
                );
              }}
            />
            {!errorFlag && (
              <span className="error-message">Invalid email address</span>
            )}
          </div>
        );
    }
}