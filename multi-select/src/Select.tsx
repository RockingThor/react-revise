import { useState } from "react";

export interface SelectOption {
  option: string;
  value: string | number;
}

interface SelectProps {
  options: SelectOption[];
  multiple: boolean;
}

const Select = ({ options, multiple }: SelectProps) => {
  const [selected, setSelected] = useState<SelectOption[]>(options);

  function onRemoveClick(index: number) {}

  return (
    <div className="select__outer">
      <div className="selected__box">
        <div className="value__container">
          {selected.map((item, i) => (
            <div key={item.value} className="individual__value">
              <span className="text" key={item.value}>
                {item.option}
              </span>
              <button
                className="remove__button"
                onClick={() => {
                  onRemoveClick(i);
                }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="select__box">
        <div className="option__area">
          <ul className="item__list">
            {options.map((item, i) => (
              <li className="list__item" key={item.value}>
                {item.option}
              </li>
            ))}
          </ul>
        </div>
        <div className="view__button">
          <button className="remove__button" onClick={() => {}}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Select;
