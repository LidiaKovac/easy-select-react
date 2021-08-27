import React,{ useState } from "react";
import { Option, OptionClass } from "../select-ts/interfaces";
import { Select } from "../select-ts/Select";

const Example = () => {
    const [option, setOption] = useState<Option["val"]>()
const options = [new OptionClass("1", "Option 1"), new OptionClass("2", "Option 2")]
  return (
    <>
      <Select options={options} selectedOpt={(mode:Option)=> setOption(mode.val)} />
    </>
  );
};
export default Example;
