

export function OptionComp({ optionSize, setRowData }) {
  return (
    <select
      onChange={(e) => {
        setRowData(Number(e.target.value));
      }}
    >
      <option value="0">Select TableSize</option>
      {optionSize.map((val) => {
        return <option value={val}>{val}</option>;
      })}
    </select>
  );
}
