import { useRef, useState } from 'react';
import './form.css'

export function FormComponent() {
    const [ errorMsg, setErrorMsg] = useState(false);
    const [cardNumber, setCardNumber] = useState([]);
    const monthArr = [1,2,3,4,5,6,7,8,9,10,11,12];
    const yearArr = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031];
    const inputDivRef = useRef();
    console.log(cardNumber);
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log({childrens : e.target.children[1].children[0].value});
          const arr = e.target.children[1].children;
          let newCardNumber = arr[0].value + arr[1].value + arr[2].value + arr[3].value;
          if (newCardNumber.length === 16) {
            newCardNumber = [...cardNumber, {cardNumber:newCardNumber}];
            setCardNumber(newCardNumber);
          }
          else alert("digit must equal to 16")
        }}
      >
        <label>Debit card Number</label>
        <div
          ref={inputDivRef}
          className="debit-input-container"
          onChange={(e) => {}}
        >
          <input required
            className="card"
            for="card1"
            type="number"
            placeholder="1234"
            // value={cardNumber[0]?.substring(0, 4)}
            onChange={(e) => {
              if ((e.target.value + "").length >= 4)
                inputDivRef.current.children[1].focus();
            }}
          />
          <input required
            className="card"
            type="number"
            placeholder="1234"
            // value={cardNumber[0]?.substring(4, 8)}
            onChange={(e) => {
              if ((e.target.value + "").length >= 4) {
                inputDivRef.current.children[2].focus();
              } else if ((e.target.value + "").length <= 0) {
                inputDivRef.current.children[0].focus();
              }
            }}
          />
          <input required
            className="card"
            type="number"
            placeholder="1234"
            // value={cardNumber[0]?.substring(8, 12)}
            onChange={(e) => {
              if ((e.target.value + "").length >= 4) {
                inputDivRef.current.children[3].focus();
              } else if ((e.target.value + "").length <= 0) {
                inputDivRef.current.children[1].focus();
              }
            }}
          />
          <input required
            className="card"
            type="number"
            placeholder="1234"
            // value={cardNumber[0]?.substring(12)}
            onChange={(e) => {
              if ((e.target.value + "").length >= 4)
                {inputDivRef.current.children[3].blur();}
              else if ((e.target.value + "").length <= 0)
                {inputDivRef.current.children[2].focus();}
            }}
          />
        </div>
        <div id="content">
          <div id="date">
            <select required id="month" placeholder="MM">
              <option value="null">MM</option>
              {monthArr.map((month) => (
                <option value={month}>{month}</option>
              ))}
            </select>
            <select
                required
              id="month"
              type="number"
              min="2010"
              max="2040"
              placeholder="YY"
            >
              <option value="yy">YYYY</option>
              {yearArr.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>
          <input
            id="month"
            required
            type="number"
            placeholder="CVV"
            onChange={(e) => {
              if ((e.target.value + "").length > 3) setErrorMsg(true);
              else setErrorMsg(false);
            }}
          />
          {errorMsg && <span style={{ color: "red" }}>Error</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}