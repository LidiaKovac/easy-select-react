# ✍️ CUSTOM SELECT / DROPDOWN ✍️

I always struggle to use HTML5 `<select>` and packages are sometimes overcomplicated for just a simple dropdown. 

But... I am not really a fun of frameworks like Bootstrap, so I made my own! 👻

**Here is what it looks like...**

<img src="https://i.ibb.co/ygqhtLg/immagine-2021-08-27-150730.png"/>

I made a React version (can be used with or without typescript) and a vanilla JS/HTML/CSS version! 📚

## Documentation: 

### **Styling**:

| CSS Class         | Changes |
| ----------------- | --------------------------------------------------- |
| `select__wrap`    | Width, height, border-radius, bg color, text color. |
| `select__options` | Width of options, border-radius of dropdown.        |
| `single__option`  | Height of options, padding, border + bg color.      |

### **React**:

> If you are already working on an app create with `create-react-app` you will not need to install anything. 

#### Interfaces: 
| Interface     | Use                                                 |
| ------------- | --------------------------------------------------- |
| `Option`      | Single option. `val` will be passed to the parent component, `display` will be displayed on the interface. |
| `OptionClass` | Constructor for Options, use to create the array for the `options` prop.        |

#### Props:
| Prop              | Use / Type                                          |
| ----------------- | --------------------------------------------------- |
| `options`         | Array of `Option`     |
| `selectedOpt`     | Function that should set `Option["val"]` in the state (see example)       |

