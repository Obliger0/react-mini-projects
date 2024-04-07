import { useState } from "react";
import "./dragAndDrop.css"

export function DragAndDrop({onFileDrop=()=>{}}) {
    const [isDrag, setIsDrag] = useState(false);

    function setFiles(files) {
      const fileList = Object.values(files).map((file) => {
        console.log();
        return {
          url: URL.createObjectURL(file),
          data: file,
        };
      });
      onFileDrop(fileList);
    }
    return (
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDrag(true);
        }}
        onDragLeave={(e) => {
          setIsDrag(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setFiles(e.dataTransfer.files);
          setIsDrag(false);
        }}
        className={`drop-zone ${isDrag && "onDrag-drop-zone"}`}
      >
        <input
          style={{display:"none"}}
          id="drag-file-input"
          type="file"
          multiple
          onChange={(e) => {
            setFiles(e.target.files);
          }}
        />
        <label className="file-label" for="drag-file-input">
          Drop Here
        </label>
      </div>
    );  
}