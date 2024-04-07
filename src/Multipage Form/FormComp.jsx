import { useState } from "react";
import { Link } from "react-router-dom";
import { formPageData } from "./formPageData";

export function FormComp() {
    const [temp, setTemp] = useState([0,1,2]);
    const [page, setPage] = useState(0);
    return (
      <div>
        {temp[page] === page && (
          <ChildFormComp formData={formPageData[page]} setPage={setPage} />
        )}
      </div>
    );
}


function ChildFormComp({ formData = {}, setPage=()=>{}}) {
  return (
    <div>
      <h2>{formData?.title}</h2>
      <h5>{formData?.subTitle}</h5>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {formData.form.map((input) => {
          return <input type={input.type} placeholder={input.title} />;
        })}
        {formData.buttons.map((elem) => {
          return (
            <button
              onClick={() => {
                setPage((page)=> page + 1);
              }}
            >
              {elem.title}
            </button>
          );
        })}
      </form>
    </div>
  );
}


