/* include this in your regular script */

let selectedOption

const handleOpen = () => {
    let select = document.querySelector(".select__wrap")
    let isClosed = select.classList.contains("close")
    if (isClosed) { //if it's closed
        select.classList.add("open")
        select.classList.remove("close")
        let options = document.querySelector(".select__options")
        options.style.display = "block" 
    } 
    if (!isClosed) {
        close()
    }
}

const close = () => {
    let select = document.querySelector(".select__wrap")
    select.classList.remove("open")
    select.classList.add("close")
    let options = document.querySelector(".select__options")
    options.style.display = "none" 
}

const select = (value) => {
    selectedOption = value
    let selected = document.querySelector(".select__wrap strong")
    selected.innerText = value
    close()
}