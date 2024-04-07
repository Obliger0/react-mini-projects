import { useEffect, useState } from "react";
import { OptionComp } from "./OptionComp";
import { Pagination } from "./Pagination";
export function Table() {
  const [header, setHeader] = useState([]);
  const [body, setBody] = useState([]);
  const [row, setRow] = useState([]);
  const [optionSize, setOptionSize] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(5);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setData(data);
}
function setOptionComp(body) {
  let newOptionSize = [], x = 0;
  for(let i = 0; i < body.length / 5; i++) {
        newOptionSize[i] = x + 5;
         x += 5;
    }
  setOptionSize(newOptionSize);
}
function setRowData(epage=0) {
  const newRow = body.slice(0 + currentPage, epage + currentPage);
  setRow(newRow);
  setPage(epage);
}

function setData(data) {
  const tableData = data.map((obj) => {
    const values = Object.values(obj);
    return {
      cells: values.map((value) => {
        return {
          cellName: value,
        };
      }),
    };
  });
  setHeader(Object.keys(data[0]));
  const newRow = tableData.slice(0, 5);
  setRow(newRow);
  setBody(tableData);
  setOptionComp(tableData);
}
  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <OptionComp optionSize={optionSize} setRowData={setRowData} />
      <table>
        <thead>
          {header.map((colName) => {
            return <th>{colName}</th>;
          })}
        </thead>
        <tbody>
          {row.map((row) => {
            return (
              <tr>
                {row.cells.map((data) => {
                  return (
                    <td>
                      <input
                        type="text"
                        placeholder={data.cellName}
                        value={data.cellName}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        setRow={setRow}
        body={body}
        page={page}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
