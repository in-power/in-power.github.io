//Clock Logic
var second = 180;
var minute = 180;

setInterval(
    function() {
        second = second + 6
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    }, 1000
);

setInterval(
    function() {
        minute = minute + 6
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
    }, 60000
);

