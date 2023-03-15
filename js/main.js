let courtain = document.getElementById("courtain");
let courtain_h1 = document.getElementById("courtain-h1");
let num = 0;

function changeValue() {
    if ( num > 100 ) {
        courtain.style.opacity = 0;
        courtain.style.zIndex = -100;
        return;
    } else {
        courtain_h1.innerHTML = num + "%";
        num++;
    }
}

setInterval(changeValue, 20);
