import { useState } from "react";
import AccordianElement from "./AccordianElement";

const Accordian = (props) => {
  const { contentArray } = props;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {contentArray.map((item, index) => {
        return (
          <div key={item.id} onClick={() => setOpenIndex(index)}>
            <AccordianElement
              content={item.content}
              heading={item.heading}
              open={index === openIndex}
            />
          </div>
        );
      })}
    </>
  );
};

export default Accordian;
