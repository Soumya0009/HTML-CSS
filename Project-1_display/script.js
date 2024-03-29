const visible = document.getElementById("display");
const type = document.getElementById("input");
const send = document.getElementById("btn");

function showName() {
    const val = type.value;
    visible.innerText = val;
}
