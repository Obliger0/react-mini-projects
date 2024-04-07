import { useState } from "react";
import "./accordian.css"
export function Accordion() {
    const [overFlow, setOverFlow]= useState(false)
    const btnContext = ">"
    document.body.addEventListener("click",(e)=>{
        e.stopPropagation();
        setOverFlow(false);
    })
    return (
      <div
        className="container"
        onClick={(e) => {
          e.stopPropagation();
          setOverFlow(true);
        }}
      >
        <button
          className={`btn ${overFlow && "btn-rotate"}`}
          onClick={(e) => {
            e.stopPropagation();
            if (overFlow) setOverFlow(false);
            else setOverFlow(true);
          }}
        >
          {btnContext}
        </button>
        <h4 className="accordion-card-hide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h4>
        {overFlow && (
          <div className="accordion-card-show">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
            officia quae. Quia nostrum totam in quaerat quibusdam. Sunt eius
            dolor rerum ullam, tempora sit aliquam, cumque et excepturi ea
            debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Pariatur sapiente eos perferendis saepe. Officia, nemo at beatae rem
            laboriosam deserunt, consequuntur dignissimos temporibus repellat
            autem distinctio quia eos, asperiores ipsam?
          </div>
        )}
        <h4 className="accordion-card-hide">Open Video</h4>
        <h4 className="accordion-card-hide">Open Image</h4>
      </div>
    );
}