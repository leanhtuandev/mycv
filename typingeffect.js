var text = 'Front End Developer'
var i = 0;


function typing() {
    if (i < text.length) {
        document.getElementById('typing').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 150);
    } else {
        eraser();
    }
}
typing();

function eraser() {
    if (i >= 0) {
        var temp = text.substring(0, i);
        document.getElementById('typing').innerHTML = temp;
        i--;
        setTimeout(eraser, 70);
    } else {
        typing();
    }
}