export function Pagination({ setRow, body, page, currentPage, setCurrentPage }) {
  function onPrevClick() {
    const newRow = body.slice(currentPage-page, currentPage);
    setRow(newRow);
    setCurrentPage(Number(currentPage) - page);
  }
  function onNextClick() {
    const newRow = body.slice(currentPage, currentPage + page);
    setRow(newRow);
    setCurrentPage(Number(currentPage) + page);
  }

  return (
    <div>
      <button disabled={currentPage <= 0} onClick={onPrevClick}>
        Prev
      </button>
      <button disabled={currentPage >= body.length} onClick={onNextClick}>
        Next
      </button>
    </div>
  );
}