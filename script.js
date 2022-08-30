window.onload = function() {
    let c = document.getElementById("celsius");
    let f = document.getElementById("fahr");
    c.oninput = function() {
        f.value = (c.value * 9/5) + 32;
    };
