let cursor = document.querySelector("#cursor");
let header_button_width = document.querySelector("header > button").clientWidth;
let main_section_button = document.querySelector(".main-section div button").clientWidth;

function cursor_move(pos) {
    cursor.style.top = `${pos.clientY}px`
    cursor.style.left = `${pos.clientX}px`
}

function mouse_over() {
    cursor.style.width = `${header_button_width}px`;
}

function mouse_leave() {
    cursor.style.width = "6vw";
    cursor.style.height = "6vw";
}

function main_section_button_mouse_over() {
    cursor.style.width = `${main_section_button}px`;
}