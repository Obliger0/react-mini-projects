import "./table.css";

export function ImageTable({ image = [] }) {

  return (
    <div className="table-container">
      <table>
        <thead>
          <th>Image</th>
          <th>Image Name</th>
          <th>Image Type</th>
          <th>Last Modified Date</th>
        </thead>
        <tbody>
          {image.map((obj) => {
            const date = JSON.stringify(obj.data?.lastModifiedDate);
            return (
              <tr>
                <td>
                  <img src={obj.url} alt="" className="image-in-cell" />
                </td>
                <td>{obj.data?.name}</td>
                <td>{obj.data?.type}</td>
                <td>{date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
