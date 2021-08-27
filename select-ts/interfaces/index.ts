export interface Option {
    val: string;
    display: string;
  }

export class OptionClass implements Option {
    val: string
    display: string
    constructor(val:string, display: string) {
        this.val = val
        this.display = display
    }
}

export interface SelectProps {
    options: Array<Option>;
    selectedOpt: Function;
  }