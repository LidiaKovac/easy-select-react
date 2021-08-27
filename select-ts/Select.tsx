import React,{useState, FC} from "react";
import { Option, SelectProps } from "./interfaces";
import "../styling/Select.scss";


export const Select: FC<SelectProps> = ({ options, selectedOpt }) => {
  const [selected, setSelected] = useState<Option>();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="select">
      <div className="select__wrap" onClick={() => setOpen(!open)}>
        <strong>{selected?.display || "Select one"}</strong>
      </div>
      {open && (
        <div className="select__options">
          {options.map((opt) => (
            <div
              key={opt.display}
              className="single-option"
              onClick={() => {
                selectedOpt(opt); //sets selection in this component
                setSelected(opt); //set selection in parent component
                setOpen(false); //closes component
              }}
            >
              {opt.display}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
