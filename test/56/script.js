let cursor = document.getElementById("icursor");
let button_width = document.getElementById("button").clientWidth;

function mouse_moved(pos) {
    let mouse_x = pos.clientX;
    let mouse_y = pos.clientY;

    cursor.style.top = `${mouse_y}px`
    cursor.style.left = `${mouse_x}px`
}

function mouse_over() {
    cursor.style.width = `calc(${button_width}px + 6px)`
    console.log(button_width);
}

function mouse_leave() {
    cursor.style.width = "70px"
}