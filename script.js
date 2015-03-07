var x;

function changecolors() {
    x = 1;
    setInterval(change, 200);
}

function change() {
    if (x === 1) {
        color = "#f295cd";
        x = 2;
    } else {
        color = "#63dde7";
        x = 1;
    }

    document.body.style.background = color;
}