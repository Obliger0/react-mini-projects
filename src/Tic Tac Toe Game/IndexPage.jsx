import { useState } from "react";
import { useLocation } from "react-router-dom";

import "./tictoctoe.css";

export function TicTac() {
  const [arr, setArr] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [value, setValue] = useState("⭕");
  const [players, setPlayers] = useState({});
  const [result, setResult] = useState({player: "", status:false});
  const { state } = useLocation();
  
  return (
    <div className="container">
      {result.status && (
        <div
          className="cover-of-result"
          onClick={() => {
            setResult({ player: "", status: false });
          }}
        >
          <div className="result">Player "{result.player}" Won</div>
        </div>
      )}
      <div className="players">Player 1 : {state.player1}</div>
      <div className={`game-container ${result.player && "blur-game"}`}>
        {arr.map((arr2, i) => {
          return (
            <div className="row">
              {arr2.map((elem, j) => {
                return (
                  <CardComps
                    elem={elem}
                    i={i}
                    j={j}
                    value={value}
                    setValue={setValue}
                    setArr={setArr}
                    arr={arr}
                    setResult={setResult}
                    result={result.status}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="players">Player 2 : {state.player2}</div>
    </div>
  );
}

function CardComps(props) {
  const { elem, i, j, value, setValue, setArr, arr, setResult=()=>{}, result = false } = props;

  function handleValidate(arr) {
    let ooCount = 0, xxCount = 0,  oooCount = 0, xxxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let oCount = 0, xCount = 0;
        if (arr[i][j] === "⭕") ooCount++;
        if (arr[i][j] === "✖")  xxCount++;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === "⭕") oCount++;
            if (arr[i][j] === "✖") xCount++;
            if (i === j) {
                if (arr[i][j] === "⭕") oooCount++;
                if (arr[i][j] === "✖") xxxCount++;
            }
        }
        if (oooCount >= 3 || oCount >= 3) return setResult({ player: "X", status: true });
        if (xxxCount >= 3 || xCount >= 3) return setResult({ player: "O", status: true });
    }
    if (ooCount === 3) return setResult({ player: "O", status: true });
    if (xxCount === 3) return setResult({ player: "X", status: true });
  }
  return (
    <div
      className="card"
      onClick={() => {
        if (!arr[i][j] || result===true) {
          setValue(value === "✖" ? "⭕" : "✖");
          arr[i][j] = value;
          setArr([...arr]);
          handleValidate(arr, i, j);
        }
      }}
    >
      {elem !== "" && <span>{elem}</span>}
    </div>
  );
}
